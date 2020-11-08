import { useState } from 'react'
import useSWR from 'swr'
import './App.css'

const apiUrl = "https://api.sonurai.com"
const fetcher = (...args) => fetch(...args).then(res => res.json())

const getUrlPrev = (p) => `/bingwallpapers?startAfterDate=${p.startAfterDate}&startAfterID=${p.startAfterID}&prev=1`
const getUrlNext = (p) => `/bingwallpapers?startAfterDate=${p.startAfterDate}&startAfterID=${p.startAfterID}`

const Pagination = ({ pagination }) => (
  <ul className="col pagination">
    <li className="page-item"><a className="page-link" href={getUrlPrev(pagination.prev)}>Prev</a></li>
    <li className="page-item"><a className="page-link" href={getUrlNext(pagination.next)}>Next</a></li>
  </ul>
)

function intToDate(int) {
  const datePattern = /^(\d{4})(\d{2})(\d{2})$/
  const [, year, month, day] = datePattern.exec(int)
  return `${year}-${month}-${day}`
}

function useWallpapers(startAfterDate, startAfterID, prev) {
  let url = `${apiUrl}/wallpapers`

  if (startAfterDate && startAfterID) {
    url = `${url}?startAfterDate=${startAfterDate}&startAfterID=${startAfterID}`

    if (prev) {
      url = `${url}&prev=1`
    }
  }

  const { data, error } = useSWR(url, fetcher)
  return {
    wallpapers: data?.data,
    isLoading: !error && !data,
    isError: error
  }
}

export default function App() {
  const [startAfterDate, setStartAfterDate] = useState(null)
  const [startAfterID, setStartAfterID] = useState(null)
  const [backward, setBackward] = useState(false)

  const { wallpapers, isLoading, isError } = useWallpapers(startAfterDate, startAfterID, backward)
  if (isLoading) return <div>loading...</div>
  if (isError) return <div>errror!</div>

  return (
    <div className="App">
      <h1 className="px-3 px-lg-0">Bing Wallpapers</h1>
      {wallpapers.map(({ id, title, date, filename }) => (
        <div key={id} className="wallpaper">
          <h2 className="px-3 px-lg-0">{title}</h2>
          <a href={`/bingwallpapers/${id}`}>
            <img
              className="img-fluid"
              src={`https://images.sonurai.com/${filename}_th.jpg`}
              width="1920"
              height="1080"
              alt={title}
            />
          </a>
          <div className="px-3 px-lg-0">{intToDate(date)}</div>
        </div>
      ))}
      {/* <Pagination pagination={pagination} /> */}
    </div>
  )
}
