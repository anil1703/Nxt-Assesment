import Cookie from 'js-cookie'
import {useHistory} from 'react-router-dom'
import './index.css'

const Header = () => {
  const history = useHistory()

  const logingOut = () => {
    Cookie.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar-bg">
      <img
        src="https://res.cloudinary.com/dafmi9027/image/upload/v1717666373/Nxt%20Assesment/Group_8004navbarIcon_cwmxku.png"
        alt="logo"
        className="navbar-logo"
      />
      <button type="button" onClick={logingOut} className="navbar-logout">
        Logout
      </button>
    </nav>
  )
}

export default Header
