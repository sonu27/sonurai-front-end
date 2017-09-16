import React from 'react'

const Wallpaper = ({name, desc}) => {
  const imgSrc = `https://sonurai.com/wallpaper/${name}_th.jpg`

  return (
    <div className="wallpaper">
      <p>
        <img className="img-fluid" src={imgSrc} alt={desc}/>
      </p>
      <p>{desc}</p>
    </div>
  )
}

export default Wallpaper
