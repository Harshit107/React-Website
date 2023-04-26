import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import About from "../component/about/About";
import Education from "../component/education/Education";
import Experience from "../component/exprience/Experience";
import Skill from "../component/skill/Skill";



export const history = createBrowserHistory();

const AppRouter = () => {

  return (
    <BrowserRouter history={history}>
      <div>
        <Routes>
          <Route path="/" element={<About></About>} exact={true} />
          <Route path="/Education" element={<Education />} exact={true} />
          <Route path="/Experience" element={<Experience />} exact={true} />
          <Route path="/Skill" element={<Skill />} exact={true} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default AppRouter;
