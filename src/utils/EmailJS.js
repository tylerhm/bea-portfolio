import emailjs, { init } from 'emailjs-com'
import hidden from './Hidden'
init(hidden.emailjs)

export default emailjs