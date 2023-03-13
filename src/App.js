import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Products from "./componentes/Products"
import CheckoutPage from "./componentes/CheckoutPage";
import SignIn from "./componentes/SignIn";
import SignUp from "./componentes/SignUp";
import { useEffect } from 'react';
import { actionTypes } from './reducer';
import { useStateValue } from "../src/StateProvider"
import { auth } from "../src/firebase";
import { onAuthStateChanged } from 'firebase/auth'

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar/>

        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/checkout-page" element={<CheckoutPage/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    </Router>
)
}

export default App;


