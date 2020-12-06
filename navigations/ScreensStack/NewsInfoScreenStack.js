import React, {useState} from 'react';

import {Stack} from './StackOptions'
import DefaultHeaderOptions from './StackOptions'
import NewsInfo from '../../containers/NewsInfo/NewsInfo';
import NavigationDrawerStructure from './NavigationDrawerStructure'

const NewsInfoScreenStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={DefaultHeaderOptions(props.navigation)}
     >
      <Stack.Screen
        name="NewsInfo"
        component={()=>NewsInfo(props)}
        options={{
          title: 'News Info', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

export default NewsInfoScreenStack;