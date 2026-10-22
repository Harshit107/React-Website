"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from '../../Image/harshitLogo.png';
import ListItem from "./ListItem";
import "./Sidebar.css";

const Sidebar = (props) => {
  let className = `${props.className || ''} sidebar__container `;
  const pathname = usePathname();

  return (
    <div className={className}>
      <div className="sidebar__logo_container">
        <Image src={Logo} alt="logo" className="sidebar__logo" />
      </div>
      <div className="slidebar__ul">
        <ListItem
          href="/"
          section="About"
          icon="user"
          isActive={pathname === "/"}
        />
        <ListItem
          href="/education"
          section="Education"
          icon="book"
          isActive={pathname === "/education"}
        />
        <ListItem
          href="/experience"
          section="Experience"
          icon="briefcase"
          isActive={pathname === "/experience"}
        />

        <ListItem
          href="/project"
          section="Project"
          icon="desktop"
          isActive={pathname === "/project"}
        />

        <ListItem
          href="/skill"
          section="Skills"
          icon="code"
          isActive={pathname === "/skill"}
        />

        <ListItem
          href="/contact"
          section="Contact"
          icon="comments"
          isActive={pathname === "/contact"}
        />
      </div>
    </div>
  );
};
export default Sidebar;
