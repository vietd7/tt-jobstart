import React, { Component } from 'react';
// import Footer from './footer';
import Header from './Header.js';

import Sitebar from './Sitebar.js';
import Alert from '../../common/alert/alert.js';
import Process from '../../common/process/index.js';
import { inject, observer } from 'mobx-react';
import PopupChangePass from './popupChangePass';
import PopupConfirm from '../../common/popupconfirm'


@inject('UIStore', "UserStore")
@observer
class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleactive: false
        };
    }

    componentDidMount() {
        if (this.props.UserStore.token !== "") {
            this.props.UserStore.getUserInfo()
            // this.props.UserStore.getPermission()
        }
    }

    updateValue() {
        this.setState({ toggleactive: !this.state.toggleactive })
        // this.setState(prevState => ({
        //     toggleactive: !prevState.toggleactive
        // }))
    }

    // handleClickToggleMenu(target) {
    //     if (this.props.UIStore.sidebarNode.contains(target) || !this.state.toggleactive) {
    //         return;
    //     } else {
    //         this.updateValue()
    //     }
    // }

    render() {
        const { UIStore, UserStore } = this.props
        return (
            <div
                // onClick={(e) => { this.handleClickToggleMenu(e.target) }}
                className={this.state.toggleactive ? "wrapper  slide-menu" : "wrapper"}>
                <Header updateParent={() => this.updateValue()} />
                <div className="container-fluid">
                    <div className="row">
                        <Sitebar />
                        <div className="content-wrapper">
                            {this.props.children}
                            {/* <Footer /> */}
                        </div>
                    </div>
                </div>

                <PopupChangePass
                    status={UserStore.popupChangePass}
                    close={() => {
                        UserStore.popupChangePass = !UserStore.popupChangePass
                        UserStore.clearFormChangePass()
                    }}
                />

                <PopupConfirm />
                <Alert />
                {UIStore.processVisiable ? <Process /> : null}
            </div>
        );
    }

}
export default Base;