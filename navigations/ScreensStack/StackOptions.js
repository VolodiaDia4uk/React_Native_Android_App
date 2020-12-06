import React, {useState} from 'react';

import NavigationDrawerStructure from './NavigationDrawerStructure'
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

export const Stack = createStackNavigator();

const DefaultHeaderOptions = (navigator)=> {
  return{
    headerLeft: () => (
    <NavigationDrawerStructure navigationProps={navigator} />
    ),
    headerRight:()=><View style={{ width: 25, height: 25, marginRight: 5 }}/>,
    headerStyle: {
      backgroundColor: '#40aedf', //Set Header color
    },
    headerTintColor: '#fff', //Set Header text color
    headerTitleStyle: {
      textAlign: 'center',
      fontWeight: 'bold', //Set Header text style
    },
  }
}
export default DefaultHeaderOptions