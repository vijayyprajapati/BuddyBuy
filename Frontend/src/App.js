import {Routes,Route,Navigate} from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import './App.css';

function App() {
  const user = localStorage.getItem("token");
  return (
    <>
     <Routes>
     {user && <Route path="/" exact element={<Home />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
     </Routes>
    </>
  );
}

export default App;
