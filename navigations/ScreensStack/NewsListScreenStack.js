import React, {useState} from 'react';

import {Stack} from './StackOptions'
import DefaultHeaderOptions from './StackOptions'
import NewsList from '../../containers/NewsList/NewsList';
import NavigationDrawerStructure from './NavigationDrawerStructure'

const NewsListScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={DefaultHeaderOptions(navigation)}
     >
      <Stack.Screen
        name="NewsList"
        component={NewsList}
        options={{
          title: 'News List', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

export default NewsListScreenStack;