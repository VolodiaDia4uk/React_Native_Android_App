import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { connect } from "react-redux";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreenStack from './ScreensStack/LoginScreenStack'
import NewsInfoScreenStack from './ScreensStack/NewsInfoScreenStack'
import NewsListScreenStack from './ScreensStack/NewsListScreenStack'
import UserProfileScreenStack from './ScreensStack/UserProfileScreenStack'

export const Drawer = createDrawerNavigator();


function Navigator(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
      >
        <Drawer.Screen
          name="Login"
          options={{ drawerLabel: 'Login' }}
          component={LoginScreenStack}
        />
        <Drawer.Screen
          name="NewsList"
          options={{ drawerLabel: 'News List' }}
          component={NewsListScreenStack}
        />
        <Drawer.Screen
          name="NewsInfo"
          options={{ drawerLabel: 'News Info' }}
          component={NewsInfoScreenStack}
        />
        <Drawer.Screen
          name="UserProfile"
          options={{ drawerLabel: 'My Profile'}}
          component={ props.authToken ? UserProfileScreenStack: LoginScreenStack }
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
    return {
      authToken: state.userToken
    }
}

export default connect(
  mapStateToProps
)(Navigator);