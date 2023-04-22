import Input from '@components/Base/UI/Input'
import useModalNavigate from 'src/Hooks/useModalRouter'
import { useForm } from 'react-hook-form'

const Lectures = ({ fields, onSubmit, onDelete }) => {
  const { state } = useModalNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      {fields.map((field) => {
        return (
          <span key={field.field}>
            <Input
              {...field.inputProps}
              register={{ ...register(field.field, { ...field.params }) }}
            />
            <br />
          </span>
        )
      })}

      <button type="submit">{state.updateId ? 'Update' : 'Submit'}</button>
      {state.updateId && (
        <>
          <br />
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </form>
  )
}

export default Lectures
