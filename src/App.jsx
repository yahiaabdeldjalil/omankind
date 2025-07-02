import Home from "./components/Home";
import Begin from "./components/Begin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LanguageProvider  from "./components/LanguageProvider";
import More from "./components/More";

export default function App() {
  return (
    <LanguageProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/begin" element={<Begin />} />
        <Route exact path="/more" element={<More />} />
      </Routes>
    </Router>
    </LanguageProvider>
  )
}