import About from './about/About';
import Sidebar from './about/Sidebar';
import './App.css';


const App = () => {
  return (
    <div className="app__container">
      <Sidebar className="app__container_sidebar">Side bar</Sidebar>
      <About className="app__container_main-page">Main Portfolio</About>
    </div>
  );
};

export default App;
