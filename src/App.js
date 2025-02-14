import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Alltasks from "./Components/Alltasks";
import Addform from "./Components/Addform";
import Editform from "./Components/Editform";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/edit-task/:id" element={<Editform />}></Route>
          <Route path="/add-task" element={<Addform />}></Route>
          <Route path="/task/:id" element={<Alltasks />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
