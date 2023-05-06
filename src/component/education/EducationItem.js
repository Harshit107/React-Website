import "./EducationItem.css";
import {motion} from 'framer-motion/dist/framer-motion'

const EducationItem = (props) => {
  const educationItemMainClassName = `educationItem__main ${
    props.className || ""
  }`;

  return (
    <motion.div
      className={educationItemMainClassName}
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: `${props.delay}` }}
    >
      <div className="circle_now"></div>
      <div className="educationItem__design">
        <div className="educationItem__container">
          <motion.img
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: `${0.3 + props.delay}` }}
            src={props.image}
            alt="EducationImage"
            className="educationItem__container_img"
          />
          <div className="educationItem__container_data">
            <motion.div
              className="educationItem__container_data_course"
              initial={{ width: 0 }}
              animate={{ width: "fit-content" }}
              transition={{ delay: `${0.5 + props.delay}` }}
            >
              {props.course}
            </motion.div>
            <div className="educationItem__container_data_name">
              {props.name}
            </div>
            <div className="education__course_duration">
              {props.marks > 10 ? "Percentage " : "CGPA "} : {props.marks}
            </div>
            <div className="education__course_duration">
              <div className="education__course_duration_date">
                {props.date}
              </div>
              <motion.div
                className="education__course_duration_completed"
                initial={{ x: 100, scale: 2 }}
                animate={{ x: 0, scale: 1, color: "#25ca85" }}
                transition={{ delay: `${1 + props.delay}` }}
              >
                Completed
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default EducationItem;
