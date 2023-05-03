import "./IconBox.css";

const IconBox = (props) => {
  let logoClassName = `icon-box__container_img  fa fa-brands fa-${props.brandName}`;
  return (
    <div className="icon-box__container">
      <i className={logoClassName}></i>
      <div className="icon-box__container_name">{props.logoName}</div>
    </div>
  );
};
export default IconBox;
