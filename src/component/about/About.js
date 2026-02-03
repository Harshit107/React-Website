import AboutImage from "../../Image/about-img-transparent.png";
import Button from "../UI/Button";
import TextWritter from "../UI/TextWritter";
import "./About.css";

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
            <br />I am Harshit Keshari, currently working as a Software
            Developer at{" "}
            <a href="https://www.cornerstoneondemand.com/" target="blank">
              <span className="link-color">Cornerstone OnDemand </span>
            </a>
            and I have a Bachelor's degree in Computer Science from the
            University Of Engineering and Management Jaipur.
            <br />
            I'm a Full-Stack Developer with 3+ years of experience building
            scalable, high-performance web applications using React, TypeScript,
            Node.js, Express, and GraphQL. Strong focus on frontend performance
            optimization, accessibility (WCAG/Section 508), and clean UI
            architecture. Experienced in designing API-driven systems,
            integrating REST and GraphQL services, and working with PostgreSQL,
            MongoDB, and Firebase. Proven track record of improving UI
            responsiveness, data throughput, and developer productivity through
            reusable components, internal tooling, and structured logging.
            Comfortable working across the full SDLC in fast-paced product
            teams.
          </p>
          <Button
            clickValue={
              "https://drive.google.com/file/d/1Cs2Ak0mgI7Ae5zXXlBuTkcqSzY2XB6mi/view"
            }
          >
            View Resume
          </Button>
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
