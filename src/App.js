import "./App.css";
import SlideBanner from "./components/banner/SlideBanner";
import PolicyCategory from "./components/policies/PolicyCategory";
import SearchBar from "./components/search/SearchBar";

function App() {
  return (
    <div className="App">
      <SlideBanner />
      <PolicyCategory />
      <SearchBar />
    </div>
  );
}

export default App;
