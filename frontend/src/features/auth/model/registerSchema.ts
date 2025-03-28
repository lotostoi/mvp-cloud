import * as yup from 'yup';
import type { InferType } from 'yup';

export const registerSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

export type RegisterFormType = InferType<typeof registerSchema>;
