import {
  SET_CURRENT_PAGE,
  SET_CURRENT_QUERY,
  SET_ERROR,
  SET_LOADING,
  SET_SEARCH_DATA,
} from "./types";

type SearchState = {
  searchData: [];
  currentPage: { number: number; noMorePage: boolean };
  currentQuery: string;
  Loading: {
    state: boolean;
    type: string;
  };
  error: any;
};

const SearchReducer = (
  state: SearchState,
  action: { type: string; payload?: any }
) => {
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
        Loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        Loading: { state: false, type: "none" },
        searchData: [],
      };
    default:
      return state;
  }
};

export default SearchReducer;
