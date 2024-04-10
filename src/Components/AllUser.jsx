import React, { useEffect } from 'react';
import { Grid, Typography, IconButton, Avatar, ListItemText, ListItemAvatar, ListItem, List, Box, Divider } from '@mui/material';
import { SupervisorAccount, AdminPanelSettings, Edit } from '@mui/icons-material';
import MakeAdminModal from "./Modal/MakeAdminModal.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { getAllSystemUser } from '../Actions/AuthActions.js';
import DeleteUserModal from './Modal/DeleteUserModal.jsx';
import jwt_decode from "jwt-decode";

const Alluser = () => {
    const dispatch = useDispatch();
    const { systemUsers } = useSelector((state) => state.systemUsers);
    const userData = JSON.parse(localStorage.getItem('profile'));
    const { userName, role } = jwt_decode(userData.token);

    useEffect(() => {
        dispatch(getAllSystemUser())
    }, []);

    return (
        <Box sx={{ flexGrow: 1, width: "500px", mx: 2, py: 1, px: 2, backgroundColor: "white", borderRadius: 1 }}>
            <Box sx={{ mb: 2, width: "100%", display: "flex", justifyContent: "right" }}  >
                {/* ADD New Admin */}
                <MakeAdminModal />
            </Box>
            <Box sx={{ display: "flex", backgroundColor: "#232B2E", py: 3, justifyContent: 'center' }}>
                <AdminPanelSettings sx={{ color: '#CAD5E2' }} />
                <Typography color="white" textAlign='cneter' fontWeight={600} ml={3}>Admin And Super-Admin</Typography>
            </Box>
            <Box sx={{ overflow: 'scroll', overflowX: "hidden" }}>
                <Grid item xs={12} md={6}>

                    <List >
                        {
                            systemUsers.map((user) => (
                                < Box key={user._id} sx={{ width: "470px", }}>
                                    <ListItem
                                        sx={{ backgroundColor: (userName === user.userName) && "#EFEFED", fontWeight: "bold" }}
                                        secondaryAction={
                                            userName === user.userName ?
                                                <> You </>
                                                :
                                                <>
                                                    <IconButton edge="end" aria-label="Edit" sx={{ mr: 1, }} >
                                                        <Edit sx={{ color: "#003049" }} fontSize='small' />
                                                    </IconButton>
                                                    {
                                                        role === "superAdmin" &&
                                                        <DeleteUserModal userId={user._id} userName={user.userName} />
                                                    }
                                                </>
                                        }
                                    >
                                        <ListItemAvatar>
                                            <Avatar>
                                                <SupervisorAccount />
                                            </Avatar>
                                        </ListItemAvatar>

                                        <ListItemText
                                            primary={`${user?.userName}`}
                                            secondary={"admin"}
                                            sx={{ color: (userName === user?.userName) && "#003049", textTransform: "capitalize" }}
                                        />

                                    </ListItem>
                                    <Divider />
                                    <Divider />
                                </Box>
                            ))
                        }
                    </List>



                </Grid>
            </Box>
        </Box>
    );
}
export default Alluser;