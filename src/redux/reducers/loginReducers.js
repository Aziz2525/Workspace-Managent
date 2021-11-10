let defaultState = {
  isLogin: false,
  username: null,
  authority: null,
};

let loginReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case "LOGIN":
      console.log('login')
      newState = {
        isLogin: true,
        username: action.payload.username,
        authority: action.payload.authority,
      };
      return newState;
    case "LOGOUT":
      newState = {
        isLogin: false,
        username: null,
        authority: null,
      };
      return newState;
    default:
        return state;
  }
};

export default loginReducer;
