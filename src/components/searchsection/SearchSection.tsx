import { useCallback, useState } from "react";
import SearchBar from "../searchbar/SearchBar";
import SearchResults from "../results/Results";
import "./SearchSection.css";
import { getRequest, GetRequestReturnType } from "../../utils/ApiRequests";
import Tabs from "../Shared/tabs/Tabs";
import Loader from "../Shared/loader/Loader";

const SearchSection = () => {
  const [SearchData, setSearchData] = useState<[]>([]);
  const [CurrentPage, setCurrentPage] = useState<number>(1);
  const [CurrentQuery, setCurrentQuery] = useState<string>("");
  const [Loading, setLoading] = useState<{ state: boolean; type: string }>({
    state: false,
    type: "none",
  });

  const getData = useCallback(async (query: string) => {
    setLoading({ state: true, type: "get" });
    const res = await getRequest(query, 1);
    setLoading({ type: "none", state: false });
    const inputElement = window.document.querySelector("input");
    if (!res.ok || res.query !== inputElement?.value) return;
    setCurrentQuery(res.query);
    setSearchData(res.data);
  }, []);

  const loadMore = async () => {
    setLoading({ state: true, type: "load" });
    const res: GetRequestReturnType = await getRequest(
      CurrentQuery,
      CurrentPage + 1
    );
    setLoading({ type: "none", state: false });
    if (!res.ok) return;
    let newData: [] = [...SearchData, ...res.data];
    setCurrentPage((prev) => prev + 1);
    setSearchData(newData);
  };
  return (
    <>
      <section className="search-section">
        <Tabs categories={["Collections", "All Smallcases", "Managers"]} />
        <SearchBar getData={getData} />
      </section>
      {CurrentQuery && (
        <h3 className="search-details">
          Showing {SearchData.length} Results for {CurrentQuery}
        </h3>
      )}
      <SearchResults
        searchData={SearchData}
        query={CurrentQuery}
        Loading={Loading}
      />
      {SearchData.length > 0 ? (
        <div className="load-more">
          <button className="btn load-btn" onClick={() => loadMore()}>
            Load More
            {Loading.state && <Loader />}
          </button>
        </div>
      ) : (
        <div className="load-more">
          <button className="btn">
            No reuslts found try searching something ....
          </button>
        </div>
      )}
    </>
  );
};

export default SearchSection;
