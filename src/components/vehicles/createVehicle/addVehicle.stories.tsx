import React from "react";
import AddVehicle, { addVehicleProps } from "./addVehicle";
import {Story} from '@storybook/react'

export default {
  title: "Components/Vehicles/AddVehicle",
  component: AddVehicle,
  argTypes: {
    disable:{
      control: {
        type: null
      }
    }
  },
}

const BASE_ARGS = {
}

const Template: Story<addVehicleProps> = (args) => <AddVehicle {...args}/>


export const Default = Template.bind({});
Default.args = {
  ...BASE_ARGS,
};