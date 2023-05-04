import './ProgrammingLanguage.css' 
import SkillListItem from './SkillListItem';


const ProgrammingLanguage = (props) => { 

  const itemLst = props.items;

   return (
     <div className='programming-language__container'>
        {itemLst.map( item => <SkillListItem img={item.img} name={item.name}/>)}
     </div>
   )
}
export default ProgrammingLanguage;