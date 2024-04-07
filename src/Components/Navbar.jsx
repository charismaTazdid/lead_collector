import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../constant/actionTypes';

const pages = ['Create Lead', 'View Lead', 'Dashboard']

const Navbar = () => {
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null)
  const userData = JSON.parse(localStorage.getItem('profile'))

  const navigate = useNavigate()
  const location = useLocation()

  const handlePath = str => {
    const path = str.replaceAll(' ', '-').toLowerCase()
    if (path[0] === '/') {
      return path.substring(1)
    }
    return path
  }

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleLogout = () => {
    dispatch({ type: LOGOUT })
    navigate('/')
  }

  return (
    <AppBar
      position='sticky'
      sx={{ backgroundColor: '#121212', width: '100%' }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {/* Respnsive Nav Menu */}
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button onClick={() => navigate(`/${handlePath(page)}`)}>
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Desktop View NavMenue */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <Button
                variant='string'
                key={page}
                onClick={() => navigate(`/${handlePath(page)}`)}
                sx={{
                  my: 2,
                  mx: 1,
                  color:
                    handlePath(page) === handlePath(location.pathname)
                      ? '#0A3D62'
                      : 'orange',
                  backgroundColor:
                    handlePath(page) === handlePath(location.pathname)
                      ? '#EAF0F1'
                      : 'inherit',
                  display: 'block',
                  border: '1px solid #121200',
                  '&:hover': {
                    color: '#EAF0F1',
                    backgroundColor: 'inherit',
                    border: '1px solid #EAF0F1'
                  }
                }}
              >
                {page}
              </Button>
            ))}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {userData ? (
                <Button
                  size='medium'
                  variant='contained'
                  color='error'
                  onClick={handleLogout}
                >
                  {' '}
                  Logout{' '}
                </Button>
              ) : (
                <Button
                  size='medium'
                  variant='contained'
                  color='primary'
                  onClick={() => navigate('/')}
                >
                  {' '}
                  Home{' '}
                </Button>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
