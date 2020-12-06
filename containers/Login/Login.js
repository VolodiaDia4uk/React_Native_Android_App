import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, decrement } from '../../redux/actions'
import { loginStyles } from './LoginStyles'

const Login = ({ logining, navigation }) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const showAlertMsg = () => {
      ToastAndroid.show('Incorrect login or password',
        ToastAndroid.SHORT);
    };

  const handleLogin = () =>{
    if(login === 'User' && password === 'User'){
      logining();
      navigation.navigate('UserProfile',{
        userName: login
      });
    }
    else{
      showAlertMsg()
    }
    setLogin('')
    setPassword('')
  }

  const isDisabled = !login || !password

  return (
    <View  style = { loginStyles.loginContainer }>
      <View style = { loginStyles.loginForm }>
        <TextInput
          placeholder = 'Enter login'
          style = { loginStyles.inputStyles }
          value = { login }
          onChangeText = { text=> setLogin(text) }
        />
        <TextInput
          placeholder = 'Enter password'
          secureTextEntry = { true }
          style={ loginStyles.inputStyles }
          value = { password }
          onChangeText = { text=> setPassword(text) }
        />
        <TouchableOpacity
          style = {[ loginStyles.loginBtn, {opacity: isDisabled ? 0.3 : 1 } ]}
          onPress = { handleLogin }
          disabled={ isDisabled }
        >
          <Text style={loginStyles.loginBtnText}> Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    logining: bindActionCreators(login, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
