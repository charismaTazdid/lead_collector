import React, { useState } from 'react';
import { Button, DialogContent, DialogActions, TextField, Typography, Box, MenuItem, Menu, InputAdornment, IconButton } from '@mui/material';
import { BootstrapDialog } from './Helper';
import { useDispatch } from 'react-redux';
import { GroupAdd } from '@mui/icons-material';
import CancelIcon from '@mui/icons-material/Cancel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { createNewUser } from '../../Actions/AuthActions.js';

const MakeAdminModal = () => {

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };
    const [adminData, setAdminData] = useState({ userName: "", password: "", role: "" });
    const [showPassword, setShowPassword] = useState(false);

    // manage dropdown
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleDropDown = (role) => {
        setAnchorEl(null);
        setAdminData({ ...adminData, role: role })
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMakeAdmin = () => {
        const { userName, password, role } = adminData;
        if (!userName || !password || !role) {
            alert("এডমিনের user name, পাসওয়ার্ড এবং role নির্বাচন করুন")
            return;
        }
        dispatch(createNewUser(adminData));
        setAdminData({ userName: "", password: "", role: "" })
        setOpen(false);
    };

    return (
        <>
            <Button sx={{ py: 1.3, mr: 2, mt: 1, width: "267px", fontWeight: 600, border: '1px solid #ED6C02', }} variant='outlined' color='warning' startIcon={<GroupAdd />} disableElevation onClick={handleClickOpen} >
                Add New Admin
            </Button>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ flex: 3, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                        <Box mt={2} sx={{ width: "290px", }} >
                            <Typography sx={{ fontWeight: 600, pt: 2, textAlign: "center", fontSize: 20 }}> নতুন একজন এডমিন বানান </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", mt: 1, mr: 1.5 }} >
                            <Button color='error' >
                                <CancelIcon onClick={() => setOpen(false)} sx={{ color: "#b8042b", fontSize: 38, cursor: "pointer" }} />
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <DialogContent sx={{ minWidth: "350px", mx: 4 }}>

                    <Typography fontSize={14} fontWeight={600} mt={2}>User Name </Typography>
                    <TextField
                        onChange={(e) => setAdminData({ ...adminData, userName: e.target.value })}
                        label="username"
                        fullWidth
                        sx={{ mb: "10px", mt: "5px" }}
                        color='warning'
                    />
                    <br />
                    <Typography fontSize={14} fontWeight={600}>Password </Typography>

                    <TextField
                        onChange={(e) => setAdminData({ ...adminData, password: e.target.value })}
                        value={adminData.password}
                        label="Password"
                        sx={{ mb: "10px", mt: "5px" }}
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        color='warning'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePassword} edge="end">
                                        {showPassword ? <VisibilityIcon color='warning' /> : <VisibilityOffIcon color='inherit' />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* DropDown Menu */}
                    <Box>
                        <Typography fontSize={14} fontWeight={600} mb={1}>User Role: </Typography>
                        <Button
                            aria-controls="role-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            variant="outlined"
                            fullWidth
                            color='warning'
                            sx={{ paddingY: 2, mb: 4 }}
                        >
                            {adminData.role || 'Select Role'}
                        </Button>
                        <Menu
                            id="role-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={() => handleDropDown('')} // Close the menu without selecting a role
                        >
                            <MenuItem onClick={() => handleDropDown('admin')} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Admin</MenuItem>
                            <MenuItem onClick={() => handleDropDown('superAdmin')}>Super Admin</MenuItem>
                        </Menu>
                    </Box>
                </DialogContent>

                <DialogActions sx={{ display: "flex", justifyContent: "center", marginBottom: 5 }}>
                    <Button disableElevation onClick={handleMakeAdmin} variant='contained' sx={{ width: 250, py: 2, fontWeight: 600 }} color='warning'>
                        Save
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </>
    );
};
export default MakeAdminModal;