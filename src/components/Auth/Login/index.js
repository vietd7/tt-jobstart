import React, { Component } from "react"
import { inject, observer } from "mobx-react"
require("./style.scss")

@inject("UserStore")
@observer
class Login extends Component {

  loginHander() {
    this.props.UserStore.login(this.props.history)
  }
  componentDidMount(){
    this.props.UserStore.alert = ""
  }

  render() {
    let { UserStore } = this.props
    return (
      <div className="container">
        <div id="login" className="signin-card">
          <p className="subhead">{UserStore.alert}</p>
          <form
            style={{ display: UserStore.loginStep2 ? "none" : "block" }}
            action="/"
            onSubmit={e => {
              e.preventDefault()
              this.loginHander()
            }}
          >
            <div id="form-login-username" className="form-group">
              <label htmlFor="username" className="float-label">
                Email
              </label>
              <input
                id="username"
                className="form-control"
                name="username"
                type="text"
                size="18"
                alt="login"
                autoFocus
                value={UserStore.username}
                onChange={e => {
                  UserStore.username = e.target.value
                }}
                required
              />
            </div>
            <div id="form-login-password" className="form-group">
              <label htmlFor="password" className="float-label">
                Password
              </label>
              <input
                id="passwd"
                className="form-control"
                name="password"
                type="password"
                onChange={e => {
                  UserStore.password = e.target.value
                }}
                value={UserStore.password}
                size="18"
                alt="password"
                required
              />
            </div>
            <div>
              <button
                className="btn btn-block btn-info ripple-effect"
                type="submit"
                name="Submit"
                alt="sign in"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login

