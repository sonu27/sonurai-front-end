import algoliasearch from 'algoliasearch'

const client = algoliasearch('QAQQSPXMWF', '9d20f264afd11c7c1507a7ab36225b59')
const index = client.initIndex('prod_wallpapers')

async function getWallpapers(page) {
  return index.search(
    {
      query: '',
      attributesToRetrieve: [
        'description',
        'date',
        'name',
        'oldId',
      ],
      hitsPerPage: 10,
      page: page - 1,
    }
  )
}

async function getWallpaper(id) {
  return index.getObject(
    id,
    [
      'description',
      'date',
      'name',
      'oldId',
    ]
  )
}

function toWallpaper(v) {
  return {
    id: v.objectID,
    name: v.name,
    desc: v.description,
    date: v.date,
  }
}

function hitsToWallpapers(hits) {
  return hits.map(toWallpaper)
}

export default class Api {
  async getWallpapers(page) {
    const res = await getWallpapers(page)
    const wallpapers = hitsToWallpapers(res.hits)

    return {
      pagination: {
        prev: parseInt(page) - 1,
        current: page,
        next: parseInt(page) + 1,
      },
      wallpapers: wallpapers
    }
  }

  async getWallpaper(id) {
    const res = await getWallpaper(id)

    return {
      wallpaper: toWallpaper(res),
    }
  }
}
