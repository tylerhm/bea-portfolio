import './Gallery.scss'

const Gallery = () => {
  return (
    <div className='gallery'>
      <a href='https://imgur.com/0KHxC7g' target='__blank' className='container'>
        <img src={'https://i.imgur.com/0KHxC7gl.jpg'} alt='Gallery Headshot One'></img>
      </a>
      <a href='https://imgur.com/G4vlvNX' target='__blank' className='container'>
        <img src={'https://i.imgur.com/G4vlvNXl.jpg'} alt='Gallery Headshot Two'></img>
      </a>
      <a href='https://imgur.com/6OJ7Jkc' target='__blank' className='container'>
        <img src={'https://i.imgur.com/6OJ7Jkcl.jpg'} alt='Gallery Headshot Three'></img>
      </a>
    </div>
  )
}

export default Gallery