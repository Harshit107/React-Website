import { useState } from 'react';
import './HomePage.css' 
import App from './component/App';
import ThemeChanger from './component/ThemeManager/ThemeChanger';


const HomePage = () => {

  const [loadingComponent, setLoadingComponent] = useState(2); 
  const handleNewComponentChangeReq = function(index) {
    setLoadingComponent(index)
  };

  const screenWidth = window.innerWidth;
    console.log(screenWidth);

  if(screenWidth < 800) {
    return (
      <div className='mobile-version'>
        Apologize for the inconvenience, but mobile version is currently
        undergoing development. However, the desktop version is still available
        and accessible for use. Thank you for your understanding
      </div>
    );
  }

   return (
     <div className="homepage__container">
       <App
         className={"homepage__app"}
         loadComponent={loadingComponent}
         handleNewComponentChangeReq={handleNewComponentChangeReq}
       />
       <ThemeChanger className={"homepage__themechange"} />
     </div>
   );
}
export default HomePage;