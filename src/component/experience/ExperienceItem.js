import './ExperienceItem.css' 


const ExperienceItem = (props) => { 
   const experienceItemMainClassName = `experience-item__main ${props.className}` 
   

   return (
     <div className={experienceItemMainClassName}>
       <div className={`experience-item__container`}>
         <div
           className={`experience-item__left " ${
             props.direction === "left" ? "experience-item__direction" : ""
           }`}
         >
           <div className="experience-item__job_title">{props.jobTitle}</div>
           <div className="experience-item__company_name">{props.name}</div>
           <div className="experience-item__job_month">{props.year}</div>
           <div className="experience-item__company_work">{props.work}</div>
         </div>
         <div className="experience-item__middle">
           <div className="experience-item__company_top"></div>
           <div
             className={`experience-item__company_logo ${
               props.direction === "left"
                 ? "company_logo_left"
                 : "company_logo_right"
             }`}
           >
             <img src={props.logo} alt="company logo" />
           </div>
           <div className="experience-item__company_bottom"></div>
         </div>

         <div
           className={`experience-item__right " ${
             props.direction === "right" ? "experience-item__direction" : ""
           }`}
         >
           <div className="experience-item__job_title">{props.jobTitle}</div>
           <div className="experience-item__company_name">{props.name}</div>
           <div className="experience-item__job_month">{props.year}</div>
           <div className="experience-item__company_work">{props.work}</div>
         </div>
       </div>
     </div>
   );
}
export default ExperienceItem;