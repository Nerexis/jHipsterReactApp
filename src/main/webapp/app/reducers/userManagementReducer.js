const initState = {
  signUpStatus: false
};

const userManagementReducer = (state = initState, action) => {
  switch(action.type) {
    case 'SIGN_UP': {

      return {
        ...state,
        signUpStatus: true
      };
    }

    default:
      return state;
  }
};
