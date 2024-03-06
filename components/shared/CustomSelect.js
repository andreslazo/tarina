import Select from "react-select"

export default function CustomSelect(props) {
  const customStyles = {
    option: provided => ({
      ...provided,
      color: "black"
    }),
    control: provided => ({
      ...provided,
      color: "black"
    }),
    singleValue: provided => ({
      ...provided,
      color: "black"
    })
  }

  return (
    <Select
      {...props}
      styles={customStyles}
    />
  )
}
