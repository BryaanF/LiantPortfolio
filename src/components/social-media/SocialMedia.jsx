import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faGitlab,
  faFacebookF,
  faInstagram,
  faTwitter,
  faMedium,
  faStackOverflow,
  faKaggle,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../data";

const CONTACTS = [
  {key: "github", href: socialMediaLinks.github, icon: faGithub},
  {key: "linkedin", href: socialMediaLinks.linkedin, icon: faLinkedinIn},
  {
    key: "gmail",
    href: `mailto:${socialMediaLinks.gmail}`,
    icon: faEnvelope,
    className: "google"
  },
  {key: "gitlab", href: socialMediaLinks.gitlab, icon: faGitlab},
  {key: "facebook", href: socialMediaLinks.facebook, icon: faFacebookF},
  {key: "instagram", href: socialMediaLinks.instagram, icon: faInstagram},
  {key: "twitter", href: socialMediaLinks.twitter, icon: faTwitter},
  {key: "medium", href: socialMediaLinks.medium, icon: faMedium},
  {key: "stackoverflow", href: socialMediaLinks.stackoverflow, icon: faStackOverflow},
  {key: "kaggle", href: socialMediaLinks.kaggle, icon: faKaggle},
  {
    key: "whatsapp",
    href: socialMediaLinks.whatsapp,
    icon: faWhatsapp,
    style: {
      backgroundColor: "#25D366",
      color: "white",
      borderRadius: "50%",
      fontSize: "24px"
    }
  }
];

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }

  return (
    <div className="social-media-div">
      {CONTACTS.map(({key, href, icon, className, style}) =>
        href ? (
          <a
            key={key}
            href={href}
            className={`icon-button ${className || key}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={icon} style={style} />
            <span></span>
          </a>
        ) : null
      )}
    </div>
  );
}
