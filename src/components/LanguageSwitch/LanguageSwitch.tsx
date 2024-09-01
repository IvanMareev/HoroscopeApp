import styles from './LanguageSwitch.module.css';
import { useLanguage } from '../../Providers/LanduageContext';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className={styles.languageSwitchContainer}>
      {language == 'ru' ? "Выберете язык приложения" : "Chose language for app"}
      <button
        className={styles.languageSwitchButton}
        onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
        style={{ backgroundColor: language === 'ru' ? '#4CAF50' : '#f44336' }}
      >
        {language === 'ru' ? 'English' : 'Русский'}
      </button>
    </div>
  );
}
