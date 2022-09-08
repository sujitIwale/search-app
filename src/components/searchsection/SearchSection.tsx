import { useCallback, useState } from "react";
import SearchBar from "../searchbar/SearchBar";
import SearchResults from "../results/Results";
import "./SearchSection.css";
import { getRequest } from "../../utils/ApiRequests";
import Tabs from "../Shared/tabs/Tabs";

const SearchSection = () => {
  const [SearchData, setSearchData] = useState<[]>([]);
  const getData = useCallback(async (query: string) => {
    console.log(query);
    const page = Math.floor(Math.random() * 10);
    const res = await getRequest(query, page);
    if (!res.ok) return;
    setSearchData(res.data);
  }, []);

  const loadMore = async () => {
    const page = Math.floor(Math.random() * 10);
    const res: { ok: boolean; data: [] } = await getRequest("", page);
    if (!res.ok) return;
    let newData: [] = [...SearchData, ...res.data];
    setSearchData(newData);
  };
  return (
    <>
      <section className="search-section">
        <Tabs categories={["Collections", "All Smallcases", "Managers"]} />
        <SearchBar getData={getData} />
      </section>
      <SearchResults searchData={SearchData} />
      <div className="load-more">
        <button className="btn" onClick={() => loadMore()}>
          Load More
        </button>
      </div>
    </>
  );
};

export default SearchSection;
