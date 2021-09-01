import OutsideClickHandler from "react-outside-click-handler"
import React from "react"
import { FC } from "react"

interface MenuProps {
  disable: () => void;
  edit: () => void;
  remove: () => void;
}

const Menu: FC<MenuProps> = ({disable, edit, remove}) => {

  return (
    <OutsideClickHandler onOutsideClick={disable}>
      <div className="w-48 p-4 absolute right-4 top-12 border border-borderColor rounded-lg shadow-lg bg-white">
        <button
          onClick={edit} 
          className="text-base mb-3 hover:underline text-black block focus:outline-none"
        >
          Edit
        </button>
        <button 
          onClick={remove}
          className="text-base text-red-600 hover:underline block focus:outline-none"
        >
          Delete
        </button>
      </div>
    </OutsideClickHandler>
  )
}

export default Menu;