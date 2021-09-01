import React from "react";
import { FC } from "react";
import OutsideClickHandler from 'react-outside-click-handler';

interface ModalProps{
  disable: () => void;
}

const Modal: FC<ModalProps> = ({disable, children}) => {

  return (
    <div className="fixed top-0 left-0 bg-trasparentGray grid place-items-center w-full h-full z-10">
      <OutsideClickHandler onOutsideClick={disable}>
        {children}
      </OutsideClickHandler>
    </div>
  )
}

export default Modal;