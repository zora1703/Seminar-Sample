import React, { ReactNode } from 'react';

const Modal = ({ modalOpen, setModalOpen, children }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className='modal-box relative'>
        <label
          onClick={() => setModalOpen(false)}
          className='btn btn-sm btn-circle absolute right-2 top-2'
        >
          ✕
        </label>
        {children}
      </div>
    </div>
  );
};

export default Modal;