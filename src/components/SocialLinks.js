import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const SocialLinks = () => {
  let data = useSelector((store) => store.config.languageData);
  return (
    <div className="flex justify-center absolute bottom-8 w-full img-sub social">
      {data.socialLinks.map((social, index) => (
        <Link
          key={index}
          to={social.link}
          target="_blank"
          className="block py-2.5 px-4  text-gray-500 brand-hover"
        >
          <FontAwesomeIcon icon={social.icon} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
