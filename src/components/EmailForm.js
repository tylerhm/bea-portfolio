import { useState, useRef } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import ReCAPTCHA from 'react-google-recaptcha'
import {
  Form,
  Col,
  Spinner
} from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'
import hidden from '../utils/Hidden'
import captchaVerify from '../utils/captchaVerify'
import sendEmail from '../utils/sendEmail'
import './EmailForm.scss'

const mailSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  content: yup.string().required(),
})

const EmailForm = () => {

  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const recaptchaRef = useRef()

  const submit = data => {
    const fullName = data.firstName + ' ' + data.lastName
    const subject = data.subject
    const message = data.content
    const replyTo = data.email
    return
    sendEmail(fullName, subject, message, replyTo)
  }

  const verify = data => {
    if (sent) return
    setSending(true)
    recaptchaRef.current.executeAsync()
      .then(token => {
        captchaVerify(token)
          .then(score => {
              if (score < hidden.threshold)
                return;
              submit(data)
              setSending(false)
              setSent(true)
          }).catch(console.error)
      }).catch(console.error)
  }

  let status
  if (sending) status = <Spinner className='status' animation='border' />
  if (sent) status = <FaCheck className='status' size={24} />

  return (
    <Formik
      validationSchema={mailSchema}
      validateOnChange={false}
      onSubmit={verify}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        content: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form
          className='email-form'
          noValidate
          onSubmit={handleSubmit}
        >
          <ReCAPTCHA
            ref={recaptchaRef}
            size='invisible'
            sitekey={hidden.gCapSite}
          />
          <Form.Row>
            <Form.Group as={Col} xs='5' md='6' controlId='validationFormik01'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                name='firstName'
                value={values.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type='invalid'>
                Please provide a first name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} xs='5' md='6' controlId='validationFormik02'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                name='lastName'
                value={values.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type='invalid'>
                Please provide a last name.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} xs='5' md='6' controlId='validationFormik03'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type='invalid'>
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} xs='5' md='6' controlId='validationFormik04'>
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type='text'
                name='subject'
                value={values.subject}
                onChange={handleChange}
                isInvalid={!!errors.subject}
              />
              <Form.Control.Feedback type='invalid'>
                Please provide a subject.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} xs='10' md='12' controlId='validationFormik05'>
              <Form.Label>Content</Form.Label>
              <Form.Control
                type='text'
                name='content'
                as='textarea'
                rows='3'
                value={values.content}
                onChange={handleChange}
                isInvalid={!!errors.content}
              />
              <Form.Control.Feedback type='invalid'>
                Please provide some content.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <button
              className='button'
              type='submit'
              style={{ margin: 6 }}
            >
              Submit
            </button>
            {status}
          </Form.Row>
        </Form>
      )}
    </Formik>
  )
}

export default EmailForm