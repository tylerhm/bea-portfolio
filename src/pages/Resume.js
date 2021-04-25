import BarGroup from '../components/Resume/BarGroup'
import resumeJSON from '../utils/resumeJSON'
import resume from '../downloads/BeaRiveraIrionsResume.pdf'
import './Resume.scss'

const Resume = () => {

  const renderableResume = []
  for (const [key, value] of Object.entries(resumeJSON)) {
    if (key !== 'meta')
      renderableResume.push(<div className='header sub'>{value.name}</div>)
    value.content.forEach(entry => {
      renderableResume.push(<BarGroup data={entry}/>)
    })
    renderableResume.push(<div className={key === 'meta' ? 'separator meta' : 'separator'}></div>)
  }

  renderableResume.pop()
  renderableResume.push(<a className='button' href={resume} download>Download</a>)

  return (
    <div className='resume'>
      <div className='content'>
        <div className='header boxed shrink'>
          RESUME
        </div>
        {renderableResume}
      </div>
    </div>
  )
}

export default Resume