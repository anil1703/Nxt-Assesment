import './index.css'

const OptionsComponent = props => {
  const {data, no} = props
  const {questionText, options} = data
  return (
    <div className="qstnConatiner">
      <p className="qstnName">
        {no + 1}. {questionText}
      </p>
      <hr />
      <ul className="optionList">
        {options.map(eachItem => (
          <li key={eachItem.id}>
            <button type="button" className="optionItem">
              {eachItem.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default OptionsComponent
