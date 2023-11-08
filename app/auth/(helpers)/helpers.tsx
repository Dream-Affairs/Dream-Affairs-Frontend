export const isEmpty = (param: string | null | any) =>
  param === null || typeof param === 'undefined' || param.length == 0;

export const passwordChecker = (str: string) => {
  let message = '';
  if (str.length < 8) {
    message = 'Password must be at least 8 characters long';
  } else if (!/\d/.test(str)) {
    message = 'Password must contain a number';
  } else if (!/[!@#$%^&*]/.test(str)) {
    message = 'Password must contain a special character';
  } else if (!/[A-Z]/.test(str)) {
    message = 'Password must contain a capital letter';
  }
  return message;
};

export const isValidEmail = (str: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
};
