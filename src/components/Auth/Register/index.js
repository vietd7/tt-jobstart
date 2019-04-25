import React, { Component } from "react"
import { inject, observer } from "mobx-react"
require("./style.scss")

@inject("UserStore")
@observer
class Register extends Component {

  registerHander() {
    this.props.UserStore.createAccount(this.props.history)
  }
  componentDidMount() {
    // this.props.UserStore.clearFromRegister()
  }

  render() {
    let { UserStore } = this.props
    return (
      <div className="container">
        <div id="login" className="signin-card">
          <p className="subhead">{UserStore.alert}</p>
          <form action="/"
            onSubmit={e => {
              e.preventDefault()
              this.registerHander()
            }}>

            <div className="form-group">
              <label htmlFor="username" className="float-label">Fullname</label>
              <input className="form-control" type="text" size="18" alt="username" minLength={6} autoFocus required
                value={UserStore.username}
                onChange={e => UserStore.username = e.target.value} />
            </div>

            <div className="form-group">
              <label htmlFor="username" className="float-label">Email</label>
              <input className="form-control" type="text" size="18" alt="username" minLength={6} required
                value={UserStore.partnerName}
                onChange={e => UserStore.partnerName = e.target.value} />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="float-label">Password</label>
              <input className="form-control" type="password" size="18" minLength={6} required
                onChange={e => { UserStore.newPass = e.target.value }}
                value={UserStore.newPass} />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="float-label">Passwordconfirm</label>
              <input className="form-control" type="password" size="18" minLength={6} required
                onChange={e => { UserStore.newPass2 = e.target.value }}
                value={UserStore.newPass2} />
            </div>
            <div>
              <button className="btn btn-block btn-info ripple-effect" type="submit">Singin</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Register

