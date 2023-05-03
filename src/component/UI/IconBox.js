import "./IconBox.css";

const IconBox = (props) => {
  let containerClassName = `icon-box__container ${props.className}`
  let logoClassName = `icon-box__container_img  fa fa-brands fa-${props.brandName}`;
  return (
    <div className={containerClassName}>
      <i className={logoClassName}></i>
      <div className="icon-box__container_name">{props.logoName}</div>
    </div>
  );
};
export default IconBox;
