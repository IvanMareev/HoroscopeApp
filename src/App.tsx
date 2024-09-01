import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import './App.css'
import useTelegramWebApp from './hooks/useTelegramWebApp/useTelegramWebApp';
import Root from './routes/Root'; // компонент, который будет рендериться на корневом маршруте
import { StrictMode, useState } from 'react';
import ZodiacSignsList from './components/ZodiacSignsList/ZodiacSignsList';
import { HelloPage } from './components/HelloGage';
import { LanguageProvider } from './Providers/LanduageContext';



function App() {
  const telegramWebApp = useTelegramWebApp();
  const [language, setLanguage] = useState("en");

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <>
          <HelloPage />
          <Root />
        </>,
    },
    {
      path: "ZodiacSignsList",
      element: <>
        <Root />
        <ZodiacSignsList language={language} />
      </>,
    }
  ]);

  //@ts-ignore
  const languageCode: 'ru' | 'en' = telegramWebApp?.initDataUnsafe?.user?.language_code === "ru" ? "ru" : 'en' || 'en';


  return (
    <StrictMode>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </StrictMode>
  );
}

export default App;
