const MyInput = ({ register, ...props }) => {
  const defStyles = { width: '100%', padding: '8px' }
  const inputTypes = {
    default: 'mantine-Input-input mantine-1tvphxu',
    number: 'mantine-Input-input mantine-NumberInput-input mantine-wfu758',
  }
  const wrapperTypes = {
    number: 'mantine-Input-wrapper mantine-NumberInput-wrapper mantine-wwu0o5',
    default: 'mantine-Input-wrapper mantine-TextInput-wrapper mantine-wwu0o5',
  }
  return (
    <div
      className={
        props.type
          ? wrapperTypes[props.type] || wrapperTypes[props.type]
          : wrapperTypes.default
      }
    >
      <input
        style={{ ...defStyles, ...props.styles }}
        className={
          props.type
            ? inputTypes[props.type] || inputTypes.default
            : inputTypes.default
        }
        {...register}
        {...props}
      />
    </div>
  )
}

export default MyInput
