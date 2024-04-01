import { useState } from 'react'
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  
} from '@mui/material'
import logo from '../images/logo.png'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
// import { Login } from '../Actions/AuthActions'
import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'

const Auth = () => {
  const navigate = useNavigate()
  //   const dispatch = useDispatch()
  const [openAlert, setOpenAlert] = useState(false)
  const [isEmptyField, setIsEmptyField] = useState(false)

  //   const { isError, errorMessage } = useSelector(state => state.auth)
  const isError = false
  const errorMessage = 'no Error now'

  const [showPassword, setShowPassword] = useState(false)
  const [userData, setUserData] = useState({ userName: '', password: '' })
  function handleKeyDown (event) {
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
      //   dispatch(Login(userData, navigate, setOpenAlert))
    }
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <Box
      height={'100vh'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // width: { md: 1280, xs: 380 }
      }}
    >
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
        sx={{ px: 10, pt: 3, pb: 2, backgroundColor: '#DAE0E2' }}
        elevation={15}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          <Box>
            <img src={logo} alt='our logo' style={{ height: '110px' }} />
          </Box>
        </Box>

        <TextField
          label='User Name'
          name='userName'
          variant='standard'
          focused
          onClick={() => setOpenAlert(false)}
          onChange={e =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
          sx={{ width: 230, mb: 3 }}
        />
        <br />
        <TextField
          required
          label='Password'
          name='password'
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
                <IconButton onClick={handleTogglePassword} edge='end'>
                  {showPassword ? (
                    <VisibilityIcon color='inherit' />
                  ) : (
                    <VisibilityOffIcon color='inherit' />
                  )}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <br />
        <Box
          mt={4}
          mb={7}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <Button
            id='login'
            variant='contained'
            fullWidth
            onClick={handleLogin}
          >
            Log In
          </Button>

          <Button onClick={()=> navigate("/create-lead")} variant='contained' color='secondary' sx={{ mt: 2 }}>
            Get In
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
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
