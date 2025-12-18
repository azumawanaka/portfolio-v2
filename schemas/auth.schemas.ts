import * as Yup from 'yup';

export const signupSchema = Yup.object({
  fullName: Yup.string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be at most 100 characters')
    .required('Full name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  jobSearchFocus: Yup.object().nullable(),
  sendTips: Yup.boolean(),
});

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  keepSignedIn: Yup.boolean(),
});
