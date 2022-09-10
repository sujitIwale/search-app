import { useCallback, useReducer } from "react";
import SearchBar from "../searchbar/SearchBar";
import SearchResults from "../results/Results";
import "./SearchSection.css";
import { getRequest, GetRequestReturnType } from "../../utils/ApiRequests";
import Tabs from "../Shared/tabs/Tabs";
import Loader from "../Shared/loader/Loader";
import SearchReducer from "../../reducers/SearchReducer";
import {
  SET_CURRENT_PAGE,
  SET_CURRENT_QUERY,
  SET_ERROR,
  SET_LOADING,
  SET_SEARCH_DATA,
} from "../../reducers/types";

const initialValue = {
  searchData: [],
  currentPage: 1,
  currentQuery: "",
  Loading: {
    state: false,
    type: "none",
  },
  error: null,
};

const SearchSection = () => {
  const [state, dispatch] = useReducer(SearchReducer, initialValue);

  const getData = useCallback(async (query: string) => {
    if (query.length < 3) return;
    dispatch({ type: SET_LOADING, payload: { state: true, type: "get" } });
    const res = await getRequest(query, 1);
    dispatch({ type: SET_LOADING, payload: { type: "none", state: false } });
    const inputElement = window.document.querySelector("input");
    if (!res.ok) {
      dispatch({ type: SET_ERROR, payload: "something went wrong" });
      return;
    }
    if (res.query !== inputElement?.value) return;
    dispatch({ type: SET_CURRENT_QUERY, payload: res.query });
    dispatch({ type: SET_SEARCH_DATA, payload: res.data });
  }, []);

  const loadMore = useCallback(async () => {
    dispatch({ type: SET_LOADING, payload: { state: true, type: "load" } });
    const res: GetRequestReturnType = await getRequest(
      state.currentQuery,
      state.currentPage + 1
    );
    dispatch({ type: SET_LOADING, payload: { type: "none", state: false } });

    if (!res.ok) {
      dispatch({ type: SET_ERROR, payload: "something went wrong" });
      return;
    }
    let newData: any[] = [...state.searchData, ...res.data];
    dispatch({ type: SET_CURRENT_PAGE });
    dispatch({ type: SET_SEARCH_DATA, payload: newData });
  }, [state.currentPage, state.currentQuery, state.searchData]);
  return (
    <>
      <section className="search-section">
        <Tabs categories={["Collections", "All Smallcases", "Managers"]} />
        <SearchBar getData={getData} />
      </section>
      {state.currentQuery && (
        <h3 className="search-details">
          Showing {state.searchData.length} Results for {state.currentQuery}
        </h3>
      )}
      <SearchResults
        searchData={state.searchData}
        query={state.currentQuery}
        Loading={state.Loading}
      />
      {state.searchData.length > 0 ? (
        <div className="load-more">
          <button className="btn load-btn" onClick={() => loadMore()}>
            Load More
            {state.Loading.state && <Loader />}
          </button>
        </div>
      ) : (
        <div className="load-more">
          <button className={`btn ${state.error ? "error" : ""}`}>
            {state.error && state.error} No reuslts , try searching
            something....
          </button>
        </div>
      )}
    </>
  );
};

export default SearchSection;
