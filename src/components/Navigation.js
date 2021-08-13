import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { useState } from 'react'
import PagesIndex from '../pages/PagesIndex'
import './Navigation.scss'

const Navigation = () => {
  const [expanded, setExpanded] = useState(false)
  const collapse = () => setExpanded(false)

  const pages = []
  for (const [key, value] of Object.entries(PagesIndex)) {
    pages.push(
      <Nav.Item key={key} onClick={collapse}>
        <NavLink activeClassName='active' to={value}>
          {key}
        </NavLink>
      </Nav.Item>
    )
  }

  return (
    <Navbar
      className='py-3'
      fixed='top'
      expand='md'
      expanded={expanded}
      onToggle={(newExpanded) => setExpanded(newExpanded)}
    >
      <div className='social-group'>
        <Nav.Link
          href='https://www.facebook.com/profile.php?id=100016575947941'
          target='_blank'
          rel='noreferrer'
          onClick={collapse}
        >
          <FaFacebookF />
        </Nav.Link>
        <Nav.Link
          href='https://www.instagram.com/briverairions'
          target='_blank'
          rel='noreferrer'
          onClick={collapse}
        >
          <FaInstagram />
        </Nav.Link>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>{pages}</Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
