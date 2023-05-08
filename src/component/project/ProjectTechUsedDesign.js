import './ProjectTechUsedDesign.css' 


const ProjectTechUsedDesign = (props) => { 
   const projectTechUsedDesignMainClassName = `project-tech-used-design__main ${props.className}` 

   return (
     <div className={projectTechUsedDesignMainClassName}>
       <div className={`project-tech-used-design__container`}>
          {(props.tech).map((item, index) => {
            return <div className='project-tech-used-design__item'> 
                  <div>{item}</div>
            </div>
          })}
       </div>

     </div>
   );
}
export default ProjectTechUsedDesign;