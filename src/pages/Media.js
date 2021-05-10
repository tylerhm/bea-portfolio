import { useEffect } from 'react'
import './Media.scss'

const Media = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='media'>
      <div>
        <iframe
          className='video'
          src='https://www.youtube.com/embed/CGjRPwctxIU'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        />
      </div>
    </div>
  )
}

export default Media