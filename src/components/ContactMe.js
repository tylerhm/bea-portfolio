import './ContactMe.scss'
import {
  Form,
  Row,
  Col
} from 'react-bootstrap'
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
      <Form>
        <Form.Row>
          <Form.Group as={Col} md='6'>
            <Form.Label htmlFor='first-name'>First Name *</Form.Label>
            <Form.Control id='first-name' />
          </Form.Group>
          <Form.Group as={Col} md='6'>
            <Form.Label htmlFor='last-name'>Last Name *</Form.Label>
            <Form.Control id='last-name' />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md='6'>
            <Form.Label htmlFor='email'>Email *</Form.Label>
            <Form.Control type='email' id='email' />
          </Form.Group>
          <Form.Group as={Col} md='6'>
            <Form.Label htmlFor='subject'>Subject</Form.Label>
            <Form.Control id='subject' />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md='12'>
            <Form.Label htmlFor='content'>Content</Form.Label>
            <Form.Control id='content' as='textarea' rows='3'/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <button className='button' style={{margin: 6}}>Submit</button>
        </Form.Row>
      </Form>
    </div>
  )
}

export default ContactMe