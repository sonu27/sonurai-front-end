import React, { Component } from 'react'
import Pagination from '../components/Pagination'
import Wallpaper from '../components/Wallpaper'
import Api from '../libs/Api'

class WallpapersPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pagination: {},
      wallpapers: []
    }

    this.handlePageChange = this.handlePageChange.bind(this)
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

  handlePageChange(e) {
    this.fetchWallpapersAndSetState(e.target.value)
  }

  render() {
    const wallpapers = this.state.wallpapers.map(
      (wallpaper) => {
        return <div>
          <Wallpaper key={wallpaper.id} id={wallpaper.id} name={wallpaper.name} desc={wallpaper.desc} copyright={wallpaper.copyright}/>
          <br/>
        </div>
      }
    )

    if (!this.state.pagination.current) {
      return false
    }

    return (
      <div>
        <h1 className="title col">Wallpapers - Page {this.state.pagination.current}</h1>
        {wallpapers}
        <Pagination pagination={this.state.pagination} handlePageChange={this.handlePageChange}/>
      </div>
    )
  }
}

export default WallpapersPage
