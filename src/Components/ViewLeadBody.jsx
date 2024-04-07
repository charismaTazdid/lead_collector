import React, { useEffect } from 'react';
import { Box, Pagination } from '@mui/material';
import SingleLead from './SingleLead';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLead } from '../Actions/leadAction';
import LoadingData from "./LoadingData.jsx";

const ViewLeadBody = () => {

    const { leads } = useSelector((state) => state.leads)
    // console.log(leads)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllLead())
    }, [])




    return (
        <Box sx={{ minHeight: "90vh", width: '100%', backgroundColor: "#192A56", display: "flex", justifyContent: "center" }}>
            <Box>
                {
                    !leads.length && <LoadingData />
                }
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