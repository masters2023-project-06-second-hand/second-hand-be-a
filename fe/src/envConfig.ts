const {
  VITE_APP_API_URL,
  VITE_APP_GOOGLE_LOGIN_BUTTON_URL,
  VITE_APP_NAVER_LOGIN_BUTTON_URL,
  VITE_APP_CHAT_SOCKET_URL,
} = import.meta.env;

export const BASE_API_URL = VITE_APP_API_URL || '';

export const GOOGLE_LOGIN_BUTTON_URL = VITE_APP_GOOGLE_LOGIN_BUTTON_URL;
export const NAVER_LOGIN_BUTTON_URL = VITE_APP_NAVER_LOGIN_BUTTON_URL;
export const CHAT_SOCKET_URL = VITE_APP_CHAT_SOCKET_URL;
