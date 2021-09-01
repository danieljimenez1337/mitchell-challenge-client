import React from 'react';
import { FC } from 'react';

export interface FieldProps{
  name: string,
  type: string,
  handleChange: any,
  handleBlur: any,
  touched: boolean | undefined,
  error: string | undefined,
  label: string,
  value: any
}

const Field: FC<FieldProps> = ({handleChange, name, handleBlur, type, touched, error, label, value} ) => {
  return(
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm leading-none mb-2">{label}</label>
      <input className={"w-full rounded border px-3 py-3 text-sm leading-none outline-none" + (touched && error ? " border-red-600":" border-gray-200")}
        type={type}
        name={name}
        onChange={handleChange} 
        onBlur={handleBlur}
        value={value}
      />
      <div className="text-red-600 mt-0.5 mb-2 text-xs leading-none h-3">{touched && error? error: ""} </div>
    </div>
    
  )

}

export default Field;