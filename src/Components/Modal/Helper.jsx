import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault'

// Helper component for Modal

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  },
  '& .MuiDialog-paper': {
    width: 1000,
    maxWidth: 'none'
  },
  '& .MuiBackdrop-root': {
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  }
}))

export function BootstrapDialogTitle (props) {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle
      sx={{ m: 0, p: 2, width: 900, textAlign: 'center' }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            borderRadius: 3,
            px: 3,
            mb: 2
          }}
        >
          <DisabledByDefaultIcon fontSize='40px' color='error' />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
}
