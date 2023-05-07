import ProjectItem from './ProjectItem';
import './ProjectItemContainer.css' 
import digitalClassroomImg from "../../Image/digitalClassroom-image.jpg";
import projectDescription from './ProjectDescription';




const ProjectItemContainer = (props) => { 
   const projectItemContainerMainClassName = `projectItemContainer__main ${props.className}` 

   return (
     <div className={projectItemContainerMainClassName}>
       <div className={`ProjectItemContainer__container`}>
         <ProjectItem
           image={digitalClassroomImg}
           {...projectDescription.digitalClassroom}
         />
       </div>
     </div>
   );
}
export default ProjectItemContainer;