import { DataType } from "../../utils/ApiRequests";

type ResultCardProps = {
  result: DataType;
  query: string;
};

const ResultCard = ({ result, query }: ResultCardProps) => {
  return (
    <div className="result-card">
      <div className="result-card-item">
        <img
          src="https://assets.smallcase.com/images/smallcases/200/SCAW_0001.png"
          alt=""
          loading="lazy"
        />
        <div className="result-card-details">
          <h2>Query: {query}</h2>
          <p>by {result?.author}</p>
        </div>
      </div>
      <div className="result-card-item item2">
        <div>
          <h4>Width</h4>
          <h4>{result?.width}</h4>
        </div>
        <div>
          <h4>Height</h4>
          <h4>{result?.height}</h4>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
