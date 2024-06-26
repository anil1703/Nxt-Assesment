import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import JwtTokenChecking from './JwtTokenChecking'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <JwtTokenChecking exact path="/" component={Home} />
  </Switch>
)

export default App
