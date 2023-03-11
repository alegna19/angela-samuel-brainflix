import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";
import axios from "axios";
import DescriptionVideo from "../components/DescriptionVideo/DescriptionVideo";
import FormComment from "../components/FormComment/FormComment";
import Hero from "../components/Hero/Hero";
import NextVideos from "../components/NextVideos/NextVideos";
import "../styles/main.scss";
import "../pages/Home.scss";

const Home = () => {
  const apiKey = `25911480-9d159f35-9bd5-43e4-a38a-2deb25ece1c0`;
  const apiUrl = `https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`;

  const [listVideos, setListVideos] = useState(null);
  const [mainVideo, setMainVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { videoId } = useParams();
  //Get all videos from the API
  const getVideos = async () => {
    const { data } = await axios.get(apiUrl);
    setListVideos(data);

    const validateData = () => {
      if (!videoId) {
        return data[0].id;
      } else {
        return videoId;
      }
    };

    //Get videos by ID
    const apiById = `https://project-2-api.herokuapp.com/videos/${validateData()}?api_key=${apiKey}`;
    const { data: singleVideo } = await axios.get(apiById);
    setMainVideo(singleVideo);
  };

  useEffect(() => {
    try {
      getVideos();
    } catch (err) {
      setError(err.message);
    }
  }, [videoId]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (!mainVideo || !listVideos) {
    return (
      <div className="loading">
        <h1>Loading ...</h1>
        <ClipLoader color={`#0095ff`} loading={loading} size={100} />
      </div>
    );
  }

  return (
    <div className="App">
      <Hero mainVideo={mainVideo} activeVideoId={mainVideo.id} />
      <div className="row">
        <div>
          <DescriptionVideo
            mainVideo={mainVideo}
            activeVideoId={mainVideo.id}
          />
          <FormComment mainVideo={mainVideo} />
        </div>
        <NextVideos listVideos={listVideos} activeVideoId={mainVideo.id} />
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Home;
