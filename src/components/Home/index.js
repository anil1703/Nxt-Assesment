import {useHistory} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => {
  const history = useHistory()
  const startingAssesment = () => {
    history.push('/assessment')
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="homecont-one">
          <h1 className="home-cont-one-head">Instructions</h1>
          <ol className="orderlist">
            <li>
              <p>Total Questions: 10</p>
            </li>
            <li>
              <p>Types of Questions: MCQs</p>
            </li>
            <li>
              <p>Duration: 10 Mins</p>
            </li>
            <li>
              <p>Marking Scheme: Every correct response gets 1 mark</p>
            </li>
            <li>
              <p>
                All progress will be lost if you reload during the assessment
              </p>
            </li>
          </ol>
          <button
            type="button"
            onClick={startingAssesment}
            className="buttonHomeStart"
          >
            Start Assessment
          </button>
        </div>
        <div className="homecont-two">
          <img
            src="https://res.cloudinary.com/dafmi9027/image/upload/v1719399229/Nxt%20Assesment/Group_ps7qrx.png"
            className="bannr-home"
            alt="sample"
          />
        </div>
      </div>
    </>
  )
}

export default Home
