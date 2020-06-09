import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import './ImageGallery.css';

const ImageGallery = ({ images, onClick }) => (
  <>
    <ul className="ImageGallery">
      <ImageGalleryItem images={images} onClick={onClick} />
    </ul>
  </>
);

export default ImageGallery;

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
