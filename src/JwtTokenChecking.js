import {Redirect, Route} from 'react-router-dom'
import Cookie from 'js-cookie'

const JwtTokenChecking = ({component: Component, ...rest}) => {
  const checking = Cookie.get('jwt_token')

  return (
    <Route
      {...rest}
      render={props =>
        checking !== undefined ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

export default JwtTokenChecking
