import hidden from './Hidden'
import axios from 'axios'

const captchaVerify = token => {

  const body = {
    token: token
  }

  return axios.post(
    hidden.verify,
    body,
  )
    .then(res => {
      if (res.status === 200)
        return parseFloat(res.data)
      return 0
    }).catch(console.error)
}

export default captchaVerify