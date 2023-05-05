import './ItemContainer.css' 
import SkillListItem from './SkillListItem';


const ItemContainer = (props) => { 

  const itemLst = props.items;

   return (
     <div className="item__container_main">
       <h7 className="item__container_name">{props.name}</h7>
       <div className="item__container_item">
         {itemLst.map((item) => (
           <SkillListItem img={item.img} name={item.name} />
         ))}
       </div>
     </div>
   );
}
export default ItemContainer;