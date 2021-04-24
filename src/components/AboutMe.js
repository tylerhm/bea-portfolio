import aboutMe from '../images/about-me.webp'
import './AboutMe.scss'

const AboutMe = () => {
  return (
    <div className='about-me'>
      <img src={aboutMe} alt='Headshot About-Me' />
      <div className='flex-vertical'>
        <p className='header shrink'>ABOUT ME!</p>
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
  )
}

export default AboutMe