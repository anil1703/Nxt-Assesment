import OptionsComponent from '../OptionsComponent'
import ImageComponent from '../ImageComponent'
import SingleComponent from '../SingleComponent'
import './index.css'

const QuestionContainer = props => {
  const {data, no} = props
  console.log(data)
  const {optionsType} = data
  switch (optionsType) {
    case 'DEFAULT':
      return <OptionsComponent no={no} data={data} />
    case 'IMAGE':
      return <ImageComponent no={no} data={data} />
    case 'SINGLE_SELECT':
      return <SingleComponent no={no} data={data} />
    default:
      return null
  }
}

export default QuestionContainer
