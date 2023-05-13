import './Education.css' 
import EducationItem from './EducationItem';
import UemImage from '../../Image/uemJaipur.png';
import KvsImage from '../../Image/kvs.jpg';
import Header from './../Header/Header';


const Education = (props) => { 

   const educationMainClassName = `education__main ${props.className || ''}`;

   return (
     <div className={educationMainClassName}>
       <Header heading="Education" />
       <div className="education__container">
         <EducationItem
           className="education__remove_padding_top"
           image={UemImage}
           course={"University of Engineering and Management Jaipur"}
           name={"Bachelor of Technology - Computer Science"}
           marks={8.3}
           date={"2018 - 2022 "}
           delay={0.3}
         />
         <EducationItem
           image={KvsImage}
           className={"education__remove_padding_bottom"}
           course={"Kendriya Vidyalaya Andal"}
           name={"Computer Science"}
           marks={76}
           date={"2006 - 2018 "}
           delay={1}
         />
       </div>
     </div>
   );
};
export default Education;