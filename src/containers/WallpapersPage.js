import React, { Component } from 'react'
import Pagination from '../components/Pagination'
import Wallpaper from '../components/Wallpaper'

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
    const domain = process.env.REACT_APP_API_URL
    const response = await fetch(`${domain}/bingwallpapers/page/${page}`)
    const data = await response.json()
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
        return <Wallpaper key={wallpaper.id} name={wallpaper.name} desc={wallpaper.desc}/>
      }
    )

    if (!this.state.pagination.current) {
      return <div></div>
    }

    return (
      <div>
        <h1 className="title">Wallpapers - Page {this.state.pagination.current}</h1>
        {wallpapers}
        <Pagination pagination={this.state.pagination} handlePageChange={this.handlePageChange}/>
      </div>
    )
  }
}

export default WallpapersPage
