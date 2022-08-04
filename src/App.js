import "./App.css";
import SlideBanner from "./components/banner/SlideBanner";
import PolicyCategory from "./components/policies/PolicyCategory";
import SearchBar from "./components/search/SearchBar";
import SearchResult from "./components/search/SearchResult";

function App() {
  return (
    <div className="App">
      <SlideBanner />
      <PolicyCategory />
      <SearchBar />
      <SearchResult date={3} />
      <SearchResult date={10} />
    </div>
  );
}

export default App;
