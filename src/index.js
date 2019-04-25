import React from 'react';

import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from "mobx-react"
import { useStrict } from "mobx"
import stores from "./stores"
import './styles.scss';



// window.onresize = function (event) {
//     stores.UIStore.mobileResponsive = window.innerWidth > 1000 ? false : true
// }



//tab_comm start
var s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
var uuid = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
localStorage.setItem("send_uuid", JSON.stringify({
    uuid: uuid,
    command: "send_uuid"
}))
var onStorageListener = (event) => {
    // console.log("got event", event);
    if (event.newValue === null) {
        // console.log("old value null");
    } else {
        var newData = JSON.parse(event.newValue)
        // console.log("oldData", newData);
        if (newData.command === "send_uuid") {
            localStorage.setItem("send_data", JSON.stringify({
                token: stores.UserStore.token,
                permissions: stores.UserStore.permissions,
                command: "send_data"
            }))
            // console.log("token current", stores.UserStore.token);
        }
        if (newData.command === "send_data") {
            // console.log("token receive ...", newData.token);
            stores.UserStore.token = newData.token;
            stores.UserStore.permissions = newData.permissions;
            localStorage.removeItem("send_uuid")
            localStorage.removeItem("send_data")
        }
    }
}
window.addEventListener("storage", onStorageListener)


ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>
    , document.getElementById('root'));

useStrict(false)
