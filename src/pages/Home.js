import Navigation from '../components/Navigation'
import {
  Parallax,
  Background
} from 'react-parallax'
import background from '../images/background.webp'
import './Home.css'

const Home = () => {
  return (
    <div>
    <Navigation />
    <Parallax strength={800}> 
      <Background>
        <img className='bg' src={background} alt='Headshot Parallax' />
      </Background>
      <div className='banner'>
        <p className='header push-down'>BIANCA</p>
        <p className='header'>RIVERA-IRIONS</p>
        <p className='header sub'>Actor & Model</p>
      </div>
    </Parallax>
    </div>
  )
}

export default Home