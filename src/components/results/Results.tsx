import "./Results.css";
import ResultCard from "./ResultCard";

type SearchResultsProps = {
  searchData: [];
  query: string;
};

const SearchResults = ({ searchData, query }: SearchResultsProps) => {
  return (
    <section className="search-results-container">
      {searchData.map((result, ind) => (
        <ResultCard result={result} key={ind} query={query} />
      ))}
    </section>
  );
};

export default SearchResults;
