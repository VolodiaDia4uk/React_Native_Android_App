import { StyleSheet } from 'react-native';
import { mainThemeColor } from '../../constants/index'

export const newsListStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding:50
  },
  item: {
    backgroundColor: mainThemeColor,
    padding: 20,
    margin: 15,
    alignItems: 'center',
    borderRadius: 10
  },
  title: {
    fontSize: 42,
    color: '#fff'
  },
  alertText: {
    fontSize:30,
    textAlign:'center'
    }
});