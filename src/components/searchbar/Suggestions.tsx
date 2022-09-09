type SuggestionProps = {
  SearchKeywords: [];
  ShowSuggestion: boolean;
  getData: (query: string) => void;
  setShowSuggestion: (state: boolean) => void;
};

const updateInput = (val: string) => {
  const inputElement = window.document.querySelector("input");
  if (inputElement) {
    inputElement.value = val;
  }
};

const Suggestions = ({
  SearchKeywords,
  ShowSuggestion,
  getData,
  setShowSuggestion,
}: SuggestionProps) => {
  return (
    <div className={`suggestion ${ShowSuggestion ? "" : "hidden"}`}>
      <h4>Type Atleast 3 Characters</h4>
      {SearchKeywords &&
        Array.isArray(SearchKeywords) &&
        SearchKeywords.length > 0 && (
          <ul className="last-searches-list">
            <li>Recent Searches</li>
            {SearchKeywords.map((keyword, ind) => (
              <li
                key={ind}
                className="tab-item"
                onClick={() => {
                  updateInput(keyword);
                  getData(keyword);
                  setShowSuggestion(false);
                }}
              >
                {keyword}
              </li>
            ))}
          </ul>
        )}
    </div>
  );
};

export default Suggestions;
