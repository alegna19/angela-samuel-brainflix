import { useState } from "react";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import videoDataDetails from "./data/video-details.json";
import "./styles/main.scss";

const App = () => {
  let [dataDetails, setDataDetails] = useState(videoDataDetails);

  return (
    <div className="App">
      <Header />
      <Video dataVideo={dataDetails} />
    </div>
  );
};

export default App;
