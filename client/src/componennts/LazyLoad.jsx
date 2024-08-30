import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyLoad = ({image, placeholder, alt}) => {
  return (
  <LazyLoadImage 
    src={image}
    effect="blur"
    placeholderSrc={placeholder}
    width="100%"
    height="100%"
    alt={alt}
  />
  )
}

export default LazyLoad