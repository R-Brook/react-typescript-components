import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Button } from "."

export default {
  title: "UI Elements/Form/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    children: { control: "text" },
  },
  args: {
    children: "Button",
    type: "primary",
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}></Button>
)

export const SimpleButton = Template.bind({})
