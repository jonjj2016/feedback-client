import { Curricula, Students, Lectures, FeedBacks, Groups } from '.'
import { useLocation } from 'react-router-dom'
import useModalNavigate from '@hooks/useModalRouter'
import Constants from '@constants/index'
import { initialFields } from '@utils/defaults'

const Main = () => {
  const { close, match } = useModalNavigate()

  const { state } = useLocation()
  return (
    <>
      <Curricula
        state={state}
        initFields={initialFields.curricula}
        opened={match(Constants.CURRICULA)}
        onClose={close}
        title="Curricula"
      />
      <Students
        initFields={initialFields.students}
        opened={match(Constants.STUDENTS)}
        onClose={close}
        title="Students"
      />
      <Lectures
        initFields={initialFields.lectures}
        opened={match(Constants.LECTURES)}
        onClose={close}
        title="Lectures"
      />
      <FeedBacks
        initFields={initialFields.feedbacks}
        opened={match(Constants.FEEDBACKS)}
        onClose={close}
        title="FeedBacks"
      />
      <Groups
        initFields={initialFields.groups}
        opened={match(Constants.GROUPS)}
        onClose={close}
        title="Groups"
      />
    </>
  )
}

export default Main
