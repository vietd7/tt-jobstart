import React from 'react'
import { inject, observer } from 'mobx-react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
@inject("UIStore")
@observer
class PopupConfirm extends React.Component {

    componentWillUnmount() {
        this.props.UIStore.isOpenPopupConfirm = false
    }
    render() {
        const { UIStore } = this.props;
        return (
            <Modal isOpen={UIStore.isOpenPopupConfirm} toggle={() => { UIStore.isOpenPopupConfirm = !UIStore.isOpenPopupConfirm }}
            >
                <ModalHeader>{UIStore.titleConfirm || ""}</ModalHeader>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    UIStore.onConfirm()
                    UIStore.popupConfirmCommon(false, "", "", Function)
                }}>
                    <ModalBody style={{ textAlign: "center" }}>
                        {UIStore.contentConfirm || ""}
                    </ModalBody>
                    <ModalFooter style={{ margin: "0 auto", border: "none", width: "fit-content" }}>
                        <Button type="submit" color="primary">Đồng ý</Button>{' '}
                        <Button type="button" color="secondary" onClick={() => {
                            UIStore.popupConfirmCommon(false, "", "", Function)
                        }}>Hủy</Button>
                    </ModalFooter>
                </form>
            </Modal>

        );
    }
}
export default PopupConfirm;