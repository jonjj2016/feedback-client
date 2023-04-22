import { Button, Flex } from '@mantine/core'
import useModalNavigate from 'src/Hooks/useModalRouter'
import Constants from 'src/Constants/index'

const Home = () => {
  const { open } = useModalNavigate()
  return (
    <Flex justify="space-between">
      <Button variant="default" onClick={() => open(Constants.CURRICULA)}>
        Curricula
      </Button>
      <Button variant="default" onClick={() => open(Constants.GROUPS)}>
        Groups
      </Button>
      <Button variant="default" onClick={() => open(Constants.FEEDBACKS)}>
        Feedbacks
      </Button>
      <Button variant="default" onClick={() => open(Constants.LECTURES)}>
        Lectures
      </Button>
      <Button variant="default" onClick={() => open(Constants.STUDENTS)}>
        students
      </Button>
    </Flex>
  )
}

export default Home
