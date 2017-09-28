import React, { Component } from 'react'
import Api from '../libs/Api'

class WallpaperPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      wallpaper: {}
    }
  }
  
  componentDidMount() {
    this.fetchWallpapersAndSetState(this.props.match.params.id)
  }
  
  async fetchWallpapersAndSetState(id) {
    const data = await Api().getWallpaper(id)
    this.setState({
      wallpaper: data.wallpaper
    })
  }

  render() {
    const imgSrc = `https://sonurai.com/wallpaper/${this.state.wallpaper.name}.jpg`

    if (!this.state.wallpaper.id) {
      return false
    }

    return (
      <div>
        <h1 className="title">{this.state.wallpaper.desc}</h1>
        <img className="img-fluid" src={imgSrc} alt={this.state.wallpaper.desc}/>
        <p>{this.state.wallpaper.date}</p>
      </div>
    )
  }
}

export default WallpaperPage
