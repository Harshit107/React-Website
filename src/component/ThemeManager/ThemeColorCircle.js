import "./ThemeColorCircle.css";

const ThemeColorCircle = (props) => {
  const handleChangeTheme = function () {
    props.handleChangeThemeColor(props.className);
  };


  return (
    <div>
      <div className={`theme-color-circle background-`+props.className} onClick={handleChangeTheme}></div>
    </div>
  );
};

export default ThemeColorCircle;
