import React from "react";
import { FC } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  label: string;
  primary: boolean;
}



const Button: FC<ButtonProps> = ({label, primary, ...props}) => {
  let classes = "text-lg text-center rounded-lg px-6 py-3 border-2 leading-none font-bold focus:outline-none hover:underline text-white "
  const primaryClasses = "bg-blue-600 border-blue-600"
  const secondaryClasses = "bg-black border-black"
  classes += primary ? primaryClasses : secondaryClasses
  return(
    <button
      {...props}
      className={classes}
    >
      {label}
    </button>
  )
}

export default Button