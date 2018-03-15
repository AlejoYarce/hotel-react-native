const initialState = {
  hotels: [],
  fullHotelsList: [],
  isLoading: false,
  inputSearch: '',
  noHotelsMessage: '',
  selectedHotel: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.value,
      };
    case 'SET_HOTELS_LIST':
      return {
        ...state,
        hotels: action.data,
      };
    case 'SET_FULL_HOTELS_LIST':
      return {
        ...state,
        fullHotelsList: action.data,
      };
    case 'SET_SEARCH_INPUT':
      return {
        ...state,
        inputSearch: action.value,
      };
    case 'SET_NO_HOTELS_MESSAGE':
      return {
        ...state,
        noHotelsMessage: action.message,
      };
    case 'SET_SELECTED_HOTEL':
      return {
        ...state,
        selectedHotel: action.hotel,
      };
  }
  return state;
};

export default reducer;
