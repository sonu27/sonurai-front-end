import React from 'react'
import { Link } from 'react-router-dom'

export default function Wallpaper({id, name, desc}) {
  const imgSrc = `https://images.sonurai.com/${name}_th.jpg`

  return (
    <div className="wallpaper">
      <h3 className="px-3 px-lg-0">{desc}</h3>
      <Link to={`/bingwallpapers/${id}`}>
        <img className="img-fluid" src={imgSrc} alt={desc}/>
      </Link>
    </div>
  )
}
