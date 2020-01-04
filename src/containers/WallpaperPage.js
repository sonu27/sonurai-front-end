import React from 'react'
import moment from 'moment'
import Api from '../libs/Api'

export default class WallpaperPage extends React.PureComponent {
  state = {
    wallpaper: {}
  }

  apiClient = new Api()

  componentDidMount() {
    this.fetchWallpapersAndSetState(this.props.match.params.id)
  }

  async fetchWallpapersAndSetState(id) {
    try {
      const data = await this.apiClient.getWallpaper(id)
      this.setState({
        wallpaper: data.wallpaper
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    //todo: send real 404
    if (Object.entries(this.state.wallpaper).length === 0 && this.state.wallpaper.constructor === Object) {
      return (
        <div className="container-lg">404 Not found</div>
      )
    }

    const imgSrc = `https://images.sonurai.com/${this.state.wallpaper.name}.jpg`

    return (
      <div className="container-lg px-0">
        <h1 className="title px-3 px-lg-0">{this.state.wallpaper.desc}</h1>
        <a href={imgSrc}><img className="img-fluid" src={imgSrc} alt={this.state.wallpaper.desc}/></a>
        <p className="px-3 px-lg-0">{this.state.wallpaper.copyright} - {moment(this.state.wallpaper.date, 'YYYYMMDD').format('MMMM Do YYYY')}</p>
      </div>
    )
  }
}
