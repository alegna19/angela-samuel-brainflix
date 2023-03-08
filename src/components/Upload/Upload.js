import imageUpload from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import "./Upload.scss";

const Upload = () => {
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
                <label className="form__title" name="video">
                  TITLE YOUR VIDEO
                </label>
              </div>
              <input
                className="form__input-video"
                type="text"
                name="video"
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

              <div className="form__btn-upload">
                <button
                  id="submitBtn"
                  className="form__btn-video"
                  type="submit"
                >
                  COMMENT
                  <img
                    src={publishIcon}
                    alt="publish icon"
                    className="form__publish"
                  />
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Upload;
