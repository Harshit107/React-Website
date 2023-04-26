import "./About.css";
import TextWritter from "../UI/TextWritter";
import AboutImage from "../../Image/about-img-transparent.png";

const About = (props) => {
  return (
    <div className="about__container">
      <div className="about__container_main">
        <div>
          Hello, My name is <span>Harshit Keshari</span>
        </div>
        <TextWritter />
        <div>
          <p>
            Greetings, I am Harshit Keshari, currently working as a Jr Software
            Developer at Hexagon Manufacturing Intelligence. I have a Bachelor's
            degree in Computer Science from the University Of Engineering and
            Management Jaipur, and I'm a self-taught developer with a passion
            for building innovative apps and websites.I have developed skills in
            Java, JavaScript, React, Android, and NodeJS through personal
            projects, and I have a keen interest in developing new, unique apps
            and websites. As a full-stack developer, I enjoy working on every
            aspect of a project, from front-end design to back-end
            functionality.I'm dedicated to staying up-to-date with the latest
            technologies and trends, and I believe that learning is a lifelong
            process
          </p>
          <button>View CV</button>
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
