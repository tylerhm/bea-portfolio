import axios from 'axios'

const captchaVerify = token => {

  const body = {
    token: token
  }

  return axios.post(
    process.env.REACT_APP_GCAP_VERIFY_URL,
    body,
  )
    .then(res => {
      if (res.status === 200)
        return parseFloat(res.data)
      return 0
    }).catch(console.error)
}

export default captchaVerify