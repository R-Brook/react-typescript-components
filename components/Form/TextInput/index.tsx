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
    <div className="flex flex-col">
      <label
        className={cx(className, "text-green uppercase mb-1 ")}
        htmlFor={id}
      >
        {label} {required && "*"}
      </label>
      <input
        className="bg-black border focus:border-white"
        type={type ? type : "text"}
        id={id}
        required={required}
        value={value}
      />
    </div>
  )
}
