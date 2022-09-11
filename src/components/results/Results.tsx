import "./Results.css";
import ResultCard from "./ResultCard";
import ResultCardSkeleton from "../Shared/ResultCardSkeleton/ResultCardSkeleton";
import { DataType } from "../../utils/ApiRequests";

type SearchResultsProps = {
  searchData: DataType[];
  query: string;
  Loading: { state: boolean; type: string };
};

const SearchResults = ({ searchData, query, Loading }: SearchResultsProps) => {
  return (
    <section className="search-results-container">
      {Loading.type !== "get" &&
        searchData.map((result, ind) => (
          <ResultCard result={result} key={ind} query={query} />
        ))}
      {Loading.state && (
        <>
          {Array(5)
            .fill(null)
            .map((item, ind) => (
              <ResultCardSkeleton key={ind} />
            ))}
        </>
      )}
    </section>
  );
};

export default SearchResults;
