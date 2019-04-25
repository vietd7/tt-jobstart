import React from 'react'
import Snackbar from 'material-ui/Snackbar';
import { inject, observer } from 'mobx-react';
import './style.scss'

@inject('UIStore')
@observer

class Alert extends React.Component {
    render(){
        // console.log("/....", this.props.UIStore.alertVisiable);
        const {UIStore} = this.props;
        return (
            <Snackbar
            className="alert-common"
            anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
            open={UIStore.alertVisiable}
            onClose={()=>{
                UIStore.alertCommon(false,"")
            }}
            snackbarcontentprops={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{UIStore.alertContent || ""}</span>}
          />
        )
    }
}

export default Alert;