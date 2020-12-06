import React, {useState} from 'react';
import { Text, TextInput,TouchableOpacity, SafeAreaView, ScrollView, AsyncStorage} from 'react-native';
import { useDispatch,useSelector } from 'react-redux'
import { userProfileStyles } from './UserProfileStyles'
import { ADD_NEWS, LOGOUT } from '../../redux/types'
import { mainThemeColor } from '../../constants/index'

const UserProfile = (props)=>{
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const storeSelector = useSelector(state => state.newsArr)


  const handleSubmitForm = () =>{
    const date = new Date()
    const newsInfo = {
      title,
      description: description.trim(),
      author,
      id: +Date.now(),
      date:`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    }

    const setDataToStorage = async(data)=>{
        try{
          AsyncStorage.setItem('newsList',JSON.stringify([...storeSelector,data]))
        }
        catch(err){
          console.log(err)
        }
    }
    
    dispatch({ type:ADD_NEWS, payload: newsInfo })
    setDataToStorage(newsInfo);
    props.navigation.navigate("NewsInfo",newsInfo)
    setTitle('')
    setAuthor('')
    setDescription('')
  }

  const handleLogout = () =>{
    dispatch({ type: LOGOUT })
    props.navigation.navigate("Login")
  }

  const isDisabled = !title || !description || !author

  return (  
    <SafeAreaView  style = { userProfileStyles.userProfileContainer }>
      <ScrollView style = { userProfileStyles.formContent }>
        <TextInput
          placeholder = 'Enter title'
          placeholderTextColor = 'blue'
          style = { userProfileStyles.inputStyles }
          value = { title }
          onChangeText = { text=> setTitle(text) }
        />
        <TextInput
          placeholder = 'Enter author'
          placeholderTextColor = 'blue'
          style = { userProfileStyles.inputStyles }
          value = { author }
          onChangeText = { text=> setAuthor(text) }
        />
        <TextInput
          placeholder = 'Enter description'
          multiline = { true }
          numberOfLines = { 4 }
          placeholderTextColor = 'blue'
          style = { userProfileStyles.inputStyles }
          value = { description }
          onChangeText = { text=> setDescription(text) }
        />
        <TouchableOpacity
          onPress = { handleSubmitForm }
          style = {[ userProfileStyles.submitFormBtn, { backgroundColor: isDisabled ? 'red' : mainThemeColor}]}
          disabled={ isDisabled }
        >
          <Text style = { userProfileStyles.submitText }>
            Submit 
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={userProfileStyles.submitFormBtn}
          onPress={handleLogout}
        >
          <Text style={ userProfileStyles.logoutBtn }> 
            Logout 
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UserProfile
