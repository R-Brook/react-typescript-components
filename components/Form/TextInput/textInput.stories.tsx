import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { TextInput } from "."

export default {
  title: "UI Elements/Form/Input",
  component: TextInput,
  argTypes: {
    type: {
      options: ["Text", "Number"],
      control: { type: "radio" },
    },
    id: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    label: "Lorem ipsum",
    required: true,
    type: "text",
    value: "",
  },
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args}></TextInput>
)

export const Input = Template.bind({})
