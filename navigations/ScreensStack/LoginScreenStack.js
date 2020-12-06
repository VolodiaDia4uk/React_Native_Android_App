import React, {useState} from 'react';
import {Stack} from './StackOptions'
import DefaultHeaderOptions from './StackOptions'
import Login from '../../containers/Login/Login';
import NavigationDrawerStructure from './NavigationDrawerStructure'

const LoginScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={DefaultHeaderOptions(navigation)}
     >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

export default LoginScreenStack;