import Cookies from 'js-cookie';
import { AUTH_TOKEN, EMAIL_VERIFIED } from '@lib/constants';
export function useToken() {
  return {
    setToken(token: string) {
      Cookies.set(AUTH_TOKEN, token, { expires: 1 });
    },
    getToken() {
      return Cookies.get(AUTH_TOKEN);
    },
    removeToken() {
      Cookies.remove(AUTH_TOKEN);
    },
    hasToken() {
      const token = Cookies.get(AUTH_TOKEN);
      if (!token) return false;
      return true;
    },
    setEmailVerified(emailVerified: boolean | null) {
      Cookies.set(EMAIL_VERIFIED, JSON.stringify({ emailVerified }));
    },
    getEmailVerified() {
      const emailVerified = Cookies.get(EMAIL_VERIFIED);
      return emailVerified ? JSON.parse(emailVerified) : true;
    },
  };
}
