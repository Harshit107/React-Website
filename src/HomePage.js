import './HomePage.css' 
import App from './component/App';
import ThemeChanger from './component/ThemeManager/ThemeChanger';


const HomePage = () => { 
   return (
     <div className="homepage__container">
       <App className={"homepage__app"} />
       <ThemeChanger className={"homepage__themechange"} />
     </div>
   );
}
export default HomePage;