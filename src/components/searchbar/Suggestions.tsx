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
            <li style={{ fontSize: "18px", marginBottom: "4px" }}>
              Recent Searches
            </li>
            {SearchKeywords.map((keyword, ind) => (
              <li
                key={ind}
                className="list-item"
                onClick={() => {
                  updateInput(keyword);
                  getData(keyword);
                  setShowSuggestion(false);
                }}
              >
                <img
                  style={{ marginTop: "5px" }}
                  alt="clock"
                  src="https://img.icons8.com/ios/14/000000/time-machine.png"
                />
                <p>{keyword}</p>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
};

export default Suggestions;
