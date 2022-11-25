import React from "react"
import { render, screen } from "@testing-library/react"
import { TextInput } from "."

describe("text input", () => {
  it("renders as a text input", () => {
    render(<TextInput label={"input label"} id={"id"} />)
    const input = screen.getAllByLabelText("input label")
    expect(input).toBeInTheDocument
  })
})
