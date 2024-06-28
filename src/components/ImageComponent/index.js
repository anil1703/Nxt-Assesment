import './index.css'

const ImageComponent = props => {
  const {data, no} = props
  console.log(data)
  const {questionText, options} = data
  return (
    <div className="qstnConatiner">
      <p className="qstnName">
        {no + 1}. {questionText}
      </p>
      <hr />
      <ul className="optionList">
        {options.map(eachItem => (
          <li className="optionBorder" key={eachItem.id}>
            <button type="button" className="optionItem">
              <img className="optionImg" src={eachItem.imageUrl} alt="sample" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ImageComponent
