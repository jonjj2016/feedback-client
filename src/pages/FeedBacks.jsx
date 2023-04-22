import useModalNavigate from 'src/Hooks/useModalRouter'
import { useEffect, useState } from 'react'
import constants from 'src/Constants/index'
import { Button, ActionIcon, Table } from '@mantine/core'
import { useMutation, useFind } from 'figbird'

import { IconSettings, IconTrash } from '@tabler/icons-react'

const FeedBacks = () => {
  const { open } = useModalNavigate()
  const {
    data,
    status,
    isFetching,
    error,
    refetch,
  } = useFind(constants.FEEDBACKS, { query: { isDeleted: false } })
  console.log('🚀 ~ file: FeedBacks.jsx:18 ~ FeedBacks ~ data:', data)
  const { patch } = useMutation(constants.FEEDBACKS)

  const [elements, setElements] = useState([])
  const rows = elements.map((element) => (
    <tr style={{ cursor: 'pointer' }} key={element._id}>
      <td>{element.instructorId}</td>
      <td>{element.student}</td>
      <td>{element.text}</td>
      <td>{element.isActive ? 'yes' : 'No'}</td>
      <td>
        <ActionIcon
          onClick={() => {
            open(`${constants.FEEDBACKS}`, {
              state: { update: element._id, element },
              search: `updateId=${element._id}&new=true`,
            })
          }}
        >
          <IconSettings size="1.125rem" />
        </ActionIcon>
      </td>
      <td>
        <ActionIcon
          onClick={async () => {
            await patch(element._id, { isDeleted: true }, { new: true })
          }}
        >
          <IconTrash size="1.125rem" />
        </ActionIcon>
      </td>
    </tr>
  ))

  useEffect(() => {
    if (!isFetching && data) {
      setElements(data)
    }
  }, [data])

  return (
    <div>
      <Button onClick={() => open(constants.FEEDBACKS)} variant="default">
        Create
      </Button>
      <Table highlightOnHover striped>
        <thead>
          <tr>
            <th key={7}>instructorId</th>
            <th key={6}>Student</th>
            <th key={5}>Text</th>
            <th key={3}>Active</th>
            <th key={2}>Edit</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  )
}

export default FeedBacks
