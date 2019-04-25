import React from 'react'
 
import { inject, observer } from 'mobx-react';
import './style.scss'
import { CircularProgress } from 'material-ui/Progress';


@inject('UIStore')
@observer
class Alert extends React.Component {

    state = {
        timeOutID : 1
    }
    componentDidMount(){
        var timeOutID = setTimeout(()=>{
            this.props.UIStore.processVisiable = false
            this.props.UIStore.alertCommon(true, "Lỗi server")
        }, 30000)
        this.setState({timeOutID : timeOutID})
    }
    componentWillUnmount(){
        clearTimeout(this.state.timeOutID)
    }

    render() {
        // console.log("/....", this.props.UIStore.alertVisiable);

        // const { UIStore } = this.props;
        return (
            <div className="process-wrap">
                <CircularProgress className="process" size={50} />
            </div>
        )
    }
}

export default Alert;