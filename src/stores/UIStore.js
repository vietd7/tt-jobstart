import { observable, action } from "mobx"
import UserStore from './UserStore';


const APPLICATION_ID = window.CONSTANT.APPLICATION_ID
const API_URL_PAYGATE = window.CONSTANT.API_URL_PAYGATE

const responsiveDevice = () => {
  return window.innerWidth > 1000 ? false : true
}

class UIStore {

  @observable sidebarNode = ""
  @observable mobileResponsive = responsiveDevice()
  @observable alertVisiable = false
  @observable alertContent = ""

  @observable processVisiable = false
  @observable linkCurrent = "/"

  //confirm
  @observable isOpenPopupConfirm = false
  @observable callBackConfirm = Function
  @observable titleConfirm = ""
  @observable contentConfirm = ""

  //images
  @observable imagesVisible = false
  @observable linkImage = ""

  @action alertCommon(visible, text) {
    this.alertVisiable = visible
    this.alertContent = text
  }

  @action popupConfirmCommon = (isOpen, title, content, callBackConfirm) => {
    this.isOpenPopupConfirm = isOpen
    this.titleConfirm = title
    this.contentConfirm = content
    this.callBackConfirm = callBackConfirm
  }

  @action onConfirm() {
    this.callBackConfirm()
  }

  @action toggleImage(value, link){
    this.imagesVisible = value || false
    this.linkImage = link || ""
  }

  @action getOTPCodePermission() {
    var params = `${API_URL_PAYGATE}?command=getOTPCodePermission&applicationId=${APPLICATION_ID}`
    fetch(params, {
        headers: {
            Authorization: UserStore.token
        }
    }).then(resp => resp.json()).then(resp => {
        if (resp.status === 0) {
            this.alertCommon(true, resp.data.message || "Lỗi không xác định")
        }
    });
}
}

export default new UIStore()
