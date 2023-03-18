import Comments from "../Comments/Comments";
import formImg from "../../assets/images/Mohan-muruge.jpg";
import "./FormComment.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const FormComment = ({ mainVideo }) => {
  const [comment, setComment] = useState("");
  const [postComment, setPostComment] = useState([]);
  const countComments = mainVideo.comments.length + postComment.length;
  const [error, setError] = useState("");

  //Reset the postComment when the mainVideo changes.
  useEffect(() => {
    setPostComment([]);
  }, [mainVideo]);

  const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/videos/${mainVideo.id}/comments`;

  const submitComment = async () => {
    try {
      const newPostComment = await axios.post(apiUrl, {
        name: "James Hetfield",
        comment: comment,
      });

      //Add new comment to the postComment state.
      setPostComment([...postComment, newPostComment.data]);
      setComment("");
    } catch (error) {
      setPostComment([]);
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
                  value={comment}
                  type="text"
                  name="comment"
                  placeholder="Add a new comment"
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="form__btn ">
              <button className="form__button form__add-comment">
                COMMENT
              </button>
            </div>
            <div className="comments"></div>
          </form>
        </div>
        {error && <p>{error}</p>}
      </section>
      {postComment && (
        <Comments comments={mainVideo.comments.concat(postComment)} />
      )}
    </>
  );
};

export default FormComment;
