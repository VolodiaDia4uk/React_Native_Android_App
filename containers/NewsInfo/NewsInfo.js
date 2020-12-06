import React from 'react';
import { Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { newsInfoStyles } from './NewsInfoStyles'
const NewsInfo = ({ route, navigation}) =>{
    return (
      <SafeAreaView style={ newsInfoStyles.newsInfoContainer }>
      { route.params ?
        <ScrollView> 
          <Text style={newsInfoStyles.textStyles}>title: { route.params.title }</Text>
          <Text style={newsInfoStyles.textStyles}>description: { route.params.description}</Text>
          <Text style={newsInfoStyles.textStyles}>author: { route.params.author }</Text>
          <Text style={newsInfoStyles.textStyles}>date: { route.params.date }</Text>
        </ScrollView>
        :
        <TouchableOpacity onPress={ ()=> navigation.navigate('NewsList') } style = { newsInfoStyles.navigationBtn }>
          <Text style = { newsInfoStyles.textStyles }>
            watch full news list
          </Text>
        </TouchableOpacity>
      }
      </SafeAreaView>
    );
}
export default NewsInfo