import Image from "next/image";
import AboutImage from "../../Image/about-img-transparent.png";
import Button from "../UI/Button";
import TextWritter from "../UI/TextWritter";
import "./About.css";

const About = (props) => {
  return (
    <div className="about__container">
      <div className="about__container_text">
        <h1 className="about__text_container_heading">
          <b>
            Hello, My name is{" "}
            <span className="special__text">Harshit Keshari</span>
          </b>
        </h1>
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
            <a href="https://www.cornerstoneondemand.com/" target="_blank" rel="noopener noreferrer">
              <span className="link-color">Cornerstone OnDemand </span>
            </a>
            and I have a Bachelor's degree in Computer Science from the
            University Of Engineering and Management Jaipur.
            <br />
            <strong>Who is Harshit Keshari?</strong><br />
            Also known in the developer community as <strong>Harshit107</strong>, I'm a Full-Stack Developer with 3+ years of experience building
            scalable, high-performance web applications using React, Next.js, TypeScript,
            Node.js, Express, and GraphQL. Strong focus on frontend performance
            optimization, SEO, accessibility (WCAG), and clean UI architecture. 
            <br /><br />
            <strong>What does Harshit107 build?</strong><br />
            I specialize in designing API-driven systems, integrating REST and GraphQL services, 
            and working with PostgreSQL, MongoDB, and Firebase. Proven track record of improving UI
            responsiveness, AI bot friendly structures, and developer productivity through
            reusable components and internal tooling.
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
          <Image src={AboutImage} alt="Who is Harshit Keshari (Harshit107) - Software Developer" className="about__image_container_img" />
          <div className="about__image_container_bottom-right"></div>
        </div>
      </div>
    </div>
  );
};
export default About;
