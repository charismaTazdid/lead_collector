import { useEffect, useState } from 'react';
import { Box, Divider, DialogContent, DialogActions, TextField, Button, Typography, Menu, MenuItem, FormControl, Select } from '@mui/material';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import CancelIcon from '@mui/icons-material/Cancel';
import { BootstrapDialog } from './Helper';
import { createLead } from '../../Actions/leadAction';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Actions/categoryAction';

const EntryLead = () => {

  const { categories } = useSelector((state) => state.categories)

  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  };
  const handleClose = () => {
    setOpen(false)
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const [leadData, setLeadData] = useState({ companyName: "", categoryName: "", country: "", website: "", primaryEmail: "", secondaryEmail: "", phone: "", whatsApp: "", socialUrl: "", linkedinUrl: "", employee: "", employeeContact: "", othersInfo: "" });

  // const formatString = (str) => {
  //   let formattedString = str.toLowerCase();
  //   formattedString = formattedString.replace(/\s+/g, '').replace(/-/g, '');
  //   return formattedString;
  // };

  const handleSaveLead = () => {
    const { companyName, website } = leadData;
    if (!companyName || !website) {
      alert('Company Name, Category, Country and Website is Required');
      return
    }
    dispatch(createLead(leadData));
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getAllCategory())
  }, []);

  return (
    <Box>
      <Button
        variant='outlined'
        sx={{ ml: 3, mt: 3, mb: 3, p: 1, px: 3, width: 350, height: 50, }}
        style={{ color: 'black', fontWeight: "bold", border: '1px solid #F3B63A', backgroundColor: "#F3B63A", outline: 'none' }}
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
              <TextField onChange={(e) => setLeadData({ ...leadData, companyName: e.target.value })} color='success' sx={{ my: 1, width: 320 }} required variant='filled' />
            </Box>

            {/* Drop Down Menu */}
            <Box>
              <Typography>Select Category</Typography>
              <FormControl sx={{ my: 1, width: 320, py: 1, }} size='small' variant="filled">
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={leadData.categoryName}
                  label={leadData.categoryName}
                  size='small'
                  onChange={(e) => setLeadData({ ...leadData, categoryName: e.target.value })}
                >
                  {
                    categories.map((category) => (
                      <MenuItem value={category.categoryName} key={category._id}> {category.categoryName} </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-around" }}>

            <Box>
              <TextField variant='filled' label='Country' color='success' sx={{ my: 1, py: 1, width: 320 }} required onChange={(e) => setLeadData({ ...leadData, country: e.target.value })} size='small' />
            </Box>


            <Box>
              <TextField variant='filled' label='Website Address' color='success' sx={{ my: 1, width: 320, py: 1, }} size='small' required onChange={(e) => setLeadData({ ...leadData, website: e.target.value })} />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <TextField label='Primary Email' variant='filled' color='success' sx={{ my: 1, width: 320, py: 1, }} size='small' onChange={(e) => setLeadData({ ...leadData, primaryEmail: e.target.value })} />
            <TextField label='Seconary Email (optional)' variant='filled' color='success' sx={{ my: 1, width: 320, py: 1, }} size='small' onChange={(e) => setLeadData({ ...leadData, secondaryEmail: e.target.value })} />
          </Box>

          {/* Phone */}
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <TextField label='Phone (optional)' color='success' fullWidth variant='filled' sx={{ my: 1, width: 320, py: 1, }} size='small' onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })} />

            <TextField label='Whatsapp (optional)' color='success' variant='filled' fullWidth sx={{ my: 1, width: 320, py: 1, }} size='small' onChange={(e) => setLeadData({ ...leadData, whatsApp: e.target.value })} />
          </Box>

          {/* Social Media */}
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <TextField label='Facebook/insta/twitter url (optional)' color='success' fullWidth variant='filled' size='small' sx={{ width: 320, py: 1, }} onChange={(e) => setLeadData({ ...leadData, socialUrl: e.target.value })} />

            <TextField label='Linkedin url (optional)' color='success' variant='filled' fullWidth sx={{ width: 320, py: 1, }} size='small' onChange={(e) => setLeadData({ ...leadData, linkedinUrl: e.target.value })} />
          </Box>

          {/* Manager/ Employee */}
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <TextField label='Employee / Manager Name (if found)' color='success' fullWidth variant='filled' size='small' sx={{ width: 320, py: 1, }} onChange={(e) => setLeadData({ ...leadData, employee: e.target.value })} />

            <TextField label='Employee Social Link or Email (if found)' color='success' variant='filled' fullWidth sx={{ width: 320, py: 1, }} onChange={(e) => setLeadData({ ...leadData, employeeContact: e.target.value })} />
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
