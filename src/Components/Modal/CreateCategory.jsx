import { useState } from 'react'
import Button from '@mui/material/Button'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { Box, Divider, TextField } from '@mui/material'
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp'
import { BootstrapDialog } from './Helper'
import { createCategory } from '../../Actions/categoryAction.js';
import { useDispatch } from 'react-redux';
import CancelIcon from '@mui/icons-material/Cancel'

const CreateCategory = () => {

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true)
  };
  const handleClose = () => {
    setOpen(false)
  };
  const dispatch = useDispatch();

  const [categoryName, setCategoryName] = useState('');

  const handleSaveCategory = () => {
    dispatch(createCategory(categoryName));
    setOpen(false)
  };

  return (
    <Box>
      <Button
        variant='outlined'
        sx={{ ml: 3, mt: 3, mb: 3, p: 1, px: 3, width: 300, height: 50 }}
        style={{ color: 'black', border: '1px solid black' }}
        onClick={handleClickOpen}
        endIcon={<AddBoxSharpIcon />}
      >
        Create New Category
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        {/* Cancle Icon */}
        <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', mt: 1, mr: 1.5 }}>
          <Button color='error'>
            <CancelIcon
              onClick={() => setOpen(false)}
              sx={{ color: '#b8042b', fontSize: 38, cursor: 'pointer' }}
            />
          </Button>
        </Box>
        <Divider sx={{ marginTop: 3, fontSize: '17px', fontWeight: 'bold' }}>
          Create New Lead Category
        </Divider>
        <DialogContent sx={{ minWidth: '310px', mt: 6, mb: 6, mx: 5 }}>
          <TextField
            onChange={(e) => setCategoryName(e.target.value)}
            label='New Category'
            fullWidth
            sx={{ color: '#192A56' }}
          />
        </DialogContent>
        <DialogActions
          sx={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}
        >
          <Button
            autoFocus
            onClick={handleSaveCategory}
            disabled={!categoryName}
            style={categoryName ? saveBtn : {}}
          >
            Save Category
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  )
}
export default CreateCategory

//#192A56
const saveBtn = {
  backgroundColor: '#192A56',
  color: 'white',
  padding: '10px 90px',
  fontWeight: 'bold'
}
