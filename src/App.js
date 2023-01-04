import "./App.css";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widget from "./Components/Widget";

function App() {
  return (
    <div className="app">
      <h1>twitter clone</h1>

      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

export default App;
