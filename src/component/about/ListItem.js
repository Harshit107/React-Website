import './ListItem.css'

const ListItem = (props) => { 

  const handleOnClick = () => {
    props.changeListColor(props.id);
  }

  return (
    <div className="listitem__container">
      <a
        href={`#${props.section}`}
        className={`listitem__container_a ${
          props.isActive ? " listitem__container_a_active" : ""
        }`}
        onClick={handleOnClick}
      >
        <i className={`fa fa-fw fa-${props.icon} listitem_i`}></i>
        {props.section}
      </a>
    </div>
  );
}

export default ListItem;





