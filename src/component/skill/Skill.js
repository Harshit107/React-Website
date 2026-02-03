import Header from "./../Header/Header";
import ItemContainer from "./ItemContainer";
import "./Skill.css";
import {
  backendItems,
  databaseItems,
  familiarItems,
  frontendItems,
  languageItems,
  toolsItems,
} from "./SkillIconUrl";

const Skill = () => {
  return (
    <div className="skill__container">
      <Header heading="Tech Stack" />

      <div className="skill__tech_container">
        <ItemContainer
          items={languageItems}
          name="Programming Languages"
          pos={1}
          delay={0.6}
        />

        <ItemContainer
          items={frontendItems}
          name="Frontend Technologies"
          delay={1.2}
        />

        <ItemContainer
          items={backendItems}
          name="Backend Technologies"
          delay={1.8}
        />

        <ItemContainer items={databaseItems} name="Databases" delay={2.4} />

        <ItemContainer items={toolsItems} name="DevOps & Tools" delay={3} />

        <ItemContainer items={familiarItems} name="Familiar With" delay={3.6} />
      </div>
    </div>
  );
};

export default Skill;
