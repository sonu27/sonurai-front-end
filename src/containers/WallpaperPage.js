import React, { Component } from 'react'

class WallpaperPage extends Component {
  constructor(props) {
    super(props)
    console.log(props)

    this.state = {
      wallpaper: {}
    }
  }
  
  componentDidMount() {
    this.fetchWallpapersAndSetState(this.props.match.params.id)
  }
  
  async fetchWallpapersAndSetState(id) {
    console.log('fetching')
    const domain = process.env.REACT_APP_API_URL
    const response = await fetch(`${domain}/bingwallpapers/${id}`)
    const data = await response.json()
    this.setState({
      wallpaper: data.wallpaper
    })
  }

  render() {
    const imgSrc = `https://sonurai.com/wallpaper/${this.state.wallpaper.name}.jpg`

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
