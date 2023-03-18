import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Upload from "./pages/Upload/Upload";
import Home from "./pages/Home";

import "./styles/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/videos/:videoId" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
