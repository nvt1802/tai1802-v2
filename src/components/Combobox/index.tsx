import React, { FC } from "react"
import { TextField } from "@material-ui/core"
import { Autocomplete } from "@material-ui/lab"

interface ComboBoxProps {
  id: string
  options: any[]
  label: string
  variant?: any
  width: number
  onChange: any
  value: any
}

const ComboBox: FC<ComboBoxProps> = ({
  id,
  options,
  width,
  value,
  onChange,
  label,
  variant,
}) => {
  return (
    <Autocomplete
      id={id}
      options={options}
      getOptionLabel={(option) => option?.label}
      style={{ width: width }}
      value={value}
      onChange={onChange}
      getOptionSelected={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField {...params} label={label} variant={variant} />
      )}
    />
  )
}

export default ComboBox
