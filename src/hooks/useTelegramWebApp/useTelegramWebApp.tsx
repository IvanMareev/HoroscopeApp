import { useState } from "react";

interface TelegramWebApp {
    initData: string;
}

export default function useTelegramWebApp(): TelegramWebApp | null {
    const [telegramWebApp, setTelegramWebApp] = useState<TelegramWebApp | null>(window.Telegram?.WebApp || null);
    return telegramWebApp;
}
