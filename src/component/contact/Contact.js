import Header from "../Header/Header";
import IconBox from "../UI/IconBox";
import "./Contact.css";
import React, { useState } from "react";
import PopupModal from "../UI/PopupModal";

const Contact = () => {

    const [showPopupModal, setShowPopupModal] = useState(false);

    const handlePopupModalToggle = () => {
      setShowPopupModal(!showPopupModal);
    };

  return (
    <div className="contact__container">
      {showPopupModal && (
        <PopupModal
          title="Contact via Email"
          content="Gmail : Harshit107.in@gmail.com "
          contentMore="Site : Contact@harshit107.in"
          closePopupModal={handlePopupModalToggle}
        />
      )}

      <Header heading="Contact Me" />
      <div className="contact__container_connection_message">
        <h3 className="special__text">Lets Get Connected</h3>
        <p>Choose any of your Favourite Platform</p>
      </div>

      <div className="contact_logo_container">
        <a
          href="https://www.linkedin.com/in/harshit-keshari-296823156/"
          target="blank"
          className="default-link"
        >
          <IconBox brandName={"linkedin"} logoName={"LinkedIn"} />
        </a>
        <a
          href="https://github.com/Harshit107"
          target="blank"
          className="default-link"
        >
          <IconBox brandName={"github"} logoName={"Github"} />
        </a>
        <a
          href="https://twitter.com/harshit107in"
          target="blank"
          className="default-link"
        >
          <IconBox brandName={"twitter"} logoName={"Twitter"} />
        </a>
        <div className="contact__open-mail" onClick={handlePopupModalToggle}>
          <IconBox brandName={"maxcdn"} logoName={"E-Mail"} />
        </div>
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
          <div className="contact__detail_value">
            Kaviraj Gali North Bazar Andal, Durgapur Pincode : 713321,
            West-Bengal, India
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
