import Navigation from '../components/Navigation'
import { Parallax } from 'react-parallax'
import background from '../images/background.webp'

const Home = () => {
  return (
    <div>
    <Navigation />
      <Parallax blur={10} bgImage={background} bgImageAlt={'Headshot'} strength={200}>
      </Parallax>
    </div>
  )
}

export default Home