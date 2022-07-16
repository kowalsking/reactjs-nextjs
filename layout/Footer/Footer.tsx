import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div className={styles.copyright}>
        Copyright всі права захищені (с) 1996-{format(new Date(), "yyyy")}
      </div>
      <a href="#" target="_blank" className={styles.userAgreement}>
        Згода користувача
      </a>
      <a href="#" target="_blank" className={styles.confidentialPolitics}>
        Політика конфіденційності
      </a>
    </footer>
  );
};
