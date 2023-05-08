import './Project.css' 
import Header from './../Header/Header';
import ProjectItemContainer from './ProjectItemContainer';
import { motion, useScroll } from "framer-motion/dist/framer-motion";



const Project = (props) => { 
   const { scrollYProgress } = useScroll();
   const projectMainClassName = `project__main ${props.className}` 
   const initialDelay = 0.5;
   return (
     <motion.div
       className={projectMainClassName}
       style={{ scaleX: scrollYProgress }}
     >
       <div className={"project__container"}>
         <Header heading="My Projects" />
         <div className="project__item_container">
           <ProjectItemContainer initialDelay={initialDelay} />
         </div>
       </div>
     </motion.div>
   );
}
export default Project;