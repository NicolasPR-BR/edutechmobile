import React, { useEffect } from 'react';

const Modal = ({closeModal,modalContent}) => {
  useEffect(() => {
    setTimeout(() =>{
      closeModal();
    }, 2000);
  },)
  return <h3><div className='modal'>{modalContent}</div></h3>;
};

export default Modal;
