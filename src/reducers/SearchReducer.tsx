import {
  SET_CURRENT_PAGE,
  SET_CURRENT_QUERY,
  SET_LOADING,
  SET_SEARCH_DATA,
} from "./types";

const SearchReducer = (state: {}, action: { type: string; payload: any }) => {
  switch (action.type) {
    case SET_CURRENT_QUERY:
      return {
        ...state,
        currentQuery: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_SEARCH_DATA:
      return {
        ...state,
        searchData: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default SearchReducer;
