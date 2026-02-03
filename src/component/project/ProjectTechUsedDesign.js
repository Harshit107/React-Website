import { motion } from "framer-motion";
import "./ProjectTechUsedDesign.css";

const ProjectTechUsedDesign = (props) => {
  const projectTechUsedDesignMainClassName = `project-tech-used-design__main ${props.className}`;
  const delay = props.delay || 0.1;

  return (
    <div className={projectTechUsedDesignMainClassName}>
      <div className={`project-tech-used-design__container`}>
        {props.tech.map((item, index) => {
          return (
            <motion.div
              className="project-tech-used-design__item"
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + delay + index / 3, ease: "linear" }}
            >
              <div>{item}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default ProjectTechUsedDesign;
