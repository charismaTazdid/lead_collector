import { Box, Paper, Typography } from '@mui/material';
import React from 'react'

const SingleLead = ({ lead }) => {
    return (
        <Paper elevation={5} sx={{ borderRadius: 2 }}>
            <Box sx={{ backgroundColor: "white", width: 900, height: "auto", mb: 1, mt: 1, p: 3, borderRadius: 20 }}>

                <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #99AAAB", p: 1, borderRadius: 10 }}>

                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ mr: 2, fontWeight: "bold" }}>Companey Name: </Typography>
                        <Typography> {lead.companyName} </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ mr: 2, fontWeight: "bold" }} >Website : </Typography>
                        <Typography> {lead.website} </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ mr: 2, fontWeight: "bold" }} >Country : </Typography>
                        <Typography> {lead.country} </Typography>
                    </Box>
                </Box>

                {/* Email  */}
                <Box sx={{ display: "flex", flex: 1, justifyContent: "space-between", borderBottom: "1px solid #99AAAB", p: 1, borderRadius: 10 }}>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ mr: 2, fontWeight: "bold" }}>Primary Email: </Typography>
                        <Typography> {lead.primaryEmail} </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ mr: 2, fontWeight: "bold" }}>Secondary Email: </Typography>
                        <Typography> {lead.secondaryEmail} </Typography>
                    </Box>
                </Box>

                {/* Phone and WhatsApp */}
                <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #99AAAB", p: 1, borderRadius: 10 }}>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ mr: 2, fontWeight: "bold" }}>Phone : </Typography>
                        <Typography> {lead.phone} </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ mr: 2, fontWeight: "bold" }}>WhatsApp : </Typography>
                        <Typography> {lead.whatsApp} </Typography>
                    </Box>
                </Box>

                {/* Social Media  */}
                <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #99AAAB", p: 1, borderRadius: 10 }}>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        <Typography sx={{ mr: 2, fontWeight: "bold" }}>Social Url: </Typography>
                        <Typography> {lead.socialUrl} </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        <Typography sx={{ mr: 2, fontWeight: "bold" }}>Linkedin Url: </Typography>
                        <Typography> {lead.linkedinUrl} </Typography>
                    </Box>
                </Box>

                {/* Employee Info */}
                <Box sx={{ borderBottom: "1px solid #99AAAB", p: 1, borderRadius: 10 }}>
                    <Typography fontWeight={900} fontSize={15}>Employee Info </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", }}>
                        <Box sx={{ display: "flex" }}>
                            <Typography sx={{ mr: 2, fontWeight: "bold" }}>Employee: </Typography>
                            <Typography> {lead.employee} </Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Typography sx={{ mr: 2, fontWeight: "bold" }}>Employee contact: </Typography>
                            <Typography> {lead.employeeContact} </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", flexWrap: 'wrap' }}>
                    <Typography sx={{ mr: 2, fontWeight: "bold" }}>Others Info : </Typography>
                    <Typography> {lead.othersInfo} </Typography>
                </Box>
            </Box>
        </Paper>
    )
}

export default SingleLead;
