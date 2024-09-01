interface TelegramUser {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}

interface TelegramWebApp {
  language_code: string;
  initData: string;
  initDataUnsafe: {
    query_id: string;
    user: TelegramUser;
    receiver: TelegramUser;
    chat_instance: string;
    start_param?: string;
  };
  colorScheme: 'light' | 'dark';
  themeParams: Record<string, any>;
  isExpanded: boolean;
  isClosingConfirmationEnabled: boolean;
  platform: string;
  version: string;
  viewportHeight: number;
  viewportStableHeight: number;
  ready: () => void;
  close: () => void;
  expand: () => void;
  sendData: (data: string) => void;
  showPopup: (message: string) => void;
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp;
  };
}
