import './Project.css' 
import Header from './../Header/Header';
import ProjectItemContainer from './ProjectItemContainer';



const Project = (props) => { 
   const projectMainClassName = `project__main ${props.className}` 

   return (
     <div className={projectMainClassName}>
       <div className={'project__container'}>
         <Header heading="My Projects" />
         <div className='project__item_container' >
            <ProjectItemContainer />
         </div>
       </div>
     </div>
   )
}
export default Project;