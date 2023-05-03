import './Button.css' 


const Button = (props) => { 
   return (
     <button className='custom__button' onClick={props.handleClick}>{props.children}</button>
   )
}
export default Button;