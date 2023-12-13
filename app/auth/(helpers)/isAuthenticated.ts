import { jwtDecode } from 'jwt-decode';
import { isEmpty } from './helpers';

function isAuthenticated(token: string) {
  console.log('isAuthenticated', token);
  if (!token || isEmpty(token)) {
    console.log('no token');
    return false;
  }
  try {
    const decodedToken = jwtDecode(token);
    const expirationTime = (decodedToken as any).exp * 1000; // convert to milliseconds

    if (Date.now() >= expirationTime) {
      console.log('token expired');
      // clearCookie();
      return false;
    }

    return true;
  } catch (error) {
    console.log('token invalid');
    // clearCookie();
    return false;
  }
}

// export default isAuthenticated;
