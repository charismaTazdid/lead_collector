import React, { useState } from 'react';
import { Box, Button, DialogActions, DialogContent, IconButton, Typography } from '@mui/material';
import deletePng from "../../images/delete-icon.png"
import { BootstrapDialog } from './Helper';
import { useDispatch } from 'react-redux';
import { Delete } from '@mui/icons-material';
import { deleteLead } from '../../Actions/leadAction.js';

const DeleteLeadModal = ({ id, companyName }) => {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };

    const dispatch = useDispatch();

    const handleDeleteLead = () => {
        dispatch(deleteLead(id))
        handleClose();
    };

    return (
        <>
            <IconButton sx={{ ml: 1, '&:focus': { outline: 'none' }, '&:hover': { backgroundColor: "#F5BCBA" } }} edge="end" aria-label="delete" onClick={handleClickOpen}>
                <Delete sx={{ color: '#003049', '&:hover': { color: "black" } }} fontSize='small' />
            </IconButton>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogContent sx={{ minWidth: "500px", my: 6, display: "flex", flexDirection: 'column' }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <Box>
                            <img src={deletePng} alt='Delete?' height={100} width={100} />
                        </Box>
                        <Box sx={{ maxWidth: 400 }}>
                            <Typography variant='h5' textAlign="center" fontWeight={600} fontSize={22}>
                                Are you Sure?
                            </Typography>
                            <Typography variant='h5' textAlign="center" fontWeight={600} fontSize={22}>
                                You want to Delete <span style={{ color: "#c60001" }}> {companyName}'s info ?</span>
                            </Typography>
                        </Box>
                    </Box>
                </DialogContent>

                <DialogActions sx={{ display: "flex", justifyContent: "space-around", marginBottom: 5, }} >
                    <Box sx={{ width: 400, display: "flex", justifyContent: "space-around" }}>
                        <Box>
                            <Button onClick={handleClose} variant='contained' color='info'>
                                Cancle
                            </Button>
                        </Box>
                        <Box>
                            <Button autoFocus onClick={() => handleDeleteLead()} variant='contained' color='error'>
                                Confirm
                            </Button>
                        </Box>
                    </Box>
                </DialogActions>
            </BootstrapDialog>
        </>
    );
}
export default DeleteLeadModal;