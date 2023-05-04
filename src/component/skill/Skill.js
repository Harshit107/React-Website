import './Skill.css' 
import Header from './../Header/Header';
import ProgrammingLanguage from './ProgrammingLanguage';


const Skill = () => { 

   const languageItems = [
     {
       img: "https://img.icons8.com/color/240/null/java-coffee-cup-logo--v1.png",
       name: "Java",
     },
     {
       img: "https://camo.githubusercontent.com/c5b45f4b07364324947b8a0cb15e93ff32890d94321295fb8254aa06d1c5dc55/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3132382f353936382f353936383239322e706e67",
       name: "JavaScript",
     },
     {
       img: "https://camo.githubusercontent.com/345d7ef1913e167127cb2360a013c29a9f8472c9590a5ec6c186bd04f2426a50/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3132382f333039372f333039373030382e706e67",
       name: "C",
     },
     {
       img: "https://img.icons8.com/fluency/48/null/c-sharp-logo.png",
       name: "C#",
     },
     //   {
     //    img :"",
     //     name: "JavaScript",
     //   },
   ];

   return (
     <div className="skill__container">
       <Header heading="Tech Stack" />
         <div className='skill__tech_container'>
            <ProgrammingLanguage items = {languageItems} />
         </div>

     </div>
   );
}
export default Skill;