import React, { useEffect, useState } from 'react';
import { Box, Pagination, Button, Typography } from '@mui/material';
import SingleLead from './SingleLead';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLead } from '../Actions/leadAction';
import LoadingData from "./LoadingData.jsx";
import { getAllCategory } from '../Actions/categoryAction.js';
import jwt_decode from "jwt-decode";

const ViewLeadBody = () => {
    const userData = JSON.parse(localStorage.getItem('profile'));
    const { userName, role } = jwt_decode(userData.token);

    const [page, setPage] = useState(1); // Track current page
    const leadsPerPage = 5; // Number of leads per page

    const { leads } = useSelector((state) => state.leads);
    const { categories } = useSelector((state) => state.categories);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllLead());
        dispatch(getAllCategory());
    }, []);

    // Calculate the range of leads to display for the current page
    const startIndex = (page - 1) * leadsPerPage;
    const endIndex = startIndex + leadsPerPage;
    const currentLeads = leads.slice(startIndex, endIndex);

    const handlePageChange = (event, value) => {
        setPage(value); // Update current page
    };

    return (
        <Box sx={{ minHeight: "90vh", width: '100%', backgroundColor: "#192A56", display: "flex", justifyContent: "center" }}>
            <Box>
                {
                    !leads.length && <LoadingData />
                }
                <Box sx={{ display: "flex", mt: 1, alignItems: "center" }}>
                    <Typography color="white">Search By :</Typography>
                    {
                        categories.map((category) => (
                            <Box key={category._id} m={1}>
                                <Button variant='outlined' color='warning' onClick={() => alert("Features coming soon")}> {category.categoryName} </Button>
                            </Box>
                        ))
                    }
                </Box>
                {
                    currentLeads.map((lead, index) => (
                        <SingleLead lead={lead} role={role} key={index}  />
                    ))
                }
                <Pagination count={Math.ceil(leads.length / leadsPerPage)} variant="outlined" shape="rounded" page={page} onChange={handlePageChange} />
            </Box>
        </Box>
    );
};

export default ViewLeadBody;
