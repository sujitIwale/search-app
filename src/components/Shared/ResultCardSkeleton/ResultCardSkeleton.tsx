import "./ResultCardSkeleton.css";

const ResultCardSkeleton = () => {
  return (
    <div className="lazy-result-card">
      <div className="lazy-result-card-img "></div>
      <div className="lazy-result-card-details">
        <div className="lazy-result-card-text"></div>
        <div className="lazy-result-card-text"></div>
      </div>
    </div>
  );
};

export default ResultCardSkeleton;
