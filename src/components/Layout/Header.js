
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from "mobx-react"

@inject("UserStore")
@observer
class Header extends Component {

    constructor(props) {
        super(props);
        this.togglebutton = this.togglebutton.bind(this);
    }
    togglebutton() {
        this.props.updateParent();
    };

    render() {
        const { UserStore } = this.props
        return (
            <nav className="admin-header navbar navbar-default col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                {/* <!-- Top bar left --> */}
                <ul className="nav navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="button-toggle-nav inline-block pull-left" style={{ marginLeft: "20px" }} onClick={this.togglebutton} href="javascript:void(0);"  ><i className="zmdi zmdi-menu ti-align-right"></i></a>
                    </li>
                </ul>

                {/* <!-- top bar right --> */}
                <ul className="nav navbar-nav ml-auto">
                    <div className="float-left text-left">
                        <p className="card-text text-dark">{UserStore.displayName || ""}</p>
                        {/* <h4>{formatter.numberWithCommas(UserStore.money)}</h4> */}
                    </div>

                    <li className="nav-item dropdown mr-30" >
                        <a className="nav-link nav-pill user-avatar" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="true" aria-expanded="false">
                            <img src="assets/images/logoad.png" alt="avatar" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" style={{ cursor: "pointer" }}>
                            <div onClick={() => { UserStore.logout() }} className="dropdown-item" ><i className="fa fa-sign-out text-danger"></i>Đăng xuất</div>
                            <div onClick={() => {
                                UserStore.popupChangePass = true
                                UserStore.clearFormChangePass()
                            }} className="dropdown-item">Đổi mật khẩu</div>
                            <Link to="/profile/me" className="dropdown-item" >Thông tin cá nhân</Link>
                        </div>
                    </li>
                </ul>
            </nav>
            //   End Header

        );
    }
}
export default Header;

