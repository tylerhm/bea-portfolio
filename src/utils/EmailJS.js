import emailjs, { init } from 'emailjs-com'
init(process.env.REACT_APP_EMAILJS_KEY)

export default emailjs