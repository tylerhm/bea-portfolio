const BarGroup = ({ data }) => {
  return <p className='bar-group'>{data.join(' | ')}</p>
}

export default BarGroup