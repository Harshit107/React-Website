import { useState } from "react";
import ListItem from "./ListItem";
import "./Sidebar.css";

const Sidebar = (props) => {

  let className = `${props.className}`

  const [activeList, setActiveList] = useState('1');

  const changeListColor = (id) => {
    console.log(id);
    setActiveList(id);
  }

  return (
    <div className={className}>
      <ul className="slidebar__ul">
        <ListItem
          id="1"
          section="Home"
          icon="home"
          isActive={activeList === "1"}
          changeListColor={changeListColor}
        />
        <ListItem
          id="2"
          section="About"
          icon="user"
          isActive={activeList === "2"}
          changeListColor={changeListColor}
        />
        <ListItem
          id="3"
          section="Contact"
          icon="phone"
          isActive={activeList === "3"}
          changeListColor={changeListColor}
        />
        
      </ul>
    </div>
  );
};
export default Sidebar;
