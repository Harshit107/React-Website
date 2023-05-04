import './SkillListItem.css' 


const SkillListItem = (props) => { 
   return (
     <div className="skill-list-item__container">
       <img
         src={props.img}
         alt="myImage"
         className="skill-list-item_img"
       ></img>
       <div className="skill-list-item_name">{props.name}</div>
     </div>
   );
}
export default SkillListItem;