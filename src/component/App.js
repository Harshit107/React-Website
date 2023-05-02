import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import "./App.css";

import About from "./about/About";
import Sidebar from "./Sidebar/Sidebar";
import Contact from "./contact/Contact";
import Education from "./education/Education";
import Project from "./project/Project";
import Skills from "./skill/Skill";
import Experience from "./experience/Experience";
import Animation from '../animation';


const App = (props) => {
  const classNameForComponent = "app__container_main-page";

  const componentsArray = [
    <About className={classNameForComponent} />,
    <Education className={classNameForComponent} />,
    <Experience className={classNameForComponent} />,
    <Project className={classNameForComponent} />,
    <Skills className={classNameForComponent} />,
    <Contact className={classNameForComponent} />,
  ];

  const [activeComponentIndex, setActiveComponentIndex] = useState(
    props.loadComponent || 0
  );
  const activeComponent = componentsArray[activeComponentIndex];

  useEffect(() => {
    setActiveComponentIndex(props.loadComponent);
  }, [props.loadComponent]);


  const transitions = useTransition(
    activeComponent,
    Animation[activeComponentIndex % 6]
  );

  return (
    <div className={`app__container ${props.className}`}>
      <Sidebar
        className="app__container_sidebar"
        loadNewComponent={setActiveComponentIndex}
      />
      {transitions((style, component) => (
        <animated.div className={classNameForComponent} style={style}>
          {component}
        </animated.div>
      ))}
    </div>
  );
};

export default App;
