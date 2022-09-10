import "./App.css";
import Header from "./components/header/Header";
import SearchSection from "./components/searchsection/SearchSection";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="base-layout">
        <SearchSection />
      </main>
    </div>
  );
}

export default App;
