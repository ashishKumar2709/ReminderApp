import "./App.css";
import Home from "./Pages/Home.js";
import Header from "./components/Header";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  console.log(JSON.parse(localStorage.getItem("profile")))
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/user/register" exact element={<Register />}></Route>
          <Route path="/user/login" exact element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
