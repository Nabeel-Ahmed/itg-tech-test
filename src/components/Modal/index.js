import React from 'react';
import './style.scss';

const Modal = ({isOpen, closeModal, content}) => {
  const handleBackgroundClick = event => {
    // Check if the click happened on the modal background
    if (isOpen && event.target.classList.contains('modal')) {
      closeModal();
    }
  };

  const handleKeyPress = event => {
    if (isOpen && event.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div
      className={`modal ${isOpen ? 'modal--open' : ''}`}
      onClick={handleBackgroundClick}
      onKeyDown={handleKeyPress}
    >
      <div className="modal__content">{content}</div>
    </div>
  );
};

export default Modal;
