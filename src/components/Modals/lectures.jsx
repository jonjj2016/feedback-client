import { Modal } from '@mantine/core'
import { FormWrapper } from '@components/Froms'
import { useMutation, useGet } from 'figbird'
import constants from '@constants/index'
import useModalNavigate from '@hooks/useModalRouter'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

const LecturesModal = ({ initFields, ...props }) => {
  const { close, state } = useModalNavigate()
  const [fields, setFields] = useState(initFields)
  const { create, patch, error: mutationError } = useMutation(
    constants.LECTURES,
  )
  const { data } = useGet(constants.LECTURES, state.updateId)

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
      await create({ ...data, createdBy: userId })
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

export default LecturesModal
