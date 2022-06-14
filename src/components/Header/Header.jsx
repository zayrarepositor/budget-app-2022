import logoImg from "./img/icons8-money-96.png";

const Header = ({ openAboutModal }) => {
  return (
    <div className="header">
      <div className="about-img">
        <figure>
          <img src={logoImg} alt="..." onClick={openAboutModal} />
          <div className="about-text">
            <h3>about the project</h3>
          </div>
        </figure>
      </div>
      <div className="header-title">
        <h1>Budget </h1>
        <h3>Log & Track your expenses </h3>
      </div>
      <div className="header-button">
        <button>Sign in/Log in</button>
      </div>
    </div>
  );
};

export default Header;
