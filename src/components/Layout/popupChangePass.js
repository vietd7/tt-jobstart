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
                <ModalHeader>Change Password</ModalHeader>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    UserStore.changePassword()
                }}>
                    <ModalBody>
                        <div className="form-row">

                            <div className="form-group col-md-6">
                                <label >Current Password:</label>
                                <input style={{ border: "1px solid #e6e3e3", padding: "8px 10px" }} type="password" className="form-control"
                                    value={UserStore.newPass}
                                    onChange={e => UserStore.newPass = e.target.value}
                                    required
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label >New Password:</label>
                                <input style={{ border: "1px solid #e6e3e3", padding: "8px 10px" }} type="password" className="form-control"
                                    required
                                    value={UserStore.newPass2}
                                    onChange={e => UserStore.newPass2 = e.target.value}
                                />
                            </div>
                        </div>
                       
                    </ModalBody>
                    <ModalFooter className="moz-width" style={{ margin: "0 auto", border: "none", width: "fit-content" }}>
                        <Button type="submit" color="primary" >OK</Button>
                        <Button color="secondary" onClick={() => { close() }}>Cancel</Button>
                    </ModalFooter>
                </form>
            </Modal>


        );
    }
}
export default popupChangePass;