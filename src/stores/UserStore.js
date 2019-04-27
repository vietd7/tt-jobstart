import { observable, action } from "mobx"
import { apiRequestRBAC } from '../common/dataHandle';
import UIStore from "./UIStore";

const API_URL = window.CONSTANT.API_URL
const APPLICATION_ID = window.CONSTANT.APPLICATION_ID

export class UserStore {
  @observable token = "123"
  @observable usernameStam = ""
  @observable username = ""
  @observable password = ""
  @observable otp = ""
  @observable listPermissions = []
  @observable permissions = [""]
  @observable role = ""
  @observable displayName = "ABC"

  //changepass

  @observable newPass = ""
  @observable newPass2 = ""
  @observable otpChangePass = ""
  @observable popupChangePass = false

  @observable alertVisiable = false
  @observable alertContent = ""

  @action clearFormChangePass() {
    this.newPass = ""
    this.newPass2 = ""
    this.otp = ""
    this.otpChangePass = ""
  }

  @action logout() {
    localStorage.removeItem("token")
    this.token = ""
    this.username = ""
    this.usernameStam = ""
    this.password = ""
    this.alert = ""
    this.type = 0
    this.otp = ""
    this.listPermissions = []
    UIStore.alertCommon(false, "")
    this.permissions = [""]
    this.role = ""
    this.displayName = ""
  }

  @action clearDataLogin() {
    this.alertContent = ""
    this.alertVisiable = false
    this.username = ""
    this.usernameStam = ""
    this.password = ""
    this.otp = ""
  }

  @action login() {
    var obj = {
      command: "login",
      applicationId: APPLICATION_ID,
      username: this.username,
      password: this.password,
      otp: this.otp
    }
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(obj)
    }).then(resp => resp.json()).then(resp => {
      if (resp.status === 0) {
        UIStore.alertCommon(false, "")
        this.alertVisiable = false
        this.alertContent = ""
        this.token = resp.data.accessToken || ""
        this.displayName = resp.data.displayName || ""
        this.role = resp.data.role || ""
      } else {
        this.alertVisiable = true
        this.alertContent = resp.data.message || "Lỗi không xác định"
      }
    }).catch(err => console.log("Server err", err))
  }

  @action getUserInfo() {
    var obj = {
      command: "loginToken"
    }
    const respHandler = (resp) => {
      this.displayName = resp.data.displayName
      this.role = resp.data.role
      this.username = resp.data.username
      this.usernameStam = resp.data.username
      this.getPermission(resp.data.role)
    }
    apiRequestRBAC(obj, respHandler, true)
  }


  @action changePassword() {
    if (this.newPass !== this.newPass2) {
      UIStore.alertCommon(true, "Mật khẩu chưa trùng khớp !")
    } else {
      var obj = {
        command: "changePassword",
        newPassword: this.newPass,
        otp: this.otpChangePass,
        username: this.usernameStam
      }
      const respHandler = () => {

        this.popupChangePass = false
        if (this.username === this.usernameStam) {
          this.alertVisiable = true
          this.alertContent = "Đổi mật khẩu thành công !"
          this.logout()
        } else {
          this.usernameStam = this.username
          UIStore.alertCommon(true, "Đổi mật khẩu thành công !")
        }
      }
      apiRequestRBAC(obj, respHandler, true)
    }
  }
}

export default new UserStore()
