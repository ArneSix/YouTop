import * as React from 'react';
const { remote } = window.require('electron');

import { WindowContext } from '../context';

import './Sidebar.scss'

import Close from '../assets/images/Close.svg';
import Maximize from '../assets/images/Maximize.svg';
import Minimize from '../assets/images/Minimize.svg';
import Search from '../assets/images/Search.svg';
import Watch from '../assets/images/Watch.svg';
import Pin from '../assets/images/Pin.svg';

interface IProps {
 children: any;
}

interface IState {}

class Sidebar extends React.Component<IProps, IState> {
 public handleClose()
 {
  const window = remote.getCurrentWindow();
  window.close();
 }

 public handleMaximize()
 {
  const window = remote.getCurrentWindow();
  window.maximize();
 }

 public handleMinimize() : void
 {
  const window = remote.getCurrentWindow();
  window.minimize();
 }

 public render()
 {
  return (
   <WindowContext.Consumer>
    {context => {
       return (
        <div className="app">
         {this.props.children}
         <div className="sidebar">
          <div className="sidebar-menu">
           <div className="sidebar-menu-window-buttons">
            <div className="btn-box">
             <img src={Close}    onClick={this.handleClose}    alt="close"    className="btn window"/>
            </div>
            <div className="btn-box">
             <img src={Maximize} onClick={this.handleMaximize} alt="maximize" className="btn window"/>
            </div>
            <div className="btn-box">
             <img src={Minimize} onClick={this.handleMinimize} alt="minimize" className="btn window"/>
            </div>
           </div>
           <div className="sidebar-menu-app-buttons">
            <div className="btn-box">
             <img
              src={Search}
              alt="search"
              onClick={context.toggleSearch}
              className={`btn ${(context.searchMode)? 'toggled': '' }`}/>
            </div>
            <div className="btn-box">
             <img
              src={Watch}
              alt="watch"
              onClick={context.toggleWatch}
              className={`btn ${(context.watchMode)? 'toggled': '' }`}/>
            </div>
           </div>
           <div className="sidebar-menu-app-sticky-buttons">
            <div className="btn-box">
             <img
              src={Pin}
              onClick={context.togglePin}
              alt="pin"
              className={`btn ${(context.pinMode)? 'toggled': ''}`}
             />
            </div>
           </div>
          </div>
         </div>
        </div>
       )
    }}
   </WindowContext.Consumer>
  )
 }
}

export default Sidebar;
