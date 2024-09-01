import { LanguageTranslations, useLanguage, ZodiacSignData } from '../../Providers/LanduageContext';
import { ZodiacSign } from '../ZodiacSign/ZodiacSign';
import style from './ZodiacSignsList.module.css'

interface ZodiacSignsListProps {
    language: string
}

function ZodiacSignsList({ language }: ZodiacSignsListProps) {
    const { translations } = useLanguage();
    const WelcomePage = translations.welcomePage
    const zodiacSignsData: ZodiacSignData[] = translations.zodiacSignsData;
    return (
        <div className={style.ZodiacSignsList}>
            <h3>{WelcomePage.welcomePhrase}</h3>
            {zodiacSignsData.map((sign, index) => (
                <ZodiacSign
                    key={index}
                    nameEn={sign.nameEn?sign.nameEn:"ENG"}
                    name={sign.name}
                    symbol={sign.symbol}
                    language={language}
                />
            ))}
        </div>
    );
};

export default ZodiacSignsList;
