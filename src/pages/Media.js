import { useEffect } from 'react'
import './Media.scss'

const Media = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='media'>
      <div className='video-container'>
        <iframe
          className='video'
          src='https://www.youtube.com/embed/h1Rb0oOJsv8'
          title='Voice Reel'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        />
      </div>
      <div className='video-container'>
        <iframe
          className='video'
          src='https://www.youtube.com/embed/0coXqufsFM4'
          title='Dance Reel'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        />
      </div>
    </div>
  )
}

export default Media