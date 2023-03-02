import Comments from "../Comments/Comments";
import formImg from "../../assets/images/Mohan-muruge.jpg";
import("./FormComment.scss");

const FormComment = ({ formData, activeVideoId }) => {
  const activeVideo = formData.find((data) => data.id === activeVideoId);

  return (
    <>
      <section>
        <div className="wrapper">
          <form className="form">
            <h3 className="form__title">Join the Conversation</h3>
            <div className="form__info">
              <div className="form__comment-error"></div>
              <img className="form__image" src={formImg} alt="representative" />
              <div className="form__input">
                <label className="form__label" name="comment">
                  COMMENT
                </label>
                <textarea
                  className="form__comment"
                  type="text"
                  name="comment"
                  placeholder="Add a new comment"
                ></textarea>
              </div>
            </div>
            <div className="form__error-comment">
              <p id="form__error" className="form__error"></p>
            </div>
            <div className="form__btn">
              <button id="submitBtn" className="form__button" type="submit">
                COMMENT
              </button>
            </div>
            <div className="comments"></div>
          </form>
        </div>
      </section>
      <Comments comments={activeVideo} />
    </>
  );
};

export default FormComment;
