import "./ProjectItem.css";
import Button from "./../UI/Button";
import ProjectTechUsedDesign from "./ProjectTechUsedDesign";
import {motion} from 'framer-motion/dist/framer-motion'

const ProjectItem = (props) => {
  const projectItemMainClassName = `project-item__main ${props.className}`;
  const delay = props.delay;
  const pos = props.pos;
  const xPosition = pos % 3 === 0 && pos > 0 ? "0" : "-33%";
  const yPosition = pos %3 === 0 && pos > 0 ?Math.floor(pos / 3) * (-400) : 0;

  return (
    <div className={projectItemMainClassName}>
      <motion.div
        className={`project-item__container`}
        initial={{ x: xPosition, y: yPosition, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ delay: delay, ease : 'linear' }}
      >
        <img
          src={props.image}
          alt="project-img"
          className="project-item__image"
        ></img>

        <div className="project-item_detail_container">
          <div>
            {props.tech && (
              <ProjectTechUsedDesign tech={props.tech || [""]} delay={delay} />
            )}
            <div className="project-item__head_name special__text">
              {props.name}
            </div>
          </div>

          <p className="project-item__description">{props.description}</p>
          <div className="project-item__access">
            <Button             
              extraClass={"project-item__button_conf"}
              clickValue={props.codeLink}
            >
              {"</> Code"}
            </Button>
            <Button
              initial={{ x: -'100px' }}
              animate={{ x: 0 }}
              transition={{ delay: delay }}
              extraClass={"project-item__button_conf "}
              clickValue={props.liveLink}
            >
              <i className={"fa fa-globe"}></i> {" Live"}
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default ProjectItem;
