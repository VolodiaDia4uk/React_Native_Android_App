const initialState = {
  userToken:null,
  newsArr: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return{
        ...state,
        userToken: 'authenticated'
      };
    case "LOGOUT":
      return {
        ...state,
        userToken: null
      };
    case "LOAD_NEWS":
      return{
        ...state,
        newsArr: action.payload
      }
    case "ADD_NEWS":
      return{
        ...state,
        newsArr:[...state.newsArr,action.payload]
      }
    default:
      return state;
  }
};

export default reducer;