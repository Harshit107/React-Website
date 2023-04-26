import './TextWritter.css' 
import Typed from 'react-typed';


const TextWritter = () => { 

   return (
     <Typed
       strings={[
         '<div>I\'m a <span class="highlight">MERN Stack Developer</span></div>',
         '<div>I\'m a <span class="highlight">Android Developer</span></div>',
         '<div>I\'m a <span class="highlight">DSA Freek</span></div>',
       ]}
       typeSpeed={40}
       backSpeed={25}
       loop
       showCursor={false}
       contentClassName="TextWritter.css" // Apply CSS class to the text
     />
   );
}
export default TextWritter;