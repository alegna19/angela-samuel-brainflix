import "./Header.scss";
import imageLogo from "../../assets/logo/BrainFlix-logo.svg";
import headerImg from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header__container">
          <Link to={"/"} className="header__logo">
            <img className="header__img" src={imageLogo} alt="logo" />
          </Link>
          <div className="header__search">
            <input
              type="text"
              name="search"
              className="header__text header__search-icon"
              placeholder="Search"
            />
            <img src={headerImg} alt="header" className="header__image" />
            <Link to={"/../upload"} className="header__btn header__upload">
              UPLOAD
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
