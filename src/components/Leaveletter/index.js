import {Component} from 'react'
import './index.css'

class Leaveletter extends Component {
  // initializing the values in state
  state = {
    days: 0,
    dates: '',
    dates1: '',
    reason: '',
    sender: '',
    receiver: '',
    leaveletter: true,
  }

  // storing the values in state
  days = event => {
    this.setState({days: event.target.value})
  }

  dates = event => {
    this.setState({dates: event.target.value})
  }

  dates1 = event => {
    this.setState({dates1: event.target.value})
  }

  reason = event => {
    this.setState({reason: event.target.value})
  }

  sender = event => {
    this.setState({sender: event.target.value})
  }

  receiver = event => {
    this.setState({receiver: event.target.value})
  }
  // displaying the letter with inputs by this function

  getleaveletter = () => {
    const {leaveletter} = this.state
    this.setState({leaveletter: false})
  }

  render() {
    // destructuring the values of state
    const {
      dates,
      dates1,
      sender,
      receiver,
      days,
      reason,
      leaveletter,
    } = this.state
    // html code for taking the inputs and displaying  on the output letter
    return (
      <div className="layout">
        <div className="marginEl">
          <div>
            <p>no of days</p>
            <input onChange={this.days} />
          </div>
          <div>
            <p>from date</p>
            <input onChange={this.dates} />
          </div>
          <div>
            <p>to date</p>
            <input onChange={this.dates1} />
          </div>
          <div>
            <p>reason for leave</p>
            <input onChange={this.reason} />
          </div>
          <div>
            <p>sender details</p>
            <input onChange={this.sender} />
          </div>
          <div>
            <p>receiver details</p>
            <input onChange={this.receiver} />
          </div>
          <button className="marginEl" onClick={this.getleaveletter}>
            submit
          </button>
        </div>
        <div className="marginEl">
          {leaveletter ? (
            <h1>Enter details for letter</h1>
          ) : (
            <div className="letter">
              <h1>Leave Letter</h1>
              <p>respected {receiver},</p>
              <p>Manager,</p>
              <p className="left">
                Sub: Leave request from {dates} to {dates1}
              </p>
              <p className="left">
                I hope this message finds you well. I am writing to formally
                request a leave of absence from work due to {reason}. I believe
                that {days} days should be sufficient to address and resolve the
                situation.
                <br /> I have ensured that all my current tasks and
                responsibilities are up to date, and I will make every effort to
                complete any pending work before my departure. If necessary, I
                am willing to assist in the transition of my duties to a
                colleague during my absence.
                <br /> I understand the importance of my role in the team, and I
                apologize for any inconvenience this leave may cause. I am
                committed to ensuring a smooth transition and will do my best to
                minimize any disruption.
                <br /> I plan to start my leave on {dates} and return to work on{' '}
                {dates1}. However, I am open to discussion and modification of
                these dates if necessary. Thank you for your understanding and
                consideration of my request. I am happy to discuss this further
                if needed and appreciate your support in this matter.
                <p className="left">
                  Thank you for your understanding and consideration of my
                  request. I am happy to discuss this further if needed and
                  appreciate your support in this matter.
                </p>
              </p>
              <p className="left">Sincerely,</p>
              <p className="left">{sender}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Leaveletter
