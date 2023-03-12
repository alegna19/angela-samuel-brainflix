import Comments from "../Comments/Comments";
import formImg from "../../assets/images/Mohan-muruge.jpg";
import "./FormComment.scss";
import { useState } from "react";
import axios from "axios";

const FormComment = ({ mainVideo }) => {
  const countComments = mainVideo.comments.length;
  const [comment, setComment] = useState([]);
  const [error, setError] = useState("");

  const apiKey = `25911480-9d159f35-9bd5-43e4-a38a-2deb25ece1c0`;
  const apiUrl = `https://project-2-api.herokuapp.com/videos/${mainVideo.id}/comments?api_key=${apiKey}`;

  const submitComment = async () => {
    try {
      const newComment = await axios.post(apiUrl, {
        name: "James Hetfield",
        comment: comment,
      });

      setComment(newComment);
    } catch (error) {
      setComment([]);
      setError(error.message);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    submitComment();
  };

  return (
    <>
      <section>
        <div className="wrapper">
          <p className="form__count">{countComments} Comments</p>
          <form className="form" onSubmit={submitHandler}>
            <div className="form__info ">
              <img className="form__image" src={formImg} alt="representative" />
              <div className="form__input">
                <label className="form__label" name="comment">
                  JOIN THE CONVERSATION
                </label>
                <textarea
                  className="form__comment"
                  type="text"
                  name="comment"
                  placeholder="Add a new comment"
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="form__btn ">
              <button
                id="submitBtn"
                className="form__button form__add-comment"
                type="submit"
              >
                COMMENT
              </button>
            </div>
            <div className="comments"></div>
          </form>
        </div>
        {error && <p>{error}</p>}
      </section>
      <Comments comments={mainVideo.comments} />
    </>
  );
};

export default FormComment;
