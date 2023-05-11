import './ItemContainer.css' 
import SkillListItem from './SkillListItem';
import {motion} from 'framer-motion/dist/framer-motion'


const ItemContainer = (props) => { 

  const itemLst = props.items;
  const startDelay = 1 + props.delay;

   return (
     <motion.div className="item__container_main"
     initial={{ y: '-150', opacity: 0 }}
        animate={{  y: 0, opacity: 1 }}
        transition={{ delay: props.delay, ease : 'linear' }}
      >
       <h6
         className="item__container_name"       
       >
         {props.name}
       </h6>
       <div className="item__container_item">
         {itemLst.map((item, index) => (
           <SkillListItem
             img={item.img}
             name={item.name}
             delay={ index / 3.0 + (props.pos === 1  ? 0:startDelay )}
             key={Math.random(895) + index}
           />
         ))}
       </div>
     </motion.div>
   );
}
export default ItemContainer;