import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routers from './Routers.js';
import { inject, observer } from "mobx-react"
import './Vendor.js';
import './styles.scss';

@inject("UserStore")
@observer
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Routers token={this.props.UserStore.token}
        />
      </HashRouter>
    );
  }
}

export default App;
