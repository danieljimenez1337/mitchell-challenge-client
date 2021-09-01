import React from "react";
import Button, {ButtonProps} from "./Button";
import {Story} from '@storybook/react'

export default {
  title: "Components/Common/Button",
  component: Button,
  argTypes: {
    disable:{
      control: {
        type: null
      }
    }
  },
}

const BASE_ARGS = {
  label: "Click Me",
  primary: true
}

const Template: Story<ButtonProps> = (args) => <Button {...args}/>


export const Primary = Template.bind({});
Primary.args = {
  ...BASE_ARGS,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...BASE_ARGS,
  primary: false
};