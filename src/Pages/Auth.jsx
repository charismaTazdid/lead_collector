import { useState } from 'react';
import { Alert, AlertTitle, Box, Button, IconButton, InputAdornment, Paper, TextField } from '@mui/material';
import logo from '../images/logo.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Login } from '../Actions/AuthActions';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = useState(false);
  const [isEmptyField, setIsEmptyField] = useState(false);
  const { isError, errorMessage } = useSelector(state => state.auth)

  const [showPassword, setShowPassword] = useState(false)
  const [userData, setUserData] = useState({ userName: '', password: '' })
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      document.getElementById('login').click()
    }
  }

  const handleLogin = () => {
    if (!userData.userName) {
      setIsEmptyField(true)
      setOpenAlert(true)
    } else if (!userData.password) {
      setIsEmptyField(true)
      setOpenAlert(true)
    } else {
      setIsEmptyField(false)
      dispatch(Login(userData, navigate, setOpenAlert))
    }
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <Box height={'100vh'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: "linear-gradient(to right, #2F363F, #47535E)" }}>

      {isError && openAlert ? (
        <Box sx={{ minWidth: 350 }}>
          <Alert
            severity='error'
            onClose={() => {
              setOpenAlert(false)
            }}
          >
            <AlertTitle> Login Failed!!!!!</AlertTitle>
            <strong> {errorMessage} </strong>
          </Alert>
        </Box>
      ) : (
        <></>
      )}

      {openAlert && isEmptyField && !userData.userName ? (
        <Box sx={{ minWidth: 350 }}>
          <Alert
            severity='warning'
            onClose={() => {
              setOpenAlert(false)
            }}
          >
            <AlertTitle>Empty Field</AlertTitle>
            <strong>User name is required! </strong>
          </Alert>
        </Box>
      ) : (
        openAlert &&
        isEmptyField &&
        !userData.password && (
          <Box sx={{ minWidth: 350 }}>
            <Alert
              severity='warning'
              onClose={() => {
                setOpenAlert(false)
              }}
            >
              <AlertTitle>Empty Field</AlertTitle>
              <strong>Password is required! </strong>
            </Alert>
          </Box>
        )
      )}

      <Paper
        sx={{ px: 10, pt: 3, pb: 2, backgroundColor: '#2C3335' }}
        elevation={15}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          <Box>
            <img src={logo} alt='our logo' style={{ height: '110px' }} />
          </Box>
        </Box>

        <TextField
          label='User Name'
          color='warning'
          name='userName'
          variant='standard'
          type='text'
          onClick={() => setOpenAlert(false)}
          onChange={e =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
          sx={{ width: 230, mb: 3 }}
          InputProps={{
            style: { color: 'white' }, // Set the text color to white
            sx: { letterSpacing: '2px' }
          }}
          InputLabelProps={{
            style: { color: 'orange' }
          }}
        />
        <br />
        <TextField
          required
          label='Password'
          name='password'
          color='warning'
          type={showPassword ? 'text' : 'password'}
          variant='standard'
          onClick={() => setOpenAlert(false)}
          onChange={e =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
          onKeyDown={handleKeyDown}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={handleTogglePassword} edge='end' sx={{ '&:focus': { outline: 'none' } }}>
                  {showPassword ? (
                    <VisibilityIcon color='warning' sx={{ outline: "none", border: "none" }} />
                  ) : (
                    <VisibilityOffIcon color='warning' sx={{ outline: "none", border: "none" }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
            style: { color: "white", }, // Set the text color to white
            sx: { letterSpacing: '2px' }
          }}
          InputLabelProps={{
            style: { color: 'orange' } // Set the label color to white
          }}
        />
        <br />
        <Box mt={4} mb={7} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}  >
          <Button id='login' color='warning' sx={{ outline: "none" }} variant='contained' fullWidth onClick={handleLogin} >
            Log In
          </Button>

          <Button onClick={() => navigate("/create-lead")} variant='contained' color='inherit' sx={{ mt: 2 }}>
            Get In
          </Button>
        </Box>

        <Box
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography variant='body' fontWeight={900} gutterBottom>
              Made with <span style={{ color: 'red' }}>❤</span> by
              <span>
                <a
                  href='https://www.linkedin.com/in/raihan-tazdid'
                  target='_blank'
                  style={{ textDecoration: 'none' }}
                  rel='noreferrer'
                >
                  {' '}
                  Raihan Tazdid{' '}
                </a>
              </span>
            </Typography>
          </Box> */}
        </Box>
      </Paper>
    </Box>
  )
}
export default Auth
