import {
  Nav,
  Navbar
}
from 'react-bootstrap';

import Link from 'react-router-dom/Link'

import {
  FaFacebookF,
  FaInstagram
} from 'react-icons/fa'

import './Navigation.css'

//https://www.facebook.com/profile.php?id=100016575947941
//https://www.instagram.com/beariverairions

const Navigation = ({ selectedPage }) => {
  return (
    <Navbar className='py-4' fixed='top' expand='md'>
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
        <Nav activeKey={selectedPage}>
          <Nav.Item>
            <Link to='/home'>Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to='/home#contact'>Contact</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to='/resume'>Resume</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to='/media'>Media</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation