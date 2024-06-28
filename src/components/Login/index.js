import {useState} from 'react'
import {withRouter, Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import './index.css'

const Login = props => {
  const [username, typingUsername] = useState('')
  const [password, typingPassword] = useState('')
  const [isPswdVisible, changeTheOption] = useState('password')

  const changingUsername = event => typingUsername(event.target.value)
  const changingPassword = event => typingPassword(event.target.value)

  const [error, updatingError] = useState('')
  const [isError, isErrorUpdating] = useState(false)

  const submittingForm = async event => {
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      Cookie.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = props
      history.replace('/')
    } else {
      isErrorUpdating(true)
      updatingError(data.error_msg)
    }
  }

  const changingToVisible = event => {
    if (event.target.checked) {
      changeTheOption('text')
    } else {
      changeTheOption('password')
    }
  }

  const checking = Cookie.get('jwt_token')
  if (checking !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="loginHome">
      <div className="loginBox">
        <img
          src="https://res.cloudinary.com/dafmi9027/image/upload/v1717666373/Nxt%20Assesment/Group_8005_loginIcon_fjcnvj.png"
          alt="login website logo"
          className="login-logo"
        />
        <form onSubmit={submittingForm} className="form">
          <label className="label" htmlFor="username">
            USERNAME
          </label>
          <input
            value={username}
            onChange={changingUsername}
            type="text"
            id="username"
            className="inputStyle"
          />
          <label className="label" htmlFor="password">
            PASSWORD
          </label>
          <input
            value={password}
            onChange={changingPassword}
            type={isPswdVisible}
            id="password"
            className="inputStyle"
          />
          <div className="shwPswdDiv">
            <input
              onChange={changingToVisible}
              type="checkbox"
              className="checkBoxStyle"
              id="showPassword"
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>
          <button type="submit" className="loginBtn">
            Login
          </button>
          <p style={{color: 'red'}}>{isError ? error : null}</p>
        </form>
      </div>
    </div>
  )
}

export default withRouter(Login)
