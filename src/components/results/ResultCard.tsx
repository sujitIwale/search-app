import { DataType } from "../../utils/ApiRequests";

type ResultCardProps = {
  result: DataType;
  query: string;
};

const ResultCard = ({ result, query }: ResultCardProps) => {
  return (
    <div className="result-card">
      <div className="result-card-item">
        <img src={result.avatar_url} alt="" loading="lazy" />
        <div className="result-card-details">
          <h2>{result.login}</h2>
          <a href={result.html_url} target="_blank" rel="noreferrer">
            Go to Profile
          </a>
        </div>
      </div>
      <div className="result-card-item item2">
        <h4>Id</h4>
        <h4>{result?.id}</h4>
      </div>
    </div>
  );
};

export default ResultCard;
