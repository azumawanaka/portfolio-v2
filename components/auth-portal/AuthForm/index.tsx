import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  FormHelperText,
} from '@mui/material';
import { useFormik } from 'formik';
import AuthNote from '../AuthNote';
import { loginSchema } from 'schemas/auth.schemas';
import { AuthTabInterface } from 'interfaces/action.interfaces';

const AuthForm = ({ setAuthTabValue }: AuthTabInterface) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      keepSignedIn: false,
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      // Handle login submission
      console.log('Login values:', values);
      // Add API call here
      // Example: loginUser(values.email, values.password, values.keepSignedIn)
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <Box className='auth-form' mt={2}>
        <FormControl
          variant='standard'
          fullWidth
          error={formik.touched.email && Boolean(formik.errors.email)}
          sx={{ mb: 2 }}
        >
          <label htmlFor='email-input'>Email</label>
          <Input
            id='email-input'
            name='email'
            type='email'
            placeholder='juandelacruz@example.com'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            autoComplete='email'
          />
          {formik.touched.email && formik.errors.email && (
            <FormHelperText>{formik.errors.email}</FormHelperText>
          )}
        </FormControl>

        <FormControl
          variant='standard'
          fullWidth
          error={formik.touched.password && Boolean(formik.errors.password)}
          sx={{ mb: 2 }}
        >
          <label htmlFor='password-input'>
            Password
            <a
              href='#'
              onClick={(e) => {
                e.preventDefault();
                console.log('Forgot password clicked');
              }}
              style={{
                fontSize: '0.75rem',
                marginLeft: '8px',
                color: '#1976d2',
                textDecoration: 'none',
              }}
            >
              Forgot password?
            </a>
          </label>
          <Input
            id='password-input'
            name='password'
            type='password'
            placeholder='*******'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            autoComplete='current-password'
          />
          {formik.touched.password && formik.errors.password && (
            <FormHelperText>{formik.errors.password}</FormHelperText>
          )}
        </FormControl>

        <FormGroup className='auth-checkbox-label' sx={{ mb: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                name='keepSignedIn'
                checked={formik.values.keepSignedIn}
                onChange={formik.handleChange}
                color='primary'
              />
            }
            label='Keep me signed in on this device.'
          />
        </FormGroup>

        <Button
          type='submit'
          variant='contained'
          fullWidth
          className='auth-submit-button'
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? 'Logging in...' : 'Log in to JobFlow'}
        </Button>

        <AuthNote setAuthTabValue={setAuthTabValue} />
      </Box>
    </form>
  );
};

export default AuthForm;
