import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import Header from '../Header'
import QuestionContainer from '../QuestionContainer'

const progressStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Assessment extends Component {
  state = {process: progressStatus.initial, questionsData: [], qstnNo: 2}

  componentDidMount() {
    this.gettingAllQuestion()
  }

  gettingAllQuestion = async () => {
    this.setState({
      process: progressStatus.loading,
    })
    const url = 'https://apis.ccbp.in/assess/questions'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const {questions} = data

    if (response.ok) {
      const updatedQuestions = questions.map(eachItem => ({
        id: eachItem.id,
        optionsType: eachItem.options_type,
        questionText: eachItem.question_text,
        options: eachItem.options.map(option => ({
          id: option.id,
          text: option.text,
          isCorrect: option.is_correct === 'true', // Convert "true"/"false" strings to boolean
          ...(option.image_url && {imageUrl: option.image_url}), // Include imageUrl if it exists
        })),
      }))
      this.setState({
        process: progressStatus.success,
        questionsData: updatedQuestions,
      })
    } else {
      this.setState({
        process: progressStatus.failure,
      })
    }
  }

  loadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#263868" height={50} width={50} />
    </div>
  )

  successView = () => {
    const {questionsData, qstnNo} = this.state
    const questionDetails = questionsData[qstnNo]
    return (
      <>
        <div className="assessment-section-one">
          <div className="gap-between-button">
            <QuestionContainer no={qstnNo} data={questionDetails} />

            <button type="button" className="next-button">
              Next Question
            </button>
          </div>
        </div>
        <div className="assessment-section-two" />
      </>
    )
  }

  getApiStatus = () => {
    const {process} = this.state

    switch (process) {
      case progressStatus.loading:
        return this.loadingView()
      case progressStatus.success:
        return this.successView()
      case progressStatus.failure:
        return this.failureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="assessment-home">{this.getApiStatus()}</div>
      </>
    )
  }
}

export default Assessment
