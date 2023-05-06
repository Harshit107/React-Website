import { useState } from 'react';
import './HomePage.css' 
import App from './component/App';
import ThemeChanger from './component/ThemeManager/ThemeChanger';


const HomePage = () => {

  const [loadingComponent, setLoadingComponent] = useState(0); 
  const handleNewComponentChangeReq = function(index) {
    setLoadingComponent(index)
  };
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