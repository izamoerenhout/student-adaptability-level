import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Template from "./pages/_shared/template";

// Error handeling
import PageNotFound from "./pages/_errors/page-not-found";

// Pages
import Home from "./pages/home";
import Predict from "./pages/prediction/predict";
import About from "./pages/about";

function App() {
  return (
    <>
      <Router>
        <Template>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/predict" element={<Predict />} />
            <Route exact path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Template>
      </Router>
    </>
  );
}

export default App;
