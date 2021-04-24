import { useRef, useEffect } from 'react'
import ParallaxBanner from '../components/ParallaxBanner'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import Gallery from '../components/Gallery'
import './Home.scss'

const Home = ({ contact }) => {
  const contactRef = useRef(null);

  useEffect(() => {
    if (contactRef.current) {
      if (contact)
        contactRef.current.scrollIntoView()
      else
        window.scrollTo(0, 0)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactRef.current])

  return (
    <div style={{backgroundColor: '#c6c4c7', overflow: 'hidden'}}>
      <ParallaxBanner />
      <AboutMe />
      <ContactMe forwardRef={contactRef}/>
      <Gallery />
    </div>
  )
}

export default Home