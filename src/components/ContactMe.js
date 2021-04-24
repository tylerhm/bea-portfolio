import { useRef } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import ReCAPTCHA from 'react-google-recaptcha'
import keys from '../utils/SecretKeys'
import sendEmail from '../utils/sendEmail'
import './ContactMe.scss'
import {
  Form,
  Col
} from 'react-bootstrap'

const mailSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  content: yup.string().required(),
})

const ContactMe = ({ forwardRef }) => {
  const recaptchaRef = useRef()

  const submit = async data => {

    const token = await recaptchaRef.current.executeAsync();

    const fullName = data.firstName + ' ' + data.lastName
    const subject = data.subject
    const message = data.content
    const replyTo = data.email

    console.log(token, fullName, subject, message, replyTo)
  }

  return (
    <div ref={forwardRef} className='contact-me marbled'>
      <div className='header boxed shrink'>
        GET IN TOUCH!
      </div>
      <Formik
        validationSchema={mailSchema}
        onSubmit={submit}
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
          <Form noValidate onSubmit={handleSubmit}>
            <ReCAPTCHA
              ref={recaptchaRef}
              size='invisible'
              sitekey={keys.reCAPTCHA}
            />
            <Form.Row>
              <Form.Group as={Col} xs='5' md='6' controlId='validationFormik01'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type='text'
                  name='firstName'
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
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
                  isValid={touched.lastName && !errors.lastName}
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
                  isValid={touched.email && !errors.email}
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
                  isValid={touched.subject && !errors.subject}
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
                  isValid={touched.content && !errors.content}
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
                style={{margin: 6}}
              >
                Submit
              </button>
            </Form.Row>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactMe