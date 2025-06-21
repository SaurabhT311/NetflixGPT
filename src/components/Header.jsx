import React from 'react'
import { IMGNetflixLogo } from '../assets'

const Header = () => {
  return (
    <div className='absolute py-4 px-8 bg-gradient-to-b from-black z-1 w-full'>
      <img className='w-36 stroke-red-500' src={IMGNetflixLogo} alt='logo'/>
    </div>
  )
}

export default Header