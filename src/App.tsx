import "./App.css";
import Header from "./components/header/Header";
import SearchResults from "./components/results/Results";
import SearchSection from "./components/searchsection/SearchSection";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-container">
        <SearchSection />
        {/* <SearchResults /> */}
      </main>
    </div>
  );
}

export default App;
