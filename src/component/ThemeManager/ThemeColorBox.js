import './ThemeColorBox.css' 
import ThemeColorCircle from './ThemeColorCircle';


const ThemeColorBox = (props) => { 
 

   const handleChangeThemeColor = function(color) {
      const colorLst = document.body.classList;
      console.log('colorLst :>> ', colorLst.item(1));
      if(colorLst.item(1) !== undefined)
        colorLst.remove(colorLst.item(1));      
        
      colorLst.add(color)
      
   }
   let className = `theme-color-box__container ${props.className}`;

   return (
     <div className={className}>
      <div className='theme-color-box__text'> Theme Change</div>
       <div className="theme-color-box__wrapper">
         <ThemeColorCircle
           className="color-red"
           handleChangeThemeColor={handleChangeThemeColor}
         />
         <ThemeColorCircle
           className="color-green"
           handleChangeThemeColor={handleChangeThemeColor}
         />
         <ThemeColorCircle
           className="color-blue"
           handleChangeThemeColor={handleChangeThemeColor}
         />
         <ThemeColorCircle
           className="color-yellow"
           handleChangeThemeColor={handleChangeThemeColor}
         />
         <ThemeColorCircle
           className="color-default"
           handleChangeThemeColor={handleChangeThemeColor}
         />
       </div>
     </div>
   );
}
export default ThemeColorBox;