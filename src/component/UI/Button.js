import './Button.css' 


const Button = (props) => { 

  const handleClick = () => props.clickValue && window.open(props.clickValue); 
   return (
     <button className={`custom__button ${props.extraClass}`} onClick={handleClick}>{props.children}</button>
   )
}
export default Button;