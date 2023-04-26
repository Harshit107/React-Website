import { useState } from "react";
import ListItem from "./ListItem";
import "./Sidebar.css";
import Logo from '../Image/harshit-logo-circle.png'

const Sidebar = (props) => {

  let className = `${props.className} sidebar__container `;

  const [activeList, setActiveList] = useState('0');

  const changeListColor = (id) => {    
    setActiveList(id);
    props.loadNewComponent(id);
  }

  return (
    <div className={className}>
      <div className="sidebar__logo_container">
        <img src={Logo} alt="logo" className="sidebar__logo"></img>
      </div>
      <div className="slidebar__ul">
        <ListItem
          id="0"
          section="About"
          icon="user"
          isActive={activeList === "0"}
          changeListColor={changeListColor}
        />
        <ListItem
          id="1"
          section="Education"
          icon="book"
          isActive={activeList === "1"}
          changeListColor={changeListColor}
        />
        <ListItem
          id="2"
          section="Exprience"
          icon="briefcase"
          isActive={activeList === "2"}
          changeListColor={changeListColor}
        />

        <ListItem
          id="3"
          section="Project"
          icon="desktop"
          isActive={activeList === "3"}
          changeListColor={changeListColor}
        />

        <ListItem
          id="4"
          section="Skills"
          icon="code"
          isActive={activeList === "4"}
          changeListColor={changeListColor}
        />

        <ListItem
          id="5"
          section="Contact"
          icon="comments"
          isActive={activeList === "5"}
          changeListColor={changeListColor}
        />
      </div>
    </div>
  );
};
export default Sidebar;
