import { jwtDecode } from 'jwt-decode';

export const isEmpty = (param: string | null | any) =>
  param === null || typeof param === 'undefined' || param.length == 0;

const clearLocalStorage = () => {
  localStorage.removeItem('zpt');
};

function isAuthenticated(token: string) {
  if (!token || isEmpty(token)) {
    return false;
  }
  try {
    const decodedToken = jwtDecode(token);
    const expirationTime = (decodedToken as any).exp * 1000; // convert to milliseconds

    if (Date.now() >= expirationTime) {
      clearLocalStorage();
      return false;
    }

    return true;
  } catch (error) {
    clearLocalStorage();
    return false;
  }
}

export default isAuthenticated;
