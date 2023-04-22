import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { useSelector } from 'react-redux'
import { Provider } from 'figbird'
import feathersClient from '@state/feathersServices'
import {
  Home,
  Layout,
  Curricula,
  Groups,
  Lectures,
  Students,
  FeedBacks,
} from '@pages/index'

import { RootModal } from '@modals/index'

import theme from './theme'

function App() {
  const { mode } = useSelector((state) => state.global)
  return (
    <Provider feathers={feathersClient}>
      <BrowserRouter>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: mode,
            ...theme,
          }}
        >
          <RootModal />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/students" element={<Students />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/curricula" element={<Curricula />} />
              <Route path="/lectures" element={<Lectures />} />
              <Route path="/feedbacks" element={<FeedBacks />} />
            </Route>
          </Routes>
        </MantineProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
