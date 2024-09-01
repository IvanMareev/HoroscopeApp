import styles from './HelloPage.module.css';
import { useLanguage } from '../../Providers/LanduageContext';
import { LanguageSwitch } from '../LanguageSwitch';

export function HelloPage() {
  const { translations } = useLanguage();
  const WelcomePage = translations.welcomePage

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{WelcomePage.welcomePhrase}</h1>
        <p>{WelcomePage.welcomeDescription}</p>
      </header>
      <div className={styles.mainContent}>
        <p>{WelcomePage.additionalDescription}</p>
          <LanguageSwitch />
      </div>
    </div>
  );
}
