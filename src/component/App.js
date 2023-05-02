import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";

import About from "./about/About";
import Sidebar from "./Sidebar/Sidebar";
import Contact from "./contact/Contact";
import Education from "./education/Education";
import Project from "./project/Project";
import Skills from "./skill/Skill";
import Experience from "./experience/Experience";

const App = (props) => {
  const [componentState, setComponentState] = useState(0);
  const classNameForComponent = "app__container_main-page";

  const componentsArray = [
    <About className={classNameForComponent} />,
    <Education className={classNameForComponent} />,
    <Experience className={classNameForComponent} />,
    <Project className={classNameForComponent} />,
    <Skills className={classNameForComponent} />,
    <Contact className={classNameForComponent} />,
  ];

  const loadNewComponent = (index) => {
    setComponentState(index);
  };

  return (
    <div className={`app__container ${props.className}`}>
      <Sidebar
        className="app__container_sidebar"
        loadNewComponent={loadNewComponent}
      >
        Side bar
      </Sidebar>
      <div className={classNameForComponent}>
        <CSSTransition
          key={componentState}
          in={true}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          {componentsArray[componentState]}
        </CSSTransition>
      </div>
    </div>
  );
};

export default App;
