import React, { FC } from "react"
import cx from "classnames"

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string
  id: string
  type?: string
  required?: boolean
  value?: string
}

export const TextInput: FC<InputProps> = ({
  label,
  id,
  type,
  required,
  value,
  className,
}) => {
  return (
    <div className="flex flex-col max-w-lg">
      <label className={cx(className, "text-green mb-1.5")} htmlFor={id}>
        {label} {required && "*"}
      </label>
      <input
        className="bg-black border p-2 focus:border-white"
        type={type ? type : "text"}
        id={id}
        required={required}
        value={value}
      />
    </div>
  )
}
