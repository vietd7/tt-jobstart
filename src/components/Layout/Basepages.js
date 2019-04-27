import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import PopupChangePass from './popupChangePass';
import PopupConfirm from '../../common/popupconfirm'
import { inject, observer } from "mobx-react"
@inject("UserStore")
@observer
class Basepages extends React.Component {

    constructor(props) {
        super(props);
        this.dropdownbarOpen = this.dropdownbarOpen.bind(this);
        this.state = {
            dropdownbarOpen: false
        };
    }
    dropdownbarOpen() {
        this.setState(prevState => ({
            dropdownbarOpen: !prevState.dropdownbarOpen
        }));
    }

    render() {
        const { UserStore } = this.props
        return (
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>

                <header className="site-navbar py-1" role="banner">
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-6 col-xl-2">
                                <h1 className="mb-0"><a href="index.html" className="text-black h2 mb-0">Job<strong>start</strong></a></h1>
                            </div>

                            <div className="col-10 col-xl-10 d-xl-block">
                                <nav className="site-navigation text-right" role="navigation">

                                    <ul className="site-menu js-clone-nav mr-auto d-lg-block">
                                        <li
                                        // className="active"
                                        ><a href="index.html">Home</a></li>
                                        <li className="has-children"><a href="category.html">Category</a> </li>
                                        <li><Link to="/candidate">For Candidates</Link></li>
                                        <li><Link to="/employers">For Employers</Link></li>
                                        {UserStore.token !== "" ? (
                                            <li>
                                                <Dropdown isOpen={this.state.dropdownbarOpen} toggle={this.dropdownbarOpen} style={{ display: "inline-block" }}>
                                                    <DropdownToggle className="dropdown-toggle btn btn-primary" style={{ background: "#007bff" }}>
                                                        Hello, {UserStore.displayName || ""}
                                                    </DropdownToggle>
                                                    <DropdownMenu style={{ cursor: "pointer" }}>
                                                        <div onClick={() => { UserStore.logout() }} className="dropdown-item" ><i className="text-danger ti-unlock"></i>Logout</div>
                                                        <div onClick={() => { UserStore.popupChangePass = true }} className="dropdown-item" >Change Password</div>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </li>
                                        ) :
                                            (
                                                <React.Fragment>
                                                    <li><Link to="/register">Singin</Link></li>
                                                    <li><Link to="/login">Login</Link></li>
                                                </React.Fragment>
                                            )
                                        }


                                    </ul>
                                </nav>
                            </div>
                            <div className="col-6 col-xl-2 text-right d-block">
                                <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{ position: "relative", top: "3px" }}><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="content-wrap">
                    {this.props.children}
                </div>
                <div className="py-5 bg-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="text-white h4 font-weihgt-normal mb-4">Subscribe Newsletter</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                <input type="text" className="form-control border-0 mb-3 mb-md-0" style={{ height: "45px" }} placeholder="Enter Your Email" />
                            </div>
                            <div className="col-md-3">
                                <input type="submit" value="Send" className="btn btn-dark btn-block" style={{ height: "45px" }} />
                            </div>
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
            </div>
        );
    }

}

export default Basepages;


{/* <li className="nav-item dropdown mr-30" >
    <a className="nav-link nav-pill user-avatar" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="true" aria-expanded="false">
        <img src="assets/images/profile-avatar.jpg" alt="avatar" />
    </a>
    <div className="dropdown-menu dropdown-menu-right" style={{ cursor: "pointer" }}>
        <div onClick={() => { UserStore.logout() }} className="dropdown-item" ><i className="text-danger ti-unlock"></i>Thoát</div>
        <div onClick={() => { UserStore.popupChangePass = true }} className="dropdown-item" >Đổi mật khẩu</div>
        <div onClick={() => { UserStore.popupChangePass2 = true }} className="dropdown-item" >Đổi MK cấp 2</div>
    </div>
</li> */}