import { motion } from "framer-motion";
import "./ExperienceItem.css";

const ExperienceItem = (props) => {
  const experienceItemMainClassName = `experience-item__main ${props.className}`;

  return (
    <div className={experienceItemMainClassName}>
      <div className={`experience-item__container`}>
        <motion.div
          initial={{ x: "-100", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: `${props.delay}` }}
          className={`experience-item__left " ${
            props.direction === "left" ? "experience-item__direction" : ""
          }`}
        >
          <div className="experience-item__job_title">{props.jobTitle}</div>
          <div className="experience-item__company_name">{props.name}</div>
          <div className="experience-item__job_month">{props.year}</div>
          <div className="experience-item__company_work">{props.work}</div>
        </motion.div>
        <motion.div
          className="experience-item__middle"
          initial={{ y: "-100", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: `${props.delay}` }}
        >
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
        </motion.div>

        <motion.div
          initial={{ x: "100", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: `${props.delay}` }}
          className={`experience-item__right " ${
            props.direction === "right" ? "experience-item__direction" : ""
          }`}
        >
          <div className="experience-item__job_title">{props.jobTitle}</div>
          <div className="experience-item__company_name">{props.name}</div>
          <div className="experience-item__job_month">{props.year}</div>
          <div className="experience-item__company_work">{props.work}</div>
        </motion.div>
      </div>
    </div>
  );
};
export default ExperienceItem;
