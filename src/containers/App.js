import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import WallpapersPage from './WallpapersPage'
import WallpaperPage from './WallpaperPage'

const Home = () => (
  <div className="container-lg px-0">
    <div className="px-3 px-lg-0">
      <h2>Home</h2>
      <ul>
        <li><Link to="/bingwallpapers">Bing Wallpapers</Link></li>
        <li><a href="http://blog.sonurai.com/" rel="me">Tumblr Blog</a></li>
      </ul>
    </div>
  </div>
)

const About = () => (
  <div className="container-lg px-0">
    <div className="px-3 px-lg-0">
      <h2>About</h2>
      <p>Designed and built by <a href="https://amarjeet.dev" rel="me">Amarjeet Rai</a></p>
      <p>
        <a href="https://github.com/sonu27/" rel="me">GitHub</a><br/>
        <a href="https://www.linkedin.com/in/amarjeetrai" rel="me">LinkedIn</a><br/>
        <a href="https://twitter.com/sonu27" title="Twitter @sonu27" rel="me">Twitter</a>
      </p>
    </div>
  </div>
)

const Contact = () => (
  <div className="container-lg px-0">
    <div className="px-3 px-lg-0">
      <h2>Contact</h2>
      <p>You can contact me on Twitter <a href="https://twitter.com/sonu27" rel="me">@sonu27</a></p>
    </div>
  </div>
)

const App = () => (
  <Router>
    <header className="navbar navbar-expand navbar-dark bg-dark">
      <nav className="container-lg">
        <Link to="/" className="navbar-brand">Sonu Rai</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact to="/" className="nav-item nav-link">Home</NavLink>
            <NavLink exact to="/about" className="nav-item nav-link">About</NavLink>
            <NavLink exact to="/contact" className="nav-item nav-link">Contact</NavLink>
          </div>
        </div>
      </nav>
    </header>

    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/bingwallpapers" render={props => <WallpapersPage {...props}/>}/>
    <Route exact path="/bingwallpapers/page/:page" render={props => <WallpapersPage {...props}/>}/>
    <Route exact path="/bingwallpapers/:id" render={props => <WallpaperPage {...props}/>}/>

    <footer className="container-lg px-0">
      <div className="px-3 px-lg-0">&copy; {new Date().getFullYear()} Amarjeet Rai</div>
    </footer>
  </Router>
)

export default App
