const initState = {
  data: [
    {name: 'Test', url: 'test.com', xpath: '//a'}
  ]
};

const dataSourceReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_DATA_SOURCE': {
      return {
        ...state
        , data: [...state.data, {name: action.name, url: action.url, xpath: action.xpath}]
      };

    }
    default:
      return state;
  }
};

export default dataSourceReducer;
