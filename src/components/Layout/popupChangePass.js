import React from 'react'
import { inject, observer } from 'mobx-react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



@inject('UserStore', "UIStore")
@observer
class popupChangePass extends React.Component {

    render() {
        const { status, close, UserStore, UIStore } = this.props;

        return (
            <Modal isOpen={status} toggle={() => { close() }}>
                <ModalHeader>Đổi mật khẩu</ModalHeader>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    UserStore.changePassword()
                }}>
                    <ModalBody>
                        <div className="form-row">

                            <div className="form-group col-md-6">
                                <label >Mật khẩu mới:</label>
                                <input style={{ border: "1px solid #e6e3e3", padding: "8px 10px" }} type="password" className="form-control"
                                    value={UserStore.newPass}
                                    onChange={e => UserStore.newPass = e.target.value}
                                    required
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Nhập lại mật khẩu mới:</label>
                                <input style={{ border: "1px solid #e6e3e3", padding: "8px 10px" }} type="password" className="form-control"
                                    required
                                    value={UserStore.newPass2}
                                    onChange={e => UserStore.newPass2 = e.target.value}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label >Mã OTP:</label>
                                <input style={{ border: "1px solid #e6e3e3", padding: "8px 10px" }} type="text" className="form-control"
                                    value={UserStore.otpChangePass}
                                    onChange={e => UserStore.otpChangePass = e.target.value}
                                    required
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label></label> <br />
                                <Button style={{ margin: "9px" }} type="button" color="success" onClick={() =>
                                    UIStore.getOTPCodePermission()
                                } className="common-table-btn">
                                    Lấy OTP
                                </Button>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className="moz-width" style={{ margin: "0 auto", border: "none", width: "fit-content" }}>
                        <Button type="submit" color="primary" >Đồng ý</Button>
                        <Button color="secondary" onClick={() => { close() }}>Hủy</Button>
                    </ModalFooter>
                </form>
            </Modal>


        );
    }
}
export default popupChangePass;