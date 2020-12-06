import { StyleSheet } from 'react-native';


export const userProfileStyles = StyleSheet.create({
  userProfileContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:50
  }, 
  formContent: {
    alignSelf: 'stretch'
  }, 
  inputStyles: {
      marginBottom: 20,
      borderWidth: 2,
      color: '#000',
      alignSelf: 'stretch',
      borderRadius: 10,
      padding: 5,
      fontSize: 20
  },
  submitFormBtn: {
    alignItems: 'center',
    paddingVertical:10,
    borderRadius: 10
  },
  submitText: { 
    color:'white', 
    fontSize:20 
  },
  logoutBtn:{
    color:'blue',
    fontSize:20,
    marginTop:10
  }
});