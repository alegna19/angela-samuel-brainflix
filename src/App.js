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
  // State: activeVideo (object, id)
  const [activeVideoId, setActiveVideoId] = useState(videoDataDetails[0].id);

  // A function, that when clicked, it should update the ACTIVE VIDEO
  const handleClick = (id) => {
    setActiveVideoId(id);
  };

  return (
    <div className="App">
      <Header />
      <Hero hero={dataDetails} activeVideoId={activeVideoId} />
      <DescriptionVideo videos={dataDetails} activeVideoId={activeVideoId} />
      <FormComment formData={dataDetails} activeVideoId={activeVideoId} />
      <NextVideos dataVideos={dataDetails} handleClick={handleClick} />
    </div>
  );
};

export default App;
