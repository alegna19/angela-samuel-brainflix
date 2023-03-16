import imageUpload from "../../assets/images/Upload-video-preview.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Upload.scss";
import Modal from "../Modal/Modal";
import axios from "axios";

const Upload = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(formSubmitHandler);
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/videos`, {
      title: title,
      description: description,
    });
    setModalOpen(true);
  };

  return (
    <div className="wrapper">
      <div className="upload">
        <section>
          <h2 className="upload__title">Upload Video</h2>
          <div className="upload__container">
            <div className="upload__image">
              <h3 className="upload__title-video">VIDEO THUMBNAIL</h3>
              <img className="upload__img" src={imageUpload} alt="upload" />
            </div>
            <form className="form-upload" onSubmit={formSubmitHandler}>
              <div className="form-upload__video">
                <label className="form-upload__title">TITLE YOUR VIDEO</label>
              </div>
              <input
                className="form-upload__input"
                type="text"
                id="title"
                name="title"
                placeholder="Add a title to your video"
                onChange={(e) => setTitle(e.target.value)}
              />

              <div className="form-upload__description">
                <label className="form-upload__title" name="description">
                  ADD A VIDEO DESCRIPTION
                </label>
                <textarea
                  className="form-upload__add"
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Add a description to your video"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="form-upload__container">
                <div>
                  <button
                    className="form-upload__btn form-upload__publish"
                    type="submit"
                  >
                    PUBLISH
                  </button>
                  {modalOpen && <Modal setModalOpen={setModalOpen} />}
                </div>
                <Link>
                  <p className="form-upload__cancel">CANCEL</p>
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Upload;
