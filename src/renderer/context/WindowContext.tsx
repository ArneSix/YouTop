import React from 'react';
const { remote } = window.require('electron');

interface IProps {

}

interface IState {
 searchMode: boolean;
 watchMode: boolean;
 pinMode: boolean
}

const WindowContext = React.createContext<any>(null);

class WindowProvider extends React.Component<IProps, IState> {
 public constructor(props: IProps) {
  super(props);

  this.state = {
   searchMode: true,
   watchMode: false,
   pinMode: false,
  }
 }

 public toggleSearchMode = () => {
  this.setState({
   searchMode: !this.state.searchMode,
   watchMode: !this.state.watchMode,
  });
 }

 public toggleWatchMode = () => {
  this.setState({
   searchMode: !this.state.searchMode,
   watchMode: !this.state.watchMode,
  });
 }

 public togglePinMode = () => {
  const window = remote.getCurrentWindow();
  window.setAlwaysOnTop(!this.state.pinMode);

  this.setState({pinMode: !this.state.pinMode});
 }

 public render()
 {
  return (
   <WindowContext.Provider value={{
    searchMode:
    this.state.searchMode,

    watchMode:
    this.state.watchMode,

    pinMode:
    this.state.pinMode,

    toggleSearch:
    this.toggleSearchMode,

    toggleWatch:
    this.toggleWatchMode,

    togglePin:
    this.togglePinMode,
   }}>
    {this.props.children}
   </WindowContext.Provider>
  )
 }
}

export {
 WindowProvider,
 WindowContext,
};
