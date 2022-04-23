import {
  Parallax,
  Background
} from "react-parallax"
import background from '../images/background.webp'
import './ParallaxBanner.scss'

const ParallaxBanner = () => {
  return (
    <Parallax className='parallax-banner' strength={250}> 
      <Background>
        <img className='bg' src={background} alt='Headshot Parallax' />
      </Background>
      <div className='banner spaced'>
        <p className='header push-down'>BIANCA</p>
        <p className='header'>RIVERA-IRIONS</p>
        <p className='header sub'>Actor & Model</p>
      </div>
    </Parallax>
  )
}

export default ParallaxBanner