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
import { loginSchema } from '@/schemas/auth.schemas';
import { AuthTabInterface } from '@/interfaces/action.interfaces';
import { StyledAuthForm } from './style';

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
    <>
      <StyledAuthForm onSubmit={formik.handleSubmit} noValidate>
        <Box mt={2}>
          <FormControl
            variant='standard'
            fullWidth
            error={formik.touched.email && Boolean(formik.errors.email)}
            sx={{ mb: 2 }}
          >
            <label htmlFor='email'>Email</label>
            <Input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              placeholder='juandelacruz@example.com'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
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
            <label htmlFor='password'>
              Password
              <a
                href='#'
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Forgot password clicked');
                }}
              >
                Forgot password?
              </a>
            </label>
            <Input
              id='password'
              name='password'
              type='password'
              placeholder='*******'
              autoComplete='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
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
                />
              }
              label='Keep me signed in on this device.'
            />
          </FormGroup>

          <Button
            type='submit'
            variant='contained'
            className='auth-submit-button'
            disabled={!formik.isValid || formik.isSubmitting}
            fullWidth
          >
            {formik.isSubmitting ? 'Logging in...' : 'Log in to JobFlow'}
          </Button>
        </Box>
      </StyledAuthForm>

      <AuthNote setAuthTabValue={setAuthTabValue} />
    </>
  );
};

export default AuthForm;
