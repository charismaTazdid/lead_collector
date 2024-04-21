import React, { useEffect, useState } from 'react';
import { Box, Pagination, Button, Typography, Stack, PaginationItem } from '@mui/material';
import SingleLead from './SingleLead';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLead } from '../Actions/leadAction';
import LoadingData from "./LoadingData.jsx";
import { getAllCategory } from '../Actions/categoryAction.js';
import jwt_decode from "jwt-decode";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ViewLeadBody = () => {

    const dispatch = useDispatch();
    const userData = JSON.parse(localStorage.getItem('profile'));
    const { userName, role } = jwt_decode(userData.token);

    const { leads } = useSelector((state) => state.leads);
    const { categories } = useSelector((state) => state.categories);

    const [searchCategory, setSearchCategory] = useState("");
    const [currentLeads, setCurrentLeads] = useState(leads);
    const [page, setPage] = useState(1); // Track current page
    const leadsPerPage = 4; // Number of leads per page

    // Calculate the range of leads to display for the current page
    const startIndex = (page - 1) * leadsPerPage;
    const endIndex = startIndex + leadsPerPage;
    const displayLeads = currentLeads.slice(startIndex, endIndex);

    useEffect(() => {
        dispatch(getAllLead());
        dispatch(getAllCategory());
    }, []);

    const handlePageChange = (event, value) => {
        setPage(value); // Update current page
    };

    const handleFilterdByCategory = () => {

        if (searchCategory === "All") {
            // retrun the all lead data
            return setCurrentLeads(leads);
        }
        else {
            const filterdLeads = leads.filter((lead) => lead.categoryName === searchCategory);
            return setCurrentLeads(filterdLeads)
        }
    };

    useEffect(() => {
        handleFilterdByCategory()
    }, [searchCategory]);

    // to avoid realoding page result = empty currentLeads
    useEffect(() => {
        setTimeout(() => {
            setSearchCategory("All")
        }, 200);
    }, [])

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
                                <Button
                                    variant='outlined'
                                    color='warning'
                                    sx={{
                                        borderColor: searchCategory === category.categoryName && "white", color: searchCategory === category.categoryName && "white",
                                        ':hover&': { color: "white" }

                                    }}
                                    style={{ outline: "none" }}
                                    onClick={() => setSearchCategory(category.categoryName)}
                                >
                                    {category.categoryName}
                                </Button>
                            </Box>
                        ))
                    }
                </Box>
                {
                    displayLeads.map((lead, index) => (
                        <SingleLead lead={lead} role={role} key={index} />
                    ))
                }
                <Stack spacing={2} mb={3} mt={1}>
                    <Pagination
                        count={Math.ceil(currentLeads.length / leadsPerPage)}
                        page={page}
                        onChange={handlePageChange}
                        renderItem={(item) => (
                            <PaginationItem
                                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                style={{ outline: "none" }}
                                sx={{
                                    backgroundColor: '#F3B431',
                                    fontWeight: item.selected && 900,
                                    color: item.selected ? 'white' : 'black',
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        color: item.selected && 'red'
                                    },
                                }}
                                {...item}
                            />
                        )}
                    />
                </Stack>
            </Box>
        </Box>
    );
};

export default ViewLeadBody;