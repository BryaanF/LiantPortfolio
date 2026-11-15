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
  {key: "whatsapp", href: socialMediaLinks.whatsapp, icon: faWhatsapp}
];

const BG_COLORS = {
  github: "bg-[#333] hover:bg-[#24292e]",
  linkedin: "bg-[#0e76a8] hover:bg-[#0b5c83]",
  google: "bg-[#ea4335] hover:bg-[#d33828]",
  gitlab: "bg-[#fca326] hover:bg-[#e28e18]",
  facebook: "bg-[#3b5998] hover:bg-[#2d4373]",
  instagram: "bg-[#c13584] hover:bg-[#a52d70]",
  twitter: "bg-[#1da1f2] hover:bg-[#0d8ddb]",
  medium: "bg-[#000] hover:bg-[#222]",
  stackoverflow: "bg-[#f48024] hover:bg-[#d66d18]",
  kaggle: "bg-[#20beff] hover:bg-[#00a8ea]",
  whatsapp: "bg-[#25d366] hover:bg-[#1eb956]"
};

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 text-2xl">
      {CONTACTS.map(({key, href, icon, className}) => {
        const brandKey = className || key;
        const bgClass = BG_COLORS[brandKey] || "bg-[#333]";

        return href ? (
          <a
            key={key}
            href={href}
            className={`inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full text-white text-lg transition-transform duration-200 hover:scale-110 hover:shadow-md ${bgClass}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={key}
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        ) : null;
      })}
    </div>
  );
}
