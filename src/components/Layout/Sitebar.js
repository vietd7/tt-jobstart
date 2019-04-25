import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollArea from 'react-scrollbar';
import { Collapse } from 'reactstrap';
import { inject, observer } from "mobx-react"
import './Header.js';


@inject("ConfigStore", "UIStore")
@observer
class Sitebar extends Component {
  constructor(props) {
    super(props);
    var state = {};
    var featureList = [...this.props.ConfigStore.featuresByGroupData]
    for (var i = 0; i < featureList.length; i++) {
      if (featureList[i].length > 1) {
        state[featureList[i][0].name] = false;
      }
    }
    this.state = state;
    function invertState(target) {
      var item = {}
      item[target.name] = !this.state[target.name]
      this.setState(item);
    }
    this.invertState = invertState.bind(this);

  }


  render() {
    const { ConfigStore, UIStore } = this.props
    return (
      <div className="side-menu-fixed" style={{ top: "66px" }}
      ref={node =>  UIStore.sidebarNode = node}
      >
        <ScrollArea speed={0.8} style={{ overflow: 'hidden' }}
          className="scrollbar side-menu-bg"
          contentClassName="saidbar"
          horizontal={false} >
          <div className="saidbar">
            <ul className="nav navbar-nav side-menu pt-0" id="sidebarnav">
              {ConfigStore.featuresByGroupData.map((entry, index) => {
                if (entry.length === 1) {
                  return entry.map((val, i) =>
                    <li className={UIStore.linkCurrent === val.name ? "active" : ""} onClick={() => {
                      UIStore.linkCurrent = val.name
                    }} key={i} >
                      <Link to={val.href || ""}><i className={val.iconname}></i><span className="right-nav-text">{val.displayname}</span></Link>
                    </li>
                  )
                } else {
                  return (<li key={index}>
                    <a href="javascript:void(0);" onClick={() => {
                      this.invertState(entry[0])
                    }} aria-expanded={this.state[entry[0].name] ? "true" : "false"} className={this.state[entry[0].name] ? "" : "collapsed"}>
                      <div className="pull-left"><i className={entry[0].iconname || ""}></i><span className="right-nav-text">{entry[0].group || ""}</span></div>
                      <div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
                    </a>
                    <Collapse isOpen={this.state[entry[0].name]}>
                      <ul>
                        {entry.map((val, i) =>
                          <li className={UIStore.linkCurrent === val.name ? "active" : ""} key={i} onClick={() => {
                            UIStore.linkCurrent = val.name
                          }}> <Link to={val.href || ""}>{val.displayname || ""}</Link> </li>
                        )}
                      </ul>
                    </Collapse>
                  </li>)
                }
              })}
            </ul>
          </div>
        </ScrollArea>
      </div>
    );
  }
}
export default Sitebar;