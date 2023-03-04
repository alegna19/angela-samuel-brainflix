import "./Header.scss";
import imageLogo from "../../assets/logo/BrainFlix-logo.svg";
import heatherImg from "../../assets/images/Mohan-muruge.jpg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";

const Header = () => {
  return (
    <div className="heather">
      <div className="wrapper">
        <div className="heather__container">
          <img src={imageLogo} alt="logo" className="heather__logo" />
          <div className="heather__search">
            <input
              type="text"
              name="search"
              className="heather__text"
              placeholder="Search"
            />
            <img
              src={searchIcon}
              alt="search icon"
              className="heather__search-icon"
            />
            <img src={heatherImg} alt="heather" className="heather__image" />
            <button className="heather__btn">
              UPLOAD
              <img
                src={uploadIcon}
                alt="upload icon"
                className="heather__upload"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
