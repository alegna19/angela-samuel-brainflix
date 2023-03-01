import "./Video.scss";
import DescriptionVideo from "../DescriptionVideo/DescriptionVideo";

const Video = (props) => {
  return (
    <div>
      <main>
        {props.dataVideo.map((data) => {
          if (data.id === "84e96018-4022-434e-80bf-000ce4cd12b8") {
            return (
              <>
                <video
                  key={data.id}
                  className="video"
                  src={data.image}
                  controls
                  width="100%"
                  height="100%"
                ></video>
                <DescriptionVideo description={data} />
              </>
            );
          }
        })}
      </main>
    </div>
  );
};

export default Video;
