import {
  Nav,
  Navbar
}
from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import {
  FaFacebookF,
  FaInstagram
} from 'react-icons/fa'
import PagesIndex from '../pages/PagesIndex'
import './Navigation.css'

const Navigation = () => {

  const pages = []
  for (const [key, value] of Object.entries(PagesIndex)) {
    pages.push(
      <Nav.Item key={key}>
        <NavLink activeClassName='active' to={value}>
          {key}
        </NavLink>
      </Nav.Item>
    )
  }

  return (
    <Navbar className='py-3' fixed='top' expand='md'>
      <div className='social-group'>
        <Nav.Link href='https://www.facebook.com/profile.php?id=100016575947941' target='_blank'>
          <FaFacebookF />
        </Nav.Link>
        <Nav.Link href='https://www.instagram.com/beariverairions' target='_blank'>
          <FaInstagram />
        </Nav.Link>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          {pages}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation