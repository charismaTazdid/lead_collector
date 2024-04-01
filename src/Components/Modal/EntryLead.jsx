import { useState } from 'react'
import {
  Box,
  Divider,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from '@mui/material'
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp'

import { BootstrapDialog } from './Helper'
// import axios from 'axios'
// import { useDispatch } from 'react-redux';
// import { createProduct } from '../../Actions/productAction';
import CancelIcon from '@mui/icons-material/Cancel'

const EntryLead = () => {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  // const dispatch = useDispatch();

  const [productData, setProductData] = useState({
    productName: '',
    unit: '',
    price: '',
    currentStock: '',
    imageUrl: '',
    categoryId: ''
  })

  const handleSaveProduct = () => {
    const { productName, currentStock, price } = productData
    if (!productName || !currentStock || !price) {
      alert(
        'দয়াকরে করে সব প্রয়োজনীয় ক্ষেত্রগুলি পূরণ করুন: পণ্যের নাম, বর্তমান স্টক এবং মূল্য৷'
      )
      return
    }

    // const newProduct = { ...productData, categoryId: categoryId }
    // dispatch(createProduct(categoryId, newProduct));
    setOpen(false)
    setProductData({
      productName: '',
      unit: '',
      price: '',
      currentStock: '',
      imageUrl: '',
      categoryId: ''
    })
  }

  return (
    <Box>
      <Button
        variant='outlined'
        sx={{ ml: 3, mt: 3, mb: 3, p: 1, px: 3, width: 300, height: 50 }}
        style={{ color: '#0A3D62', border: '1px solid #0A3D62' }}
        onClick={handleClickOpen}
        endIcon={<AddBoxSharpIcon />}
      >
        Entry New Lead
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            mt: 1,
            mr: 1.5
          }}
        >
          <Button color='error'>
            <CancelIcon
              onClick={() => setOpen(false)}
              sx={{ color: '#b8042b', fontSize: 38, cursor: 'pointer' }}
            />
          </Button>
        </Box>

        <Divider
          sx={{
            marginTop: 3,
            color: '#2B2B52',
            fontSize: '20px',
            fontWeight: 'bold'
          }}
        >
          Create New Lead
        </Divider>
        <DialogContent
          sx={{
            minWidth: '500px',
            mb: 6,
            mt: 2,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box flex={3}>
            <TextField
              onChange={e =>
                setProductData({ ...productData, productName: e.target.value })
              }
              label='Company / Organization Name'
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
              label='Website Address'
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
              label='Primary Email'
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
              label='Seconary Email'
              color='secondary'
              fullWidth
              sx={{ my: 2 }}
              required
            />
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
