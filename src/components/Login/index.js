import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
// imported component, link from react libraries

class Login extends Component {
  // creating the buttons for selection and using link to navigate

  render() {
    return (
      <div className="buttonEl">
        <Link to="/leave">
          <button className="button">LEAVE LETTER</button>
        </Link>
        <Link to="/cover">
          <button className="button">COVER LETTER</button>
        </Link>
      </div>
    )
  }
}

export default Login
