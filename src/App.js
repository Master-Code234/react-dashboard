import Reviews from "./components/Reviews.js";
import Ratings from "./components/Ratings.js";
import Analysis from "./components/Analysis.js";
import Sidebar from "./components/Sidebar.js";
import Visitors from "./components/Visitors.js";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Sidebar/>
      <Reviews />
      <Ratings />
      <Analysis />
      <Visitors />
      
    </div>
  );
}

export default App;
