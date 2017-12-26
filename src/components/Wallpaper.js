import React from 'react'
import { Link } from 'react-router-dom'

const Wallpaper = ({id, name, desc}) => {
  const imgSrc = `https://sonurai.com/wallpaper/${name}_th.jpg`

  return (
    <div className="wallpaper">
      <p>
        <Link to={`/bingwallpapers/${id}`}><img className="img-fluid" src={imgSrc} alt={desc}/></Link>
      </p>
      <p className='col'>{desc}</p>
    </div>
  )
}

export default Wallpaper
