import EmailForm from './EmailForm'
import './ContactMe.scss'

const ContactMe = ({ forwardRef }) => {

  return (
    <div ref={forwardRef} className='contact-me marbled'>
      <div className='header boxed shrink'>
        GET IN TOUCH!
      </div>
      <EmailForm />
    </div>
  )
}

export default ContactMe