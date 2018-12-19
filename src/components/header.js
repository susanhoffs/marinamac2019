import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <header id="site-header">
    <Link to="/" className="logo">
      <img
      src="https://marinamac.net/2019-images/marinamac.logo.png" 
      alt="Marina" />
    </Link>
    <ul className="navegacao-principal">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/trabalhos">Trabalhos</Link>
      </li>
      <li>
        <Link to="/contato">Contato</Link>
      </li>
    </ul>
  </header>
  
)

export default Header
