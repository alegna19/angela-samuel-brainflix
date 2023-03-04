import { useState } from "react";
import DescriptionVideo from "./components/DescriptionVideo/DescriptionVideo";
import FormComment from "./components/FormComment/FormComment";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import NextVideos from "./components/NextVideos/NextVideos";
import videoDataDetails from "./data/video-details.json";
import "./styles/main.scss";

const App = () => {
  const [dataDetails, setDataDetails] = useState(videoDataDetails);
  const [activeVideoId, setActiveVideoId] = useState(videoDataDetails[0].id);
  console.log(activeVideoId);

  // A function, that when clicked, it should update the ACTIVE VIDEO
  const handleClick = (id) => {
    setActiveVideoId(id);
  };

  return (
    <div className="App">
      <Header />
      <Hero hero={dataDetails} activeVideoId={activeVideoId} />
      <div className="row">
        <div>
          <DescriptionVideo
            videos={dataDetails}
            activeVideoId={activeVideoId}
          />
          <FormComment formData={dataDetails} activeVideoId={activeVideoId} />
        </div>
        <NextVideos
          dataVideos={dataDetails}
          handleClick={handleClick}
          activeVideoId={activeVideoId}
        />
      </div>
    </div>
  );
};

export default App;
