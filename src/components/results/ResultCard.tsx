type ResultCardProps = {
  result: { author: string; download_url: string };
  query: string;
};

const ResultCard = ({ result, query }: ResultCardProps) => {
  return (
    <div className="result-card">
      <img src={result.download_url} alt="" loading="lazy" />
      <div className="result-card-details">
        <h2>{result?.author}</h2>
        <p>query: {query}</p>
      </div>
    </div>
  );
};

export default ResultCard;