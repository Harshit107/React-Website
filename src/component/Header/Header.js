import React from 'react';
import './Header.css' 


const Header = (props) => { 
   return (
     <React.Fragment>
       <div className={"heading__container "+props.className}>
         <h1 className="heading__container_h1">{props.heading}</h1>
         <div className="heading__container_first-line"></div>
         <div className="heading__container_second-line"></div>
       </div>
     </React.Fragment>
   );
}
export default Header;