import './Skill.css' 
import Header from './../Header/Header';
import ItemContainer from './ItemContainer';
import { languageItems, frameworkItems, databaseItems, toolsItem } from "./SkillIconUrl";


const Skill = () => { 

   

   return (
     <div className="skill__container">
       <Header heading="Tech Stack" />
       <div className="skill__tech_container">
         <ItemContainer
           items={languageItems}
           name="Programming Languages"
           pos={1}
           delay={0.7}
         />
         <ItemContainer
           items={frameworkItems}
           name="Framework and Libraries"
           delay={1.5}
         />
         <ItemContainer
           items={[...databaseItems, ...toolsItem]}
           name="Tools and Database"
           delay={3}
         />
       </div>
     </div>
   );
}
export default Skill;