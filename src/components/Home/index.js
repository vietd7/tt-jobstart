import React from "react"
import { inject, observer } from "mobx-react"

import './style.scss'


@inject('UserStore', 'UIStore')
@observer
class LandingComponent extends React.Component {

  componentDidMount() {
    
  }

  render() {
    

    const { LandingStore, UserStore, UIStore } = this.props;

    return (
      <div className="landing-wrap">
          Home
      </div>
    )
  }
}
export default LandingComponent
