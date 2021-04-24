import gallery1 from '../images/gallery1.jpg'
import gallery2 from '../images/gallery2.jpg'
import gallery3 from '../images/gallery3.jpg'
import './Gallery.scss'

const Gallery = () => {
  return (
    <div className='gallery'>
      <img src={gallery1} alt='Gallery Headshot One'></img>
      <img src={gallery2} alt='Gallery Headshot Two'></img>
      <img src={gallery3} alt='Gallery Headshot Three'></img>
    </div>
  )
}

export default Gallery