import Link from 'next/link';
import './ListItem.css';

const ListItem = (props) => { 
  return (
    <div className="listitem__container">
      <Link        
        href={props.href}
        className={`listitem__container_a ${
          props.isActive ? " listitem__container_a_active" : ""
        }`}
      >
        <i className={`fa fa-${props.icon} listitem_i`}></i>
        {props.section}
      </Link>
    </div>
  );
}

export default ListItem;





