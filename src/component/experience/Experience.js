import './Experience.css' 
import Header from './../Header/Header';
import ExperienceItemContainer from './ExperienceItemContainer';


const Experience = (props) => { 
   const experienceMainClassName = `experience__main ${props.className}` 

   return (
     <div className={experienceMainClassName}>
         <Header heading = "Experience"></Header>
       <div className={`experience__container`}>
           <ExperienceItemContainer />
       </div>
     </div>
   )
}
export default Experience;