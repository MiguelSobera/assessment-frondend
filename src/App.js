import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateComponent from "./components/CreateComponent";
import ShowComponent from "./components/ShowComponent";

function App() {
  return (
    <Routes>
      <Route path="/create" element={<CreateComponent />}></Route>
      <Route path="/" element={<ShowComponent />}></Route>
    </Routes>
  );
}

export default App;
