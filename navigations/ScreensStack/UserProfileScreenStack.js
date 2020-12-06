import React, {useState} from 'react';

import {Stack} from './StackOptions'
import DefaultHeaderOptions from './StackOptions'
import UserProfile from '../../containers/UserProfile/UserProfile';
import NavigationDrawerStructure from './NavigationDrawerStructure'

const UserProfileScreenStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={DefaultHeaderOptions(props.navigation)}
     >
      <Stack.Screen
        name="UserProfile"
        component={()=>UserProfile(props)}
        options={{
          title:props.route.params.userName, //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

export default UserProfileScreenStack;