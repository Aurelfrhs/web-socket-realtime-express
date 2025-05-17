import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { Select, MenuItem, InputLabel, Grid } from '@mui/material';
import { CardRegister, SignInContainer} from "../utils/style"
import Divider from '@mui/material/Divider';

const Register = () => {
  return (
    <div>
        <CssBaseline enableColorScheme />
        <SignInContainer direction="column" justifyContent="space-between">
        <CardRegister variant="outlined">
        <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign up
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: 2,
            }}
          >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
            <Grid size={6} marginTop={1}>
            <FormControl fullWidth>
              <FormLabel htmlFor="email">Username</FormLabel>
              <TextField
                // error={emailError}
                // helperText={emailErrorMessage}
                id="user"
                type="user"
                name="user"
                placeholder="Username"
                autoComplete="user"
                autoFocus
                required
                fullWidth
                variant="outlined"
                // color={emailError ? 'error' : 'primary'}
                />
                </FormControl>
                </Grid>
            <Grid size={6} marginTop={1}>
                <FormControl fullWidth>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                // error={emailError}
                // helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                // color={emailError ? 'error' : 'primary'}
                />
            </FormControl>
            </Grid>
            
            <Grid size={6} marginTop={1}>
            <FormControl fullWidth>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                // error={passwordError}
                // helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                // color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            </Grid>
            <Grid size={6} marginTop={1}>
            <FormControl fullWidth>
              <FormLabel htmlFor="firstname">FirstName</FormLabel>
              <TextField
                // error={firstnameError}
                // helperText={firstnameErrorMessage}
                name="firstname"
                placeholder="FirstName"
                type="firstname"
                id="firstname"
                autoComplete="current-firstname"
                autoFocus
                required
                fullWidth
                variant="outlined"
                // color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            </Grid>

            <FormControl fullWidth>
              <FormLabel htmlFor="lastname">LastName</FormLabel>
              <TextField
                // error={lastnameError}
                // helperText={lastnameErrorMessage}
                name="lastname"
                placeholder="LastName"
                type="lastname"
                id="lastname"
                autoComplete="current-lastname"
                autoFocus
                required
                fullWidth
                variant="outlined"
                // color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>

            <Grid size={6} marginTop={1}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label-class">Class</InputLabel>
            <Select
                labelId="demo-simple-select-label-class"
                id="demo-simple-select"
                // value={class}
                label="Class"
                // onChange={handleChange}
            >
                <MenuItem value={"X"}>X</MenuItem>
                <MenuItem value={"XI"}>XI</MenuItem>
                <MenuItem value={"XII"}>XII</MenuItem>
            </Select>
            </FormControl>
            </Grid>

            <Grid size={6} marginTop={1}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label-gender">Gender</InputLabel>
            <Select
                labelId="demo-simple-select-label-gender"
                id="demo-simple-select"
                // value={gender}
                label="Gender"
                // onChange={handleChange}
            >
                <MenuItem value={"MALE"}>MALE</MenuItem>
                <MenuItem value={"FEMALE"}>FEMALE</MenuItem>
            </Select>
            </FormControl>
            </Grid>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label-major">Major</InputLabel>
            <Select
                labelId="demo-simple-select-label-major"
                id="demo-simple-select"
                // value={major}
                label="Major"
                // onChange={handleChange}
                >
                <MenuItem value={"PPLG"}>PPLG</MenuItem>
                <MenuItem value={"DKV"}>DKV</MenuItem>
                <MenuItem value={"TKJT"}>TKJT</MenuItem>
                <MenuItem value={"TBSM"}>TBSM</MenuItem>
                <MenuItem value={"TKRO"}>TKRO</MenuItem>
                <MenuItem value={"HR"}>HR</MenuItem>
            </Select>
            </FormControl>
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              //   onClick={validateInputs}
            >
              Sign in
            </Button>
            <Link
              component="button"
              type="button"
            //   onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              Forgot your password?
            </Link>
          </Box>
          <Divider>or</Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography sx={{ textAlign: 'center' }}>
              Have account?{' '}
              <Link
                href="/login"
                variant="body2"
                sx={{ alignSelf: 'center' }}
              >
                Sign in
              </Link>
            </Typography>
          </Box>
        </CardRegister>
        </SignInContainer>
    </div>
  )
}

export default Register