import { ReactTyped } from "react-typed";
import "./TextWritter.css";

const TextWritter = () => {
  return (
    <ReactTyped
      strings={[
        '<div>I\'m a <span class="highlight">MERN Stack Developer</span></div>',
        '<div>I\'m a <span class="highlight">Android Developer</span></div>',
        '<div>I\'m a <span class="highlight">DSA Freek</span></div>',
      ]}
      typeSpeed={40}
      backSpeed={25}
      loop
      showCursor={false}
      contentClassName="TextWritter.css" // Apply CSS class to the text
    />
  );
};
export default TextWritter;
