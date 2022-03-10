import facebook from "./images/facebook.svg";
import pinterest from "./images/pinterest.svg";
import instagram from "./images/instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <a href="/">
        <img src={facebook} alt="" />
      </a>

      <a href="/">
        <img src={pinterest} alt="" />
      </a>

      <a href="/">
        <img src={instagram} alt="" />
      </a>
    </div>
  );
};

export default Footer;
