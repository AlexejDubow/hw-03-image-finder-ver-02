import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';


const ImageGalleryItem = ({ images, onClick }) => (
  <>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <li className="ImageGalleryItem" key={id}>
        <img className="ImageGalleryItemImage" src={webformatURL} alt="picter" onClick={() => onClick(largeImageURL)}  />
      </li>
    ))}
  </>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
  })).isRequired,
};
