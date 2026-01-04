import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faSquareEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const onlyNumbers = contactInfo.number.replace(/\D/g, "");
  const onlyEmail = contactInfo.email_address.replace(/[+\s📧]/g, "");
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={
                      "https://wa.me/" +
                      onlyNumbers +
                      "?text=Halo%20Liant,%20Saya%20tertarik%20untuk%20bekerja%20sama%20terkait%20..."
                    }
                  >
                    <FontAwesomeIcon
                      icon={faSquareWhatsapp}
                      style={{marginRight: "8px"}}
                    />
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}

              <a className="contact-detail-email" href={"mailto:" + onlyEmail}>
                <FontAwesomeIcon
                  icon={faSquareEnvelope}
                  style={{marginRight: "8px"}}
                />
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
