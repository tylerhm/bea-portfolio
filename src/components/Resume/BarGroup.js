const BarGroup = ({ data }) => {
  return <p className='bar-group'>{data.join('\u00A0\u00A0 | \u00A0\u00A0')}</p>
}

export default BarGroup