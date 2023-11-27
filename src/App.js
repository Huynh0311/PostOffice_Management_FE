import './App.css';
import {Route, Routes} from "react-router-dom";
import LoginComponent from "./component/login-register/LoginComponent";
import * as PropTypes from "prop-types";
import 'react-toastify/dist/ReactToastify.css';
import PostOfficeComponent from "./component/postOfficeManagement/PostOfficeComponent";


function ToastContainer(props) {
    return null;
}

ToastContainer.propTypes = {
    newestOnTop: PropTypes.bool,
    pauseOnFocusLoss: PropTypes.bool,
    draggable: PropTypes.bool,
    pauseOnHover: PropTypes.bool,
    theme: PropTypes.string,
    position: PropTypes.string,
    rtl: PropTypes.bool,
    autoClose: PropTypes.number,
    hideProgressBar: PropTypes.bool,
    closeOnClick: PropTypes.bool
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/login"} element={<LoginComponent/>}/>
        <Route path={"/register"} element={<LoginComponent/>}/>
        <Route path={"/home"} element={<PostOfficeComponent/>}/>
      </Routes>

        <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </div>
  );
}

export default App;
