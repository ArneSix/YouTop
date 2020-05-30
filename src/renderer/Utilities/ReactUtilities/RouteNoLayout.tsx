import React from 'react';
import { Route } from 'react-router-dom';

const RouteNoLayout = ({layout, component, ...rest}: any) => {
 return (
  <Route {...rest} component={component}/>
 )
}

export default RouteNoLayout;