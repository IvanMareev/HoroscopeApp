import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import useTelegramWebApp from './hooks/useTelegramWebApp/useTelegramWebApp';
import Root from './routes/Root'; // компонент, который будет рендериться на корневом маршруте
import { StrictMode, useState } from 'react';
import { HelloPage } from './components/HelloGage';
import { LanguageProvider } from './Providers/LanduageContext';
import ZodiacSignsList from './components/ZodiacSignsList/ZodiacSignsList';



function App() {
  const telegramWebApp = useTelegramWebApp();
  const [language] = useState("en");

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
