import './Skill.css' 
import Header from './../Header/Header';
import ItemContainer from './ItemContainer';
import { languageItems, frameworkItems, databaseItems, toolsItem } from "./SkillIconUrl";


const Skill = () => { 

   

   return (
     <div className="skill__container">
       <Header heading="Tech Stack" />
       <div className="skill__tech_container">
         <ItemContainer items={languageItems} name="Programming Languages" />
         <ItemContainer items={frameworkItems} name="Framework and Libraries" />
         <ItemContainer items={databaseItems} name="Database" />
         <ItemContainer items={toolsItem} name="Tools" />
       </div>
     </div>
   );
}
export default Skill;