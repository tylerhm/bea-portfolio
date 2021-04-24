import Navigation from '../components/Navigation'
import ParallaxBanner from '../components/ParallaxBanner'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import './Home.scss'

const Home = () => {
  return (
    <div style={{backgroundColor: '#c6c4c7', overflow: 'hidden'}}>
      <Navigation />
      <ParallaxBanner />
      <AboutMe />
      <ContactMe />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Home