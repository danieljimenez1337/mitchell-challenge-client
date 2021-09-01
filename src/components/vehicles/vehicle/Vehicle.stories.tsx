import React from "react";
import Vehicle, { VehicleProps } from "./Vehicle";
import {Story} from '@storybook/react'

export default {
  title: "Components/Vehicles/Vehicle",
  component: Vehicle
}

const BASE_ARGS = {
  vehicle: {
    make: "Toyota",
    model: "Corolla",
    year: 2000,
    id: 1
  }
}

const Template: Story<VehicleProps> = (args) => <Vehicle {...args}/>


export const Default = Template.bind({});
Default.args = {
  ...BASE_ARGS,
};