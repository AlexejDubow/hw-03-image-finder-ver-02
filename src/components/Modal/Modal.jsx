import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ largeImageURL, closeModal }) => (
  <div className="Overlay" onClick={closeModal}>
    <div className="Modal">
      <img src={largeImageURL} alt="img" />
    </div>
  </div>
);
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
export default Modal;
