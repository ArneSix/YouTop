import React from 'react';

interface IProps {

}

interface IState {
 youtubeVideo: string | null;
}

const YoutubeContext = React.createContext<any>(null);

class YoutubeProvider extends React.Component<IProps, IState> {
 public constructor(props: IProps) {
  super(props);

  this.state = {
   youtubeVideo: null,
  }
 }

 public updateYoutubeUrl = (url: string) => {
  console.log(url);
  this.setState({youtubeVideo: url});
 }

 public render()
 {
  return (
   <YoutubeContext.Provider value={{ state: this.state.youtubeVideo, update: this.updateYoutubeUrl}}>
    {this.props.children}
   </YoutubeContext.Provider>
  )
 }
}

export {
 YoutubeProvider,
 YoutubeContext,
};