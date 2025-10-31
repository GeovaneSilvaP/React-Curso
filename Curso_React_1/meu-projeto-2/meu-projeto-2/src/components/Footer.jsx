import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer>
        <ul className={styles.social_list}>
          <li className={styles.social_list_li}><FaFacebook/></li>
          <li className={styles.social_list_li}><FaInstagram/></li>
          <li className={styles.social_list_li}><FaLinkedin/></li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
