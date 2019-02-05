import React from 'react'
import { Link } from 'react-router-dom'

export default ({id, name, desc, copyright}) => {
  const imgSrc = `https://images.sonurai.com/${name}_th.jpg`

  return (
    <div className='wallpaper'>
      <Link to={`/bingwallpapers/${id}`}>
        <img className='img-fluid' src={imgSrc} alt={desc}/>
      </Link>
      <h5 className='col'>{desc}</h5>
    </div>
  )
}
