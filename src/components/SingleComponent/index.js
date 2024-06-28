import './index.css'

const SingleComponent = props => {
  const {data, no} = props
  const {questionText, options} = data
  console.log(data)
  return (
    <div className="qstnConatiner">
      <p className="qstnName">
        {no + 1}. {questionText}
      </p>
      <hr />
      <select className="selectStyle">
        {options.map(eachItem => (
          <option key={eachItem.id} value={eachItem.id}>
            {eachItem.text}
          </option>
        ))}
      </select>
    </div>
  )
}
export default SingleComponent
