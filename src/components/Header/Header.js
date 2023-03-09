import "./Header.scss";
import imageLogo from "../../assets/logo/BrainFlix-logo.svg";
import heatherImg from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="heather">
      <div className="wrapper">
        <div className="heather__container">
          <Link to={"/"} className="heather__logo">
            <img className="heather__img" src={imageLogo} alt="logo" />
          </Link>
          <div className="heather__search">
            <input
              type="text"
              name="search"
              className="heather__text heather__search-icon"
              placeholder="Search"
            />
            <img src={heatherImg} alt="heather" className="heather__image" />
            <Link to={"/../upload"} className="heather__btn heather__upload">
              UPLOAD
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
