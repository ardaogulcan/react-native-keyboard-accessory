import React from 'react';

import { StackNavigator } from 'react-navigation';

import ViewExample from './screens/ViewExample';
import NavigationViewExample from './screens/NavigationViewExample';

export default StackNavigator({
  ViewExample: {
    screen: ViewExample,
  },
  NavigationView: {
    screen: NavigationViewExample,
  },
});

