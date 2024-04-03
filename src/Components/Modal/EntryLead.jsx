import { useState } from 'react';
import { Box, Divider, DialogContent, DialogActions, TextField, Button, Typography, Menu, MenuItem, InputLabel, FormControl, Select } from '@mui/material';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import CancelIcon from '@mui/icons-material/Cancel';
import { BootstrapDialog } from './Helper';
import { categories } from '../../demoDb/categories';

// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { createProduct } from '../../Actions/productAction';

const EntryLead = () => {


  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }



  const [anchorEl, setAnchorEl] = useState(null);
  // const dispatch = useDispatch();

  const [leadData, setLeadData] = useState({
    companyName: "",
    category: "",
    country: "",
    website: "",
    primaryEmail: "",
    secondaryEmail: "",
    phone: "",
    whatsApp: "",
    socialUrl: "",
    linkedinUrl: "",
    employee: "",
    employeeContact: "",
    othersInfo: ""
  });

  const handleSaveLead = () => {
    const { companyName, website } = leadData;
    if (!companyName || !website) {
      alert(
        'দয়াকরে করে সব প্রয়োজনীয় ক্ষেত্রগুলি পূরণ করুন'
      )
      return
    }
    setOpen(false)
   console.log(leadData)
  };

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
        <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', mt: 1, mr: 1.5 }}>
          <Button color='error' onClick={() => setOpen(false)}>
            <CancelIcon sx={{ color: '#b8042b', fontSize: 38, cursor: 'pointer' }} />
          </Button>
        </Box>

        <Divider
          sx={{ marginTop: 1, color: '#2B2B52', fontSize: '20px', fontWeight: 'bold' }}>
          Create New Lead
        </Divider>
        <DialogContent
          sx={{ mb: 2, mt: 1, display: 'flex', flexDirection: 'column' }}>

          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box>
              <Typography> Company Name:</Typography>
              <TextField onChange={(e) => setLeadData({ ...leadData, companyName: e.target.value })} color='success' sx={{ my: 1, width: 420 }} required variant='filled' />
            </Box>

            {/* Drop Down Menu */}
            <Box>
              <Typography>Select Category</Typography>
              <FormControl sx={{ my: 1, width: 420, py: 1, }} size="medium" variant="filled">
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={leadData.category}
                  onChange={(e) => setLeadData({ ...leadData, category: e.target.value })}
                >
                  {
                    categories.map((category) => (
                      <MenuItem value={category.name} key={category.id}> {category.name} </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-around" }}>

            <Box>
              <TextField variant='filled' hiddenLabel label='Country' color='success' sx={{ my: 1, py: 1, width: 420 }} required onChange={(e) => setLeadData({ ...leadData, country: e.target.value })} />
            </Box>
            <Box>
              <TextField variant='filled' label='Website Address' color='success' sx={{ my: 1, width: 420, py: 1, }} required onChange={(e) => setLeadData({ ...leadData, website: e.target.value })} />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <TextField label='Primary Email' variant='filled' color='success' sx={{ my: 1, width: 420, py: 1, }} onChange={(e) => setLeadData({ ...leadData, primaryEmail: e.target.value })} />
            <TextField label='Seconary Email (optional)' variant='filled' color='success' sx={{ my: 1, width: 420, py: 1, }} onChange={(e) => setLeadData({ ...leadData, secondaryEmail: e.target.value })} />
          </Box>

          {/* Phone */}
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <TextField label='Phone (optional)' color='success' fullWidth variant='filled' sx={{ my: 1, width: 420, py: 1, }} onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })} />

            <TextField label='Whatsapp (optional)' color='success' variant='filled' fullWidth sx={{ my: 1, width: 420, py: 1, }} onChange={(e) => setLeadData({ ...leadData, whatsApp: e.target.value })} />
          </Box>

          {/* Social Media */}
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <TextField label='Facebook/insta/twitter url (optional)' color='success' fullWidth variant='filled' sx={{ width: 420, py: 1, }} onChange={(e) => setLeadData({ ...leadData, socialUrl: e.target.value })} />

            <TextField label='Linkedin url (optional)' color='success' variant='filled' fullWidth sx={{ width: 420, py: 1, }} onChange={(e) => setLeadData({ ...leadData, linkedinUrl: e.target.value })} />
          </Box>

          {/* Manager/ Employee */}
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <TextField label='Employee / Manager Name (if found)' color='success' fullWidth variant='filled' sx={{ width: 420, py: 1, }} onChange={(e) => setLeadData({ ...leadData, employee: e.target.value })} />

            <TextField label='Employee Social Link or Email (if found)' color='success' variant='filled' fullWidth sx={{ width: 420, py: 1, }} onChange={(e) => setLeadData({ ...leadData, employeeContact: e.target.value })} />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-around" }}>

            <TextField label='Other Information (optional)' multiline rows={2} color='success' fullWidth variant='filled' sx={{ mx: 4, py: 1, }} onChange={(e) => setLeadData({ ...leadData, othersInfo: e.target.value })} />

          </Box>
        </DialogContent>


        <DialogActions
          sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2, marginTop: -3 }}  >
          <Button autoFocus onClick={handleSaveLead} style={saveBtn}>
            Save Lead
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  )
};

export default EntryLead;

const saveBtn = {
  backgroundColor: '#2B2B52',
  color: 'white',
  padding: '10px 120px',
  fontWeight: 'bold'
}
