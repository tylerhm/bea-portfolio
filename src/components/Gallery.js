import './Gallery.scss'

const Gallery = () => {
  return (
    <div className='gallery'>
      <a href='https://imgur.com/boF4s0N' target='__blank' className='container'>
        <img src={'https://i.imgur.com/boF4s0Nh.jpg'} alt='Gallery Headshot One'></img>
      </a>
      <a href='https://imgur.com/sSHCzyY' target='__blank' className='container'>
        <img src={'https://i.imgur.com/sSHCzyYh.png'} alt='Gallery Headshot Two'></img>
      </a>
      <a href='https://imgur.com/6OJ7Jkc' target='__blank' className='container'>
        <img src={'https://i.imgur.com/6OJ7Jkch.jpg'} alt='Gallery Headshot Three'></img>
      </a>
    </div>
  )
}

export default Gallery