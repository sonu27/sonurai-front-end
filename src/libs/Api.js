const Api = () => {
    const domain = process.env.REACT_APP_API_URL

    return {
        'getWallpapers': async (page) => {
            const response = await fetch(`${domain}/bingwallpapers/page/${page}`)

            return await response.json()
        },
        'getWallpaper': async (id) => {
            const response = await fetch(`${domain}/bingwallpapers/${id}`)

            return await response.json()
        },
    }
}

export default Api
