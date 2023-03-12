import { useNavigate } from "react-router-dom";
import "./Modal.scss";

const Modal = ({ setModalOpen }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="modal">
      <div className="modal__container">
        <p className="modal__title">Video Uploaded Successfully 👌</p>
        <button className="modal__btn" onClick={handleClick}>
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Modal;
