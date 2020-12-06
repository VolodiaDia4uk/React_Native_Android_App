import { StyleSheet } from 'react-native';
import { mainThemeColor } from '../../constants/index'

export const loginStyles = StyleSheet.create({
  loginContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  loginForm: {
    alignSelf: 'stretch',
    alignItems:'center',
    paddingHorizontal:50
  },
  inputStyles:{
    marginBottom:20,
    borderWidth: 2,
    color:'#000',
    alignSelf: 'stretch',
    borderRadius:10,
    padding:5,
    fontSize:20
  },
  loginBtn:{
    backgroundColor:mainThemeColor,
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:10,
    fontSize:20,
  },
  loginBtnText: {
    fontSize: 20,
    color: '#fff'
  }
});
