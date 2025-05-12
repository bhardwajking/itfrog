import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AnalysesPage from "./pages/AnalysesPage";
import NewAnalysisPage from "./pages/NewAnalysisPage";
import ViewAnalysisPage from "./pages/ViewAnalysisPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analyses" element={<AnalysesPage />} />
          <Route path="/new-analysis" element={<NewAnalysisPage />} />
          <Route path="/view-analysis/:id" element={<ViewAnalysisPage />} />
          <Route path="/edit-analysis/:id" element={<NewAnalysisPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;