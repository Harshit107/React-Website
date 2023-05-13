import './ExperienceItemContainer.css' 
import ExperienceItem from './ExperienceItem';
import experienceData from './ExperienceData';



const Experience = (props) => { 
   const ExperienceMainClassName = `experience-item-container__main ${props.className}` 

   return (
     <div className={ExperienceMainClassName}>
       <div className={`experience-item-container__container`}>

        {
          experienceData.map( (data, index) => {
            return (
              <ExperienceItem
                {...data}
                direction = {index % 2 === 0 ? 'left' : 'right'}
              />
            );
          })
        }

         
       </div>
     </div>
   );
}
export default Experience;