import "./ResultCardSkeleton.css";

const ResultCardSkeleton = () => {
  return (
    <div className="lazy-result-card">
      <div className="lazy-result-card-img "></div>
      <div className="lazy-result-card-details">
        <div className="lazy-result-card-header line"></div>
        <div className="lazy-result-card-para line"></div>
      </div>
    </div>
  );
};

export default ResultCardSkeleton;
