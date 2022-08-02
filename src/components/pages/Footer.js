import { FormattedMessage } from "react-intl";
import "../../css/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>www.LeandroPereyra.com</p>
      <p>
        Copyright © 2022.{" "}
        <span>
          <FormattedMessage id="footer" defaultMessage="All Rights Reserved" />
        </span>
      </p>
    </div>
  );
};

export default Footer;
