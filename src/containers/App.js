import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import WallpapersPage from './WallpapersPage'

const Home = () => (
  <div>
    <h2>Home</h2>
    <ul>
      <li><Link to="/bingwallpapers">Bing Wallpapers</Link></li>
    </ul>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <p>Designed and built by Amarjeet Rai</p>
  </div>
)

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>You can contact me on Twitter <a href="https://twitter.com/sonu27">@sonu27</a></p>
  </div>
)

const App = () => (
  <Router>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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

      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/bingwallpapers" render={props => <WallpapersPage {...props}/>}/>
      <Route exact path="/bingwallpapers/page/:page" render={props => <WallpapersPage {...props}/>}/>
    </div>
  </Router>
)

export default App
