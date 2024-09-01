import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./root.module.css"
import { useLanguage } from "../Providers/LanduageContext";

export default function Root() {
  const location = useLocation();
  const [currentPath] = useState(location.pathname);
  const [linkPath, setLinkPath] = useState<string>("/");
  const [linkName, setLinkName] = useState<string>("");
  const { translations } = useLanguage();
  const buttonToZodiacSigns = translations.welcomePage.buttonToZodiacSigns;
  const buttonToWelcomePage = translations.zodiacSignsList.buttonToWelcomePage;

  useEffect(() => {
    if (currentPath === "/") {
      setLinkPath("/ZodiacSignsList");
      setLinkName(buttonToZodiacSigns);
    } else {
      setLinkPath("/");
      setLinkName(buttonToWelcomePage);
    }
  }, [currentPath,buttonToZodiacSigns,buttonToWelcomePage]);


  return (
    <div id="sidebar">
      <nav>
        <a className={styles.GetStarted} href={linkPath}>{linkName}</a>
      </nav>
    </div>
  );
}
