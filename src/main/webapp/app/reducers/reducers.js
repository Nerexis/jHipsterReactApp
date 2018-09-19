const initState = {
  dataSources: [
    {name: 'Test', url: 'test.com', xpath: '//a'}
  ]
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_DATA_SOURCE': {
      return {
        ...state
        , dataSources: [...state.dataSources, {name: action.name, url: action.url, xpath: action.xpath}]
      };

    }
    default:
      return state;
  }
};


export default rootReducer;




