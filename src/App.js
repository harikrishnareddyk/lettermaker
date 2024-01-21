import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Leaveletter from './components/Leaveletter'
import Coverletter from './components/Coverletter'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/leave" component={Leaveletter} />
      <Route exact path="/cover" component={Coverletter} />
      <Redirect to="not-found" />
    </Switch>
  </>
)
export default App
