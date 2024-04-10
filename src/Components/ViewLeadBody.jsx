import React, { useEffect } from 'react';
import { Box, Pagination, Button, Typography } from '@mui/material';
import SingleLead from './SingleLead';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLead } from '../Actions/leadAction';
import LoadingData from "./LoadingData.jsx";
import { getAllCategory } from '../Actions/categoryAction.js';

const ViewLeadBody = () => {

    const { leads } = useSelector((state) => state.leads);
    const { categories } = useSelector((state) => state.categories);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllLead())
        dispatch(getAllCategory())
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
                                <Button variant='outlined' color='warning' onClick={() => alert("Features comming soon")}> {category.categoryName} </Button>
                            </Box>
                        ))
                    }
                </Box>
                {
                    leads.map((lead, index) => (
                        <SingleLead lead={lead} key={index} />
                    ))
                }
                <Pagination count={10} variant="outlined" shape="rounded" />
            </Box>
        </Box>
    )
}
export default ViewLeadBody;