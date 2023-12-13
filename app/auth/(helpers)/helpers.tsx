import React from 'react';
import { LoginForm, LoginFormError } from './types';

export const isEmpty = (param: string | null | any) =>
  param === null || typeof param === 'undefined' || param.length == 0;

export const clearCookie = () => {
  document.cookie.split(';').forEach(function (c) {
    document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
  });
};

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

export const validateLogin = (form: LoginForm, setFormError: React.Dispatch<React.SetStateAction<LoginFormError>>) => {
  if (isEmpty(form.email)) {
    setFormError((prev) => ({ ...prev, email: { status: true, message: 'Please fill out this field' } }));
    return;
  }
  if (isEmpty(form.password)) {
    setFormError((prev) => ({ ...prev, password: { status: true, message: 'Please fill out this field' } }));
    return;
  }
};
