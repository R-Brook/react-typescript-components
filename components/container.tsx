import React, { FC } from "react"

export const Container = ({ children }: any) => {
  return (
    <div className="max-w-screen-lg m-auto h-max p-3 relative">{children}</div>
  )
}
