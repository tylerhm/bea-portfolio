import Navigation from '../components/Navigation'
import {
  Parallax,
  Background
} from 'react-parallax'
import background from '../images/background.webp'
import aboutMe from '../images/about-me.webp'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navigation />
      <Parallax strength={800}> 
        <Background>
          <img className='bg' src={background} alt='Headshot Parallax' />
        </Background>
        <div className='banner spaced'>
          <p className='header push-down'>BIANCA</p>
          <p className='header'>RIVERA-IRIONS</p>
          <p className='header sub'>Actor & Model</p>
        </div>
      </Parallax>
      <div className='about-me'>
        <img src={aboutMe} alt='Headshot About-Me' />
        <div className='flex-vertical justify-content-between'>
          <p className='header'>ABOUT ME!</p>
          <p className='content'>
            I am a twenty year old actor/singer/dancer originally from Tampa, Florida.
            I developed my love for musical theatre at the age of 5, listening to the Wicked soundtrack on repeat.
            I am currently pursuing a BFA in Musical Theatre at Boston Conservatory with a minor in Psychology.
            When I'm not studying I enjoy trying new foods, dabbling in photography, and doing yoga.
          </p>
          <button className='button' onClick={() => {}}>
            See Resume
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home