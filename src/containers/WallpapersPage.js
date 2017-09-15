import React, { Component } from 'react'
import Pagination from '../components/Pagination'
import Wallpaper from '../components/Wallpaper'

class WallpapersPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pagination: {
        'prev': 0,
        'current': 1,
        'next': 2
      },
      wallpapers: []
    }

    this.handlePageChange = this.handlePageChange.bind(this)
  }
  
  componentDidMount() {
    this.fetchWallpapersAndSetState()
  }
  
  async fetchWallpapersAndSetState(page = 1) {
    const response = await fetch(`http://localhost:8000/bingwallpapers/page/${page}`)
    const data = await response.json()
    this.setState({
      pagination: data.pagination,
      wallpapers: data.wallpapers
    })
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

    const pagination = <Pagination pagination={this.state.pagination} handlePageChange={this.handlePageChange}/>


    return (
      <div>
        <h1 className="title">Wallpapers - Page {this.state.pagination.current}</h1>
        {wallpapers}
        {pagination}
      </div>
    )
  }
}

export default WallpapersPage
