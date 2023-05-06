import "./EducationItem.css";

const EducationItem = (props) => {
  const educationItemMainClassName = `educationItem__main ${
    props.className || ""
  }`;

  return (
    <div className={educationItemMainClassName}>
      <div className="circle_now"></div>
      <div className="educationItem__design">
        <div className="educationItem__container">
          <img
            src={props.image}
            alt="EducationImage"
            className="educationItem__container_img"
          />
          <div className="educationItem__container_data">
            <div className="educationItem__container_data_course">
              {props.course}
            </div>
            <div className="educationItem__container_data_name">
              {props.name}
            </div>
            <div className="education__course_duration">
              {props.marks > 10 ? "Percentage " : "CGPA "} : {props.marks}
            </div>
            <div className="education__course_duration">
              <div className="education__course_duration_date">
                {props.date}
              </div>
              <div className="education__course_duration_completed">
                Completed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationItem;
