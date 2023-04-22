const Select = ({ register, children, ...props }) => {
  const inputTypes = {
    default:
      'mantine-MultiSelect-searchInput mantine-MultiSelect-searchInputPointer mantine-MultiSelect-searchInputEmpty mantine-dzyh2q',
  }
  const wrapperTypes = {
    default: 'mantine-1pgmd32 mantine-MultiSelect-values',
  }
  const defStyles = { width: '100%', padding: '8px' }
  return (
    <div
      className={
        props.type
          ? wrapperTypes[props.type] || wrapperTypes.default
          : wrapperTypes.default
      }
    >
      <div className="mantine-MultiSelect-input mantine-Input-input mantine-MultiSelect-input mantine-18ij5lq">
        <select
          style={{ ...defStyles, ...props.style }}
          className={
            props.type
              ? inputTypes[props.type] || inputTypes.default
              : inputTypes.default
          }
          {...register}
          {...props}
        >
          {children}
        </select>
      </div>
    </div>
  )
}

export default Select
