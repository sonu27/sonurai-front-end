import React from 'react'
import Pagination from '../components/Pagination'
import Wallpaper from '../components/Wallpaper'
import Api from '../libs/Api'

export default class WallpapersPage extends React.PureComponent {
  state = {
    pagination: {},
    wallpapers: []
  }

  componentDidMount() {
    if (this.props.match.params.page) {
      this.fetchWallpapersAndSetState(this.props.match.params.page)
    } else {
      this.fetchWallpapersAndSetState()
    }
  }

  async fetchWallpapersAndSetState(page = 1) {
    const data = await Api().getWallpapers(page)
    this.setState({
      pagination: data.pagination,
      wallpapers: data.wallpapers
    })
    this.props.history.push(`/bingwallpapers/page/${page}`)
    window.scrollTo(0, 0)
  }

  handlePageChange = (e) => {
    this.fetchWallpapersAndSetState(e.target.value)
  }

  render() {
    const wallpapers = this.state.wallpapers.map((wallpaper) => (
      <>
        <Wallpaper key={wallpaper.id} id={wallpaper.id} name={wallpaper.name} desc={wallpaper.desc} copyright={wallpaper.copyright}/>
        <br/>
      </>
    ))

    if (!this.state.pagination.current) {
      return false
    }

    return (
      <div className="container-lg px-0">
        <h1 className="title px-3 px-lg-0">Wallpapers - Page {this.state.pagination.current}</h1>
        {wallpapers}
        <Pagination pagination={this.state.pagination} handlePageChange={this.handlePageChange}/>
      </div>
    )
  }
}
