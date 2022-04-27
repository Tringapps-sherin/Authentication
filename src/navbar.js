import React from 'react'
import { Link } from 'react-router-dom';

export const navbar = () => {
  return (
    <nav>
      <Link to path='/'>Home</Link>
      <Link to path='/about'>About</Link>
    </nav>
  )
}
