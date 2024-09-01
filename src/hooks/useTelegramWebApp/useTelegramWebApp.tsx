import { useState } from "react";

interface TelegramWebApp {
    initData: string;
}

export default function useTelegramWebApp(): TelegramWebApp | null {
    const [telegramWebApp] = useState<TelegramWebApp | null>(window.Telegram?.WebApp || null);
    return telegramWebApp;
}
