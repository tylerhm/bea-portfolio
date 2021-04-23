import './ContactMe.scss'
import Form from 'react-bootstrap/Form'
import {
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa'

/*
<a href='https://www.facebook.com/profile.php?id=100016575947941' target='_blank' rel='noreferrer'>
  <FaFacebookF />
</a>
<a href='https://www.instagram.com/beariverairions' target='_blank' rel='noreferrer'>
  <FaInstagram />
</a>
*/

const ContactMe = () => {
  return (
    <div className='contact-me marbled'>
      <div className='header boxed'>
        GET IN TOUCH!
      </div>
    </div>
  )
}

export default ContactMe