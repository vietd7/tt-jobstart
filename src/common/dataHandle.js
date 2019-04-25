
import UserStore from '../stores/UserStore';
import UIStore from '../stores/UIStore';


export const numberWithCommas = (value) => {
        return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0;
};


export const findObjByKey = (array, key, value) => {
        for (var i = 0; i < array.length; i++) {
                if (array[i][key] === value) {
                        return array[i];
                }
        }
        return null;
}


export const apiURL = (obj, respHandler, errVisible) => {
        var objData = Object.assign(
                { applicationId: APPLICATION_ID },
                obj
        )
        UIStore.processVisiable = true
        fetch(API_URL_UAMS, {
                method: "POST",
                body: JSON.stringify(objData),
                headers: {
                        Authorization: UserStore.token
                }
        }).then(resp => resp.json()).then(resp => {
                UIStore.processVisiable = false
                respHandlerWrap(resp, respHandler, errVisible)
        }).catch(err => console.log("server error", err))
}

const respHandlerWrap = (resp, respHandler, errVisible) => {
        switch (resp.status) {
                case 0:
                        respHandler(resp)
                        break;
                case 1300:
                        UserStore.logout()
                        UserStore.alertVisiable = true
                        UserStore.alertContent = "Phiên đăng nhập hết hạn"
                        break;
                case 1301:
                        UserStore.logout()
                        UserStore.alertVisiable = true
                        UserStore.alertContent = "Token không hợp lệ"
                        break;
                case 205:
                        UIStore.alertCommon(true, "Mật khẩu không hợp lệ")
                        break;
                case 1:
                        UIStore.alertCommon(true, "Lỗi không xác định")
                        break;
                default:
                        if (errVisible) {
                                UIStore.alertCommon(true, resp.data.message || "Lỗi không xác định")
                        }
                        break;
        }
}

