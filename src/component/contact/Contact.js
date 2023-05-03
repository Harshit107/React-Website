import Header from "../Header/Header";
import IconBox from "../UI/IconBox";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact__container">
      <Header heading="Contact Me" />
      <div className="contact__container_connection_message">
        <h3 className="special__text">Lets Get Connected</h3>
        <p>Choose any of your Favourite Platform</p>
      </div>

      <div className="contact_logo_container">
        <a
          href="https://www.google.com"
          target="blank"
          className="default-link"
        >
          <IconBox brandName={"twitter"} logoName={"Twitter"} />
        </a>
        <a
          href="https://www.google.com"
          target="blank"
          className="default-link"
        >
          <IconBox brandName={"linkedin"} logoName={"LinkedIn"} />
        </a>
        <a
          href="https://www.google.com"
          target="blank"
          className="default-link"
        >
          <IconBox brandName={"github"} logoName={"Github"} />
        </a>
        <a
          href="https://www.google.com"
          target="blank"
          className="default-link"
        >
          <IconBox brandName={"maxcdn"} logoName={"E-Mail"} />
        </a>
      </div>

      <div className="contact__detail">
        <div className="contact__detail_row">
          <div className="contact__detail_title">Phone</div>
          <div className="contact__detail_value">7501781756</div>
        </div>
        <div className="contact__detail_row">
          <div className="contact__detail_title">Email</div>
          <div className="contact__detail_value">Harshit107.in@gmail.com</div>
        </div>
        <div className="contact__detail_row">
          <div className="contact__detail_title">Address</div>
          <div className="contact__detail_value">Kaviraj Gali North Bazar Andal, Durgapur Pincode : 713321, West-Bengal, India</div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
