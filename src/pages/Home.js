import Navigation from '../components/Navigation'
import ParallaxBanner from '../components/ParallaxBanner'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import './Home.scss'

const Home = () => {
  return (
    <div>
      <Navigation />
      <ParallaxBanner />
      <AboutMe />
      <ContactMe />
    </div>
  )
}

export default Home