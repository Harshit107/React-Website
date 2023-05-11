import './Button.css' 


const Button = (props) => { 

  const handleClick = () => {
    if(props.clickValue)window.open(props.clickValue);
    else props.handleClick();

   }

   return (
     <button className={`custom__button ${props.extraClass}`} onClick={handleClick}>{props.children}</button>
   )
}
export default Button;