import React from 'react'
import moment from 'moment'
import Api from '../libs/Api'

export default class WallpaperPage extends React.PureComponent {
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
      <div className="container-lg px-0">
        <a className="title px-3 px-lg-0" href="#" onClick={() => this.props.history.goBack()}>Back</a>
        <h1 className="title px-3 px-lg-0">{this.state.wallpaper.desc}</h1>
        <img className="img-fluid" src={imgSrc} alt={this.state.wallpaper.desc}/>
        <p className="px-3 px-lg-0">{this.state.wallpaper.copyright} - {moment(this.state.wallpaper.date, 'YYYYMMDD').format('MMMM Do YYYY')}</p>
      </div>
    )
  }
}
