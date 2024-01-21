import {Component} from 'react'
import './index.css'

class Coverletter extends Component {
  // initializing the values in state
  state = {
    company: '',
    role: '',
    posting: '',
    skills: '',
    sender: '',
    receiver: '',
    coverletter: true,
  }
  // storing the values in state

  company = event => {
    const {company} = this.state
    this.setState({company: event.target.value})
  }

  role = event => {
    this.setState({role: event.target.value})
  }

  posting = event => {
    this.setState({posting: event.target.value})
  }

  skills = event => {
    this.setState({skills: event.target.value})
  }

  sender = event => {
    this.setState({sender: event.target.value})
  }

  receiver = event => {
    this.setState({receiver: event.target.value})
  }
  // displaying the letter with inputs by this function

  getcoverletter = () => {
    const {coverletter} = this.state
    this.setState({coverletter: false})
    console.log('sdlfsjkd')
  }

  render() {
    const {
      skills,
      role,
      sender,
      receiver,
      company,
      posting,
      coverletter,
    } = this.state
    console.log('sdjgksafa')
    // html code for taking the inputs and displaying  on the output letter
    return (
      <div className="layout">
        <div className="marginEl">
          <div>
            <p> company</p>
            <input onChange={this.company} />
          </div>
          <div>
            <p> role</p>
            <input onChange={this.role} />
          </div>
          <div>
            <p>job posting</p>
            <input onChange={this.posting} />
          </div>
          <div>
            <p>technical skills</p>
            <input onChange={this.skills} />
          </div>
          <div>
            <p>sender details</p>
            <input onChange={this.sender} />
          </div>
          <div>
            <p>receiver details</p>
            <input onChange={this.receiver} />
          </div>
          <button className="marginEl" onClick={this.getcoverletter}>
            submit
          </button>
        </div>

        <div className="marginEl">
          {coverletter ? (
            <h1>enter details for letter</h1>
          ) : (
            <div className="letter">
              <h1>Cover Letter</h1>
              <p> respected {receiver},</p>

              <p className="left">
                Subject: Application for {role} at {company}.
              </p>
              <p className="left">
                I hope this email finds you well. I am writing to express my
                interest in the {role} role at {company}, as advertised on{' '}
                {posting}.
                <br /> As a recent graduate, I am eager to begin my career
                {company}, and I believe that my skills and enthusiasm align
                well with the requirements of the {role} role. Throughout my
                academic journey, I have developed a solid foundation in{' '}
                {skills}, and I am confident in my ability to contribute
                effectively to your team.
                <br /> Enclosed is my resume, which provides further details
                about my academic and extracurricular experiences. I would be
                delighted to discuss how my skills and attributes align with the
                needs of {company} in more detail. I am available for an
                interview at your earliest convenience.
                <p className="left">
                  Thank you for considering my application. I look forward to
                  the possibility of contributing to the success of {company}.
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

export default Coverletter
