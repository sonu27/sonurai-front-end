const domain = process.env.REACT_APP_API_URL

export default class Api {
  async getWallpapers(page) {
    const response = await fetch(`${domain}/bingwallpapers/page/${page}`)
    return await response.json()
  }

  async getWallpaper(id) {
    const response = await fetch(`${domain}/bingwallpapers/${id}`)
    return await response.json()
  }
}
