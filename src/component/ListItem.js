import './ListItem.css'

const ListItem = (props) => { 

  const handleOnClick = () => {
    props.changeListColor(props.id);
  }

  return (
    <div className="listitem__container">
      <div        
        className={`listitem__container_a ${
          props.isActive ? " listitem__container_a_active" : ""
        }`}
        onClick={handleOnClick}
      >
        <i className={`fa fa-${props.icon} listitem_i`}></i>
        {props.section}
      </div>
    </div>
  );
}

export default ListItem;





