import imageUpload from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import { useNavigate, Link } from "react-router-dom";
import "./Upload.scss";

const Upload = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    alert("Video uploaded successfully");
    navigate("/");
  };

  return (
    <div className="wrapper">
      <div className="upload">
        <h2 className="upload__title">Upload Video</h2>
        <section>
          <div>
            <h3 className="upload__title-video">VIDEO THUMBNAIL</h3>
            <img className="upload__img" src={imageUpload} alt="upload" />
          </div>
          <div>
            <form className="form">
              <div className="form__video">
                <label className="form__title">TITLE YOUR VIDEO</label>
              </div>
              <input
                className="form__input-video"
                type="text"
                name="title"
                placeholder="Add a title to your video"
              />

              <div className="form__description">
                <label className="form__title" name="description">
                  ADD A VIDEO DESCRIPTION
                </label>
                <textarea
                  className="form__add-description"
                  type="text"
                  name="description"
                  placeholder="Add a description to your video"
                ></textarea>
              </div>

              <div>
                <button
                  id="submitBtn"
                  className="form__btn-video"
                  type="submit"
                  onClick={handleClick}
                >
                  PUBLISH
                  <img
                    src={publishIcon}
                    alt="publish icon"
                    className="form__publish"
                  />
                </button>
              </div>
              <Link>
                <p className="form__cancel">CANCEL</p>
              </Link>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Upload;
