import ProjectItem from "./ProjectItem";
import "./ProjectItemContainer.css";
import projectDescription from "./ProjectDescription";

const ProjectItemContainer = (props) => {
  const projectItemContainerMainClassName = `project-item-container__main ${props.className}`;
  const isItemCountThree = () => projectDescription.length % 3 === 0 ? 'flex_justify_content_evenly' : 'margin_right_50'
  return (
    <div className={projectItemContainerMainClassName}>
      <div className={`project-item-container__container ${isItemCountThree()}`}>
        {projectDescription.map((project, index) => {
          return <ProjectItem {...project} key={index} />;
        })}

      </div>
    </div>
  );
};
export default ProjectItemContainer;
