import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='copyright'>© 2021 by Tyler Hostler-Mathis.</div>
      <div className='socials'>
        <a href='https://www.github.com/TylerMathis' target='__blank'>
          <FaGithub />
        </a>
        <a href='https://www.linkedin.com/in/TylerHostlerMathis' target='__blank'>
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Footer