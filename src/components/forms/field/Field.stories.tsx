import React from "react";
import Field, { FieldProps } from "./Field";
import {Story} from '@storybook/react'

export default {
  title: "Components/Forms/Field",
  component: Field,
  argTypes: {
    error: { control: 'text' },
    touched: { control: 'boolean' },
    handleChange:{
      control: {
        type: null
      }
    },
    handleBlur:{
      control: {
        type: null
      }
    }
  },
}

const BASE_ARGS = {
  error: "First Name can not be empty",
  name: "firstName",
  label: "First Name",
  touched: false,
  type: "text",
}

const Template: Story<FieldProps> = (args) => <Field {...args}/>


export const Default = Template.bind({});
Default.args = {
  ...BASE_ARGS,
};