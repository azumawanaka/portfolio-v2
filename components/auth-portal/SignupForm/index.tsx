import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
  TextField,
  FormHelperText,
} from '@mui/material';
import { useFormik } from 'formik';

import { AuthTabInterface } from '@/interfaces/action.interfaces';
import { signupSchema } from '@/schemas/auth.schemas';

import { StyledAuthForm } from '../AuthForm/style';
import AuthNote from '../AuthNote';

const options = [
  {
    label: 'Product Manager in Berlin, remote friendly',
    value: 'pm-berlin-remote',
  },
  {
    label: 'Software Engineer in San Francisco, onsite',
    value: 'se-sf-onsite',
  },
  { label: 'Data Scientist in New York, hybrid', value: 'ds-ny-hybrid' },
  {
    label: 'UX Designer in London, remote friendly',
    value: 'ux-london-remote',
  },
  {
    label: 'Marketing Specialist in Toronto, onsite',
    value: 'ms-toronto-onsite',
  },
];

const SignupForm = ({ setAuthTabValue }: AuthTabInterface) => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      jobSearchFocus: null as { label: string; value: string } | null,
      sendTips: true,
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log('Form values:', values);
      const submitData = {
        ...values,
        jobSearchFocus: values.jobSearchFocus?.value || '',
      };

      console.log('Submit data:', submitData);

      // Add API call here
    },
  });

  return (
    <StyledAuthForm onSubmit={formik.handleSubmit} noValidate>
      <Box mt={2}>
        <FormControl
          variant='standard'
          fullWidth
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
        >
          <label htmlFor='fullName'>Fullname</label>
          <Input
            id='fullName'
            name='fullName'
            placeholder='Juan de la Cruz'
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <FormHelperText>{formik.errors.fullName}</FormHelperText>
          )}
        </FormControl>

        <Grid container spacing={2} sx={{ mt: 0 }}>
          <Grid item xs={12} sm={6}>
            <FormControl
              variant='standard'
              fullWidth
              error={formik.touched.email && Boolean(formik.errors.email)}
            >
              <label htmlFor='email'>Email</label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='juandelacruz@example.com'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete='email'
                fullWidth
              />
              {formik.touched.email && formik.errors.email && (
                <FormHelperText>{formik.errors.email}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              variant='standard'
              fullWidth
              error={formik.touched.password && Boolean(formik.errors.password)}
            >
              <label htmlFor='password'>
                Password
                <span>+8 characters</span>
              </label>
              <Input
                type='password'
                id='password'
                name='password'
                placeholder='*******'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete='password'
                fullWidth
              />
              {formik.touched.password && formik.errors.password && (
                <FormHelperText>{formik.errors.password}</FormHelperText>
              )}
            </FormControl>
          </Grid>
        </Grid>

        <FormControl
          variant='standard'
          fullWidth
          sx={{ mt: 2 }}
          error={
            formik.touched.jobSearchFocus &&
            Boolean(formik.errors.jobSearchFocus)
          }
        >
          <Autocomplete
            id='jobSearchFocus'
            options={options}
            getOptionLabel={(option) => option.label}
            value={formik.values.jobSearchFocus}
            onChange={(_, value) => {
              formik.setFieldValue('jobSearchFocus', value);
            }}
            onBlur={() => formik.setFieldTouched('jobSearchFocus', true)}
            isOptionEqualToValue={(option, value) =>
              option.value === value?.value
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant='standard'
                label='Job search focus'
                placeholder='e.g. Product Manager in Berlin, remote friendly'
                InputLabelProps={{
                  ...params.InputLabelProps,
                  shrink: true,
                }}
                error={
                  formik.touched.jobSearchFocus &&
                  Boolean(formik.errors.jobSearchFocus)
                }
                helperText={
                  formik.touched.jobSearchFocus && formik.errors.jobSearchFocus
                }
              />
            )}
          />
        </FormControl>

        <FormGroup className='auth-checkbox-label' sx={{ mt: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                name='sendTips'
                checked={formik.values.sendTips}
                onChange={formik.handleChange}
              />
            }
            label='Send me occasional tips on JobFlow and job searching updates.'
          />
        </FormGroup>

        <Button
          type='submit'
          variant='contained'
          fullWidth
          className='auth-submit-button'
          sx={{ mt: 2 }}
          disabled={!formik.isValid || formik.isSubmitting}
        >
          {formik.isSubmitting ? 'Signing up...' : 'Sign up to JobFlow'}
        </Button>

        <AuthNote
          note='Already have an account?'
          linkLabel='Log in here'
          setAuthTabValue={setAuthTabValue}
        />
      </Box>
    </StyledAuthForm>
  );
};

export default SignupForm;
