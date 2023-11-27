import './App.css';
import {Route, Routes} from "react-router-dom";
import LoginComponent from "./component/LoginComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/login"} element={<LoginComponent/>}/>
      </Routes>

    </div>
  );
}

export default App;
