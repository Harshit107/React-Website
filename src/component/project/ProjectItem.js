import './ProjectItem.css' 
import Button from './../UI/Button';


const ProjectItem = (props) => { 
   const projectItemMainClassName = `project-item__main ${props.className}` 

   return (
     <div className={projectItemMainClassName}>
       <div className={`project-item__container`}>
         <img
           src={props.image}
           alt="project-img"
           key={`${props.key}`}
           className="project-item__image"
         ></img>
         <div className="project-item_detail_container">
           <p className="project-item__description">{props.description}</p>
           <div className="project-item__access">
             <Button
               extraClass={"project-item__button_conf"}
               clickValue={props.codeLink}
             >
               {"</> Code"}
             </Button>
             <Button
               extraClass={"project-item__button_conf "}
               clickValue={props.liveLink}
             >
               <i className={"fa fa-globe"}></i> {" Live"}
             </Button>
           </div>
         </div>
       </div>
     </div>
   );
}
export default ProjectItem;