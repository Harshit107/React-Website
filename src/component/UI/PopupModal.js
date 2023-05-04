import "./PopupModal.css";
import Button from './Button';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion"; 


function PopupModal(props) {
  return (
    <AnimatePresence>
      <motion.div
        className="popup-modal"
        initial={{ "--rotate": "0deg" }}
        animate={{ "--rotate": "360deg" }}
        transition={{ duration: 0.2 }}
      >
        <div style={{ transform: "rotate(var(--rotate))" }}>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
          <p>{props.contentMore}</p>
          <Button handleClick={props.closePopupModal}>Close</Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default PopupModal;
