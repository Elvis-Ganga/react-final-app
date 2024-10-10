import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../../styling/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://www.Twitter.com" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://www.Facebook.com" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://www.Linkedin.com" target="_blank">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2024 E-Wine-Galery.com</p>
    </div>
  );
}

export default Footer;
