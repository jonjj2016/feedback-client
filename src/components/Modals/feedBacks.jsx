import { Modal } from '@mantine/core'
import { FormWrapper } from '@components/Froms'
import { useMutation, useGet, useFind } from 'figbird'
import constants from 'src/Constants/index'
import useModalNavigate from 'src/Hooks/useModalRouter'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

const FeedBackModal = ({ initFields, ...props }) => {
  const { close, state } = useModalNavigate()
  const [fields, setFields] = useState(initFields)
  const { create, patch, error: mutationError } = useMutation(
    constants.FEEDBACKS,
  )
  const { data: students } = useFind(constants.STUDENTS)
  const { data } = useGet(constants.FEEDBACKS, state.updateId)

  const { userId } = useSelector((state) => state.global)

  useEffect(() => {
    if (data) {
      const newFields = fields.map((item) => {
        return {
          ...item,
          inputProps: { ...item.inputProps, defaultValue: data[item.field] },
        }
      })
      setFields(newFields)
    }
  }, [data])

  const onSubmit = async (data) => {
    if (!state.updateId) {
      // temporary sol
      const student = students[0]
      await create({ ...data, instructorId: userId, student })
    } else {
      await patch(state.updateId, data, { new: true })
    }
    close()
  }

  const onDelete = async (data) => {
    if (state.updateId) {
      await patch(state.updateId, { isDeleted: true }, { new: true })
      close()
    }
  }
  return (
    <Modal {...props}>
      <FormWrapper fields={fields} onDelete={onDelete} onSubmit={onSubmit} />
    </Modal>
  )
}

export default FeedBackModal
