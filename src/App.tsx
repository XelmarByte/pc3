import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Albums from "./components/Albums";
import NotFound from "./components/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-500 p-4 shadow-lg">
          <ul className="space-x-4 text-white container mx-auto flex justify-center gap-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/albums" className="hover:underline">Albums</Link></li>
          </ul>
        </nav>
        <div className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;