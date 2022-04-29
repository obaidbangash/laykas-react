import React from 'react';
import LandingPage from './pages/LandingPage';
import Summary from './pages/SummaryPage';
import AboutUs from './pages/AboutUs';
import "./App.css";
import FaqPage from './pages/FaqPage';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { light } from "./theme";
import { ThemeProvider } from "@material-ui/core";
function App() {

  return (
    <>

      <ThemeProvider theme={light}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/faq" element={<FaqPage />} />
            <Route exact path="/summary" element={<Summary />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
