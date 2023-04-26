import { useState } from "react";
import ListItem from "./ListItem";
import "./Sidebar.css";

const Sidebar = (props) => {

  let className = `${props.className}`

  const [activeList, setActiveList] = useState('0');

  const changeListColor = (id) => {    
    setActiveList(id);
    props.loadNewComponent(id);
  }

  return (
    <div className={className}>
      <ul className="slidebar__ul">
        <ListItem
          id="0"
          section="Home"
          icon="home"
          isActive={activeList === "0"}
          changeListColor={changeListColor}
        />
        <ListItem
          id="1"
          section="About"
          icon="user"
          isActive={activeList === "1"}
          changeListColor={changeListColor}
        />
        <ListItem
          id="2"
          section="Contact"
          icon="phone"
          isActive={activeList === "2"}
          changeListColor={changeListColor}
        />
        
      </ul>
    </div>
  );
};
export default Sidebar;
