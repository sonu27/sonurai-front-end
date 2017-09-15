import React, { Component } from 'react'

class Wallpaper extends Component {

  render() {
    const imgSrc = `https://sonurai.com/wallpaper/${this.props.name}_th.jpg`
    return (
      <div className="wallpaper">
        <p>
          <img className="img-fluid" src={imgSrc} alt={this.props.desc}/>
        </p>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}

export default Wallpaper
