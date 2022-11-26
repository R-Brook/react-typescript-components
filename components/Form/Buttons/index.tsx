import React, { FC } from "react"
import cx from "classnames"

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type: "primary" | "secondary"
}

export const Button: FC<ButtonProps> = ({
  type,
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={cx(
        className,
        "relative border py-0.5 px-6" +
          " " +
          (type === "primary"
            ? "bg-green text-black active:bg-black active:text-green"
            : "active:bg-green active:text-black")
      )}
      onClick={onClick}
    >
      <span className="m-0.5"></span>
      {children}
    </button>
  )
}
