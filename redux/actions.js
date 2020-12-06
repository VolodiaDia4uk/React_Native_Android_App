import { LOAD_NEWS, LOGIN, LOGOUT, ADD_NEWS} from './types'

export const login = () =>{
  return {
    type: LOGIN
    }
}

export const logout = () =>{
  return {
    type: LOGOUT
    }
}

export const loadNews = (data) =>{
  return {
    type: LOAD_NEWS,
    payload:data
  }
}

export const addNews = (data) =>{
  return {
    type: ADD_NEWS,
    payload: data
  }
}