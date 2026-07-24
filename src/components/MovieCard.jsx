import React from 'react'
import { IMG_CDN_URL } from '../constants/constants'

const MovieCard = ({ posterPath }) => {
  if(!posterPath){
    return null; // or a placeholder image
  }
  return (
    <div className="w-48 bg-contain">
      <img loading='lazy' className='bg-contain' alt="image" src={`${IMG_CDN_URL}/${posterPath}`} />
    </div>
  );
}

export default MovieCard