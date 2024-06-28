import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import JwtTokenChecking from './JwtTokenChecking'
import Assessment from './components/Assessment'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <JwtTokenChecking exact path="/" component={Home} />
    <JwtTokenChecking exact path="/assessment" component={Assessment} />
  </Switch>
)

export default App
