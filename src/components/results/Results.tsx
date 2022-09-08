import React from "react";
import "./Results.css";
import ResultCard from "./ResultCard";

const SearchResults = ({ searchData }: { searchData: [] }) => {
  console.log(searchData);
  return (
    <section className="search-results-container">
      {searchData.map((result, ind) => (
        <ResultCard result={result} key={ind} />
      ))}
    </section>
  );
};

export default SearchResults;
