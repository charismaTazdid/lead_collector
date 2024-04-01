import React from 'react';
import { Box, Pagination } from '@mui/material';
import { leads } from "../demoDb/leads";
import SingleLead from './SingleLead';

const ViewLeadBody = () => {
    return (
        <Box sx={{ border: "2px solid red", minHeight: "90vh", width: '100%', backgroundColor: "#EAF0F1", display: "flex", justifyContent: "center" }}>
            <Box>
                {
                    leads.map((lead, index) => (
                        <SingleLead lead={lead} key={index} />
                    ))
                }
                 <Pagination count={100} variant="outlined" shape="rounded" />
            </Box>
        </Box>
    )
}

export default ViewLeadBody
