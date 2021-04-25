import emailjs from './EmailJS'

const sendEmail = async (name, subject, message, replyTo) => {
  const params = {
    name: name,
    subject: subject,
    message: message,
    replyTo: replyTo,
  }
  emailjs.send(
    'service_rbo3f1q',
    'template_448anoe',
    params,
  )
}

export default sendEmail