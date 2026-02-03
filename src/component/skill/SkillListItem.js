import { motion } from "framer-motion";
import "./SkillListItem.css";

const SkillListItem = (props) => {
  return (
    <motion.div
      className="skill-list-item__container"
      initial={{ x: -120, opacity: 0, scale: 1.1 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ delay: `${props.delay}` }}
    >
      <img src={props.img} alt="myImage" className="skill-list-item_img"></img>
      <div className="skill-list-item_name">{props.name}</div>
    </motion.div>
  );
};
export default SkillListItem;
