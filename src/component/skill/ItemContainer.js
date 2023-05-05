import './ItemContainer.css' 
import SkillListItem from './SkillListItem';
import {motion} from 'framer-motion/dist/framer-motion'


const ItemContainer = (props) => { 

  const itemLst = props.items;

   return (
     <motion.div
       className="item__container_main"
       
     >
       <h6 className="item__container_name">{props.name}</h6>
       <div className="item__container_item">
         {itemLst.map((item, index) => (
           <SkillListItem img={item.img} name={item.name} delay={index/3.0} key={Math.random(895) + index}/>
         ))}
       </div>
     </motion.div>
   );
}
export default ItemContainer;