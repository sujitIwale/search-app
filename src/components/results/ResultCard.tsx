type ResultCardProps = {
  result: { author: string; download_url: string };
};

const ResultCard = ({ result }: ResultCardProps) => {
  return (
    <div className="result-card">
      <img src={result.download_url} alt="logo" />
      <h2>{result?.author}</h2>
    </div>
  );
};

export default ResultCard;
