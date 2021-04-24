import sendEmail from '../utils/sendEmail'
import './ContactMe.scss'
import {
  Form,
  Col
} from 'react-bootstrap'

const ContactMe = ({ forwardRef }) => {

  const sendEmail = e => {
    e.preventDefault()
  }

  return (
    <div ref={forwardRef} className='contact-me marbled'>
      <div className='header boxed'>
        GET IN TOUCH!
      </div>
      <Form onSubmit={sendEmail}>
        <Form.Row>
          <Form.Group as={Col} xs='5' md='6'>
            <Form.Label htmlFor='first-name'>First Name *</Form.Label>
            <Form.Control id='first-name' />
          </Form.Group>
          <Form.Group as={Col} xs='5' md='6'>
            <Form.Label htmlFor='last-name'>Last Name *</Form.Label>
            <Form.Control id='last-name' />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} xs='5' md='6'>
            <Form.Label htmlFor='email'>Email *</Form.Label>
            <Form.Control type='email' id='email' />
          </Form.Group>
          <Form.Group as={Col} xs='5' md='6'>
            <Form.Label htmlFor='subject'>Subject</Form.Label>
            <Form.Control id='subject' />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} xs='10' md='12'>
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