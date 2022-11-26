import React from "react"
import { render, screen } from "@testing-library/react"
import { Button } from "."

describe("text input", () => {
  it("renders as a text input", () => {
    render(<Button type="primary">Lorem ipsum</Button>)
    const button = screen.getByRole("button", { name: "Lorem ipsum" })
    expect(button).toBeInTheDocument
  })
})
