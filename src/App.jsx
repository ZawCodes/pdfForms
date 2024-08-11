// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MayBank from "@pages/MayBank";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MayBank />} />
      </Routes>
    </Router>
  );
}

export default App;
