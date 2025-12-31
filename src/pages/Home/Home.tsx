import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import "../../styles/home.scss";
import avatar from "../../assets/home-avatar.svg";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <section className="intro-info">
        <div className="box1">
          <div className="headlines-div">
            <div className="h2-div">
              <h2>Movies</h2>
              <h2>Series</h2>
            </div>
            <p>Frontend skin for your Jellyfin backend</p>
          </div>
          <div className="intro-info-buttons">
            <Button
              onClick={() => navigate("/apply")}
              variant="secondary"
              className="get-started-btn"
            >
              Get Started
            </Button>
            <Button
              onClick={() => navigate("/read-more")}
              variant="default-blue"
              className="read-more-btn"
            >
              Read More
            </Button>
          </div>
        </div>
        <div className="box2">
          <img src={avatar} alt="avatar" className="home-avatar" />
        </div>
      </section>
      <section className="trusted-by-companies"></section>
      <section className="why-nimbus"></section>
      <section className="hero-section"></section>
    </div>
  );
}
