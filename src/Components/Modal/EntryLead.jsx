import { useState } from 'react'
import { Box, Divider, DialogContent, DialogActions, TextField, Button, Typography, Menu, MenuItem, InputLabel, FormControl, Select } from '@mui/material'
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp'

import { BootstrapDialog } from './Helper'
// import axios from 'axios'
// import { useDispatch } from 'react-redux';
// import { createProduct } from '../../Actions/productAction';
import CancelIcon from '@mui/icons-material/Cancel'

const EntryLead = () => {
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  // const dispatch = useDispatch();

  const [productData, setProductData] = useState({ productName: '', unit: '', price: '', currentStock: '', imageUrl: '', categoryId: '' })

  const handleSaveProduct = () => {
    const { productName, currentStock, price } = productData
    if (!productName || !currentStock || !price) {
      alert(
        'দয়াকরে করে সব প্রয়োজনীয় ক্ষেত্রগুলি পূরণ করুন'
      )
      return
    }
    setOpen(false)
    setProductData({ productName: '', unit: '', price: '', currentStock: '', imageUrl: '', categoryId: '' })
  }

  return (
    <Box sx={{ minWidth: 900 }}>
      <Button
        variant='outlined'
        sx={{ ml: 3, mt: 3, mb: 3, p: 1, px: 3, width: 300, height: 50 }}
        style={{ color: '#0A3D62', border: '1px solid #0A3D62' }}
        onClick={handleClickOpen}
        endIcon={<AddBoxSharpIcon />}
      >
        Entry New Lead
      </Button>
      <BootstrapDialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open} >
        <Box sx={{ width: 1000, display: 'flex', justifyContent: 'end', alignItems: 'center', mt: 1, mr: 1.5 }}>
          <Button color='error' onClick={() => setOpen(false)}>
            <CancelIcon sx={{ color: '#b8042b', fontSize: 38, cursor: 'pointer' }} />
          </Button>
        </Box>

        <Divider
          sx={{ marginTop: 3, color: '#2B2B52', fontSize: '20px', fontWeight: 'bold' }}>
          Create New Lead
        </Divider>
        <DialogContent
          sx={{ mb: 6, mt: 2, display: 'flex', flexDirection: 'column' }}>

          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <TextField label='Company / Organization Name' color='secondary' fullWidth sx={{ my: 2, width: 450 }} required variant='filled' />
            {/* Drop Down Menu */}
            <FormControl sx={{ m: 1, width: 450 }} size="small">
              <InputLabel id="demo-select-small-label">Age</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <TextField label='Country' color='secondary' sx={{ my: 2, width: 450 }} required />
            <TextField label='Website Address' color='secondary' sx={{ my: 2, width: 450 }} required />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <TextField label='Primary Email' color='secondary' sx={{ my: 2, width: 450, }} required />
            <TextField label='Seconary Email' color='secondary' sx={{ my: 2, width: 450 }} required />
          </Box>

          {/* Phone */}
          <Box flex={3}>
            <TextField
              onChange={e =>
                setProductData({ ...productData, productName: e.target.value })
              }
              label='Phone'
              color='secondary'
              fullWidth
              sx={{ my: 2 }}
              required
            />
          </Box>
          <Box flex={3}>
            <TextField
              onChange={e =>
                setProductData({ ...productData, productName: e.target.value })
              }
              label='Whatsapp'
              color='secondary'
              fullWidth
              sx={{ my: 2 }}
              required
            />
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 10,
            marginTop: -3
          }}
        >
          <Button autoFocus onClick={handleSaveProduct} style={saveBtn}>
            Save Lead
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  )
}

export default EntryLead

const saveBtn = {
  backgroundColor: '#2B2B52',
  color: 'white',
  padding: '10px 120px',
  fontWeight: 'bold'
}
