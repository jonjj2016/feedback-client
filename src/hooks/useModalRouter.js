import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'

const useModalNavigate = () => {
  const navigate = useNavigate()
  const { pathname, hash, state } = useLocation()
  let [searchParams, setSearchParams] = useSearchParams()
  const updateId = searchParams.get('updateId')
  return {
    state: { ...state, updateId },
    match: (checkHash) => {
      return hash === `#${checkHash}`
    },
    open: (hash, params) => {
      navigate({ pathname, hash, ...params })
    },
    close: () => {
      navigate({ hash: '', state: '' })
    },
  }
}
export default useModalNavigate
