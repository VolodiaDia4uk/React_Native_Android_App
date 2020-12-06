import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, FlatList, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadNews } from '../../redux/actions'
import { newsListStyles } from './NewsListStyles'

const renderList = ({ item }, navigation ) =>(
  <TouchableOpacity 
    style={ newsListStyles.item } 
    onPress={ ()=> navigation.navigate( 'NewsInfo', item )}
    >
      <Text style={newsListStyles.title}>{item.title}</Text>
  </TouchableOpacity>
)

const NewsList = ({ loadData, newsList, navigation}) =>{

  const getStorageData = async()=>{
    try{
      const res = await AsyncStorage.getItem('newsList')
      const data = JSON.parse(res)
      if(data!=null){
        console.log(data)
        loadData(data)
      }
    }
    catch(err){
      Alert.alert(err)
    }
  }

  useEffect(()=>{
    getStorageData()
  },[])

  return (
    <SafeAreaView style={ newsListStyles.container }>
      {newsList.length ? <FlatList
        data={ newsList }
        renderItem={ data=> renderList(data,navigation )}
        keyExtractor={ item => item.id }
      />:<Text style={newsListStyles.alertText}>Sorry we dont have news</Text>}
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  return {
    newsList: state.newsArr
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    loadData: bindActionCreators(loadNews, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);