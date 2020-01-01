import React, { Component } from 'react'
import moment from 'moment'
import Api from '../libs/Api'

class WallpaperPage extends Component {
  state = {
    wallpaper: {}
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
    //todo: send real 404
    if (!this.state.wallpaper) {
      return (
        <div>404 Not found</div>
      )
    }

    const imgSrc = `https://images.sonurai.com/${this.state.wallpaper.name}.jpg`

    return (
      <div>
        <button onClick={() => this.props.history.goBack()}>Back</button>
        <h1 className="col title">{this.state.wallpaper.desc}</h1>
        <img className="img-fluid" src={imgSrc} alt={this.state.wallpaper.desc}/>
        <p className='col'>{this.state.wallpaper.copyright} - {moment(this.state.wallpaper.date, 'YYYYMMDD').format('MMMM Do YYYY')}</p>
      </div>
    )
  }
}

export default WallpaperPage
