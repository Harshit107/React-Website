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
                delay = {0.5 + index/1.5 }
              />
            );
          })
        }

         
       </div>
     </div>
   );
}
export default Experience;