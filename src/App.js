import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Pages/Homepage";
import Checkin from "./Components/Pages/Checkin";
import Inflight from "./Components/Pages/Inflight";
import Dashboard from "./Components/Pages/Dashboard";
import Login from "./Components/Pages/Login";
import Header from "./Components/utils/Header";
import Footer from "./Components/utils/Footer";

// Create context object
export const AppContext = React.createContext();
const initialState = {
  flight:
    localStorage.getItem("flight") === null
      ? ""
      : localStorage.getItem("flight"),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FLIGHT":
      return {
        flight: action.data,
      };
    default:
      return initialState;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />

          <Route path="/checkin" element={<Checkin />} />

          <Route path="/inflight" element={<Inflight />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/signin" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
};

export default App;
