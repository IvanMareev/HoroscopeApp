import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import messages_ru from '../translations/ru.json'
import messages_en from '../translations/en.json'
import useTelegramWebApp from "../hooks/useTelegramWebApp/useTelegramWebApp";


// Создание контекста
const LanguageContext = createContext<{
    language: string;
    setLanguage: (language: string) => void;
    translations: Record<string, any>;
}>({
    language: 'en',
    setLanguage: () => { },
    translations: {},
});

export interface ZodiacSignData {
    name: string;
    nameEn?:string;
    symbol: string;
}

export interface LanguageTranslations {
    welcomePage: {
        welcomePhrase: string;
        welcomeDescription: string;
        additionalDescription: string;
        buttonToZodiacSigns: string
    },
    zodiacSignsList: {
        buttonToWelcomePage: string;
        selectDateForPrediction: string;
        buttonShowPrediction: string;
        buttonToday: string;
        buttonTomorrow: string;
        buttonCustomDate: string;
    },
    modalPrediction: {
        yourPredictionFor: string;
    },
    zodiacSignsData: ZodiacSignData[];
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState('en');
    const telegramWebApp = useTelegramWebApp();
    useEffect(() => {
        //@ts-ignore
        if (telegramWebApp?.initDataUnsafe?.user?.language_code && telegramWebApp?.initDataUnsafe?.user?.language_code === "ru") {
            setLanguage('ru')
        } else {
            setLanguage('en')
        }

    }, [])

    // Переводы
    const translations: Record<string, LanguageTranslations> = {
        en: messages_en,
        ru: messages_ru,
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translations: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);
