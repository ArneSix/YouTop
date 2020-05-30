import React from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { RouteWithLayout, RouteNoLayout } from './Utilities';

import {WindowProvider, YoutubeProvider} from './context';
import {Sidebar} from './layouts';
import {Landing} from './pages';


/*
hot component will take care of hot-reloading the electron application
every change inside this component tree will auto update

To add new routes, please use <RouteWithLayout> or <RouteNoLayout>
*/
export default hot((): JSX.Element =>
 (
  <HashRouter>
   <WindowProvider>
     <YoutubeProvider>
     <Switch>
      <RouteWithLayout path="/" component={Landing} layout={Sidebar}/>
     </Switch>
    </YoutubeProvider>
   </WindowProvider>
  </HashRouter>
 ));
