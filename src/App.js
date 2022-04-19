import React from 'react';
import LandingPage1 from './pages/LandingPage1';
import AboutUs from './pages/AboutUs';
import "./App.css";
import FaqPage from './pages/FaqPage';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { light } from "./theme";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
function App() {

  return (
    <>

      <ThemeProvider theme={light}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage1 />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/faq" element={<FaqPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
