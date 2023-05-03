import "./PopupModal.css";
import Button from './Button';

function PopupModal(props) {
  return (
    <div className="popup-modal">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>{props.contentMore}</p>
      <Button handleClick={props.closePopupModal}>Close</Button>
    </div>
  );
}

export default PopupModal;
