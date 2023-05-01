import "./ThemeChanger.css";
import ThemeColorBox from "./ThemeColorBox";
import { useState } from "react";
import darkLogo from "../../Image/dark.svg";
import lightLogo from "../../Image/light.svg";

const ThemeChanger = (props) => {
  let className = `themechanger__container ${props.className}`;
  const [mode, setMode] = useState("dark");
   const [showDiv, setShowDiv] = useState(false);

   const toggleDiv = () => {
     setShowDiv(!showDiv);
   };

  const handleChangeMode = function () {
    
    const bodyClass = document.body.classList;
    if (mode === "dark") {
      setMode("light");
      bodyClass.replace("dark-mode", "light-mode");
    } else {
      setMode("dark");
      bodyClass.replace("light-mode", "dark-mode");
    }
  };

  return (
    <div className={className}>
      <div className="themechanger__setting">
        <div className="themechanger__setting_icon_holder">
          <i
            className="fa fa-cog fa-spin themechanger__setting_color"
            onClick={toggleDiv}
          ></i>
          <div>
            <img
              className="themechanger__setting_img"
              src={mode === "dark" ? lightLogo : darkLogo}
              alt="Light Mode"
              onClick={handleChangeMode}
            ></img>
          </div>
        </div>
        <ThemeColorBox
          className=""
        />
      </div>
    </div>
  );
};
export default ThemeChanger;
