import { motion } from "framer-motion";
import Button from "./Button";
import "./PopupModal.css";

function PopupModal(props) {
  return (
    <motion.div
      className="popup-modal"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <p>{props.contentMore}</p>
        <Button handleClick={props.closePopupModal}>Close</Button>
      </div>
    </motion.div>
  );
}

export default PopupModal;
