import "./About.css";
import TextWritter from "../UI/TextWritter";
import AboutImage from "../../Image/about-img-transparent.png";
import Button from "../UI/Button";

const About = (props) => {
  return (
    <div className="about__container">
      <div className="about__container_text">
        <div className="about__text_container_heading">
          <b>
            Hello, My name is{" "}
            <span className="special__text">Harshit Keshari</span>
          </b>
        </div>
        <div className="about__text_container_typer">
          <b>
            <TextWritter />
          </b>
        </div>
        <div className="about__text_container_bio">
          <p>
            <i>Greetings, </i>
            <br />I am Harshit Keshari, currently working as a Jr Software
            Developer at{" "}
            <a href="https://www.hexagon.com/" target="blank">
              <span className="link-color">Hexagon(HMI) </span>
            </a>
            and I have a Bachelor's degree in Computer Science from the
            University Of Engineering and Management Jaipur.
            <br />
            I'm a self-taught developer with a passion for building innovative
            apps and websites. As a
            full-stack developer, I enjoy working on every aspect of a project,
            from front-end design to back-end functionality.
            I'm dedicated to staying up-to-date with the latest technologies and
            trends, and I believe that learning is a lifelong process.
          </p>
          <Button>View Resume</Button>
        </div>
      </div>
      <div className="about__container_image">
        <div className="about__image_container">
          <div className="about__image_container_top-left"></div>
          <img src={AboutImage} alt="" className="about__image_container_img" />
          <div className="about__image_container_bottom-right"></div>
        </div>
      </div>
    </div>
  );
};
export default About;
