import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useState } from 'react'
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';

const SingleLead = ({ lead }) => {
    const [copied, setCopied] = useState(false);

    const [followUp, setFollowUp] = useState(false);

    const handleCopy = (copyItem) => {
        navigator.clipboard.writeText(copyItem);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 10000); // Reset copied state after 10 seconds
    };
    function checkHttp(url) {
        return url.startsWith("http://") || url.startsWith("https://");
    }

    return (
        <Paper elevation={5} sx={{ borderRadius: 2 }} >
            <Box sx={{ backgroundColor: followUp ? "wheat" : "white", width: 900, height: "auto", mb: 1, mt: 1, p: 3, borderRadius: 2 }} >

                <Box sx={{ display: "flex", justifyContent: "space-between", }}>
                    <Box sx={{ display: "flex", cursor: "pointer", backgroundColor: "#2F363F", p: 1, borderRadius: 1 }} onClick={() => setFollowUp(!followUp)}>
                        <Typography sx={{ mr: 2, fontWeight: "bold", fontSize: 14, color: "white" }}>Companey Name: </Typography>
                        <Typography fontSize={14} color={"white"}> {lead?.companyName} </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ mr: 2, fontWeight: "bold", fontSize: 14 }} >Website : </Typography>
                        <a href={checkHttp(lead.website) ? `${lead.website}` : `https://${lead.website}`} target='_blank'>
                            <Typography fontSize={14}> {lead?.website} </Typography>

                        </a>
                    </Box>
                    <Box sx={{ display: "flex", backgroundColor: "#2F363F", p: 1, borderRadius: 1 }}>
                        <Typography sx={{ mr: 2, fontWeight: "bold", fontSize: 14, color: "white" }} >Country : </Typography>
                        <Typography fontSize={14} color={"white"}> {lead?.country} </Typography>
                    </Box>
                </Box>

                {/* Email  */}
                <Box sx={{ display: "flex", flex: 1, mt: 1 }}>
                    <Box sx={{ display: "flex", width: 450 }}>
                        <Typography sx={{ mr: 2, fontWeight: "bold", fontSize: 14 }}>Primary Email: </Typography>
                        <Typography fontSize={14}> {lead?.primaryEmail} </Typography>

                        <Box sx={{
                            display: "flex", alignItems: "center", ml: 1, '&hover': {
                                backgroundColor: "red"
                            }
                        }}>
                            <ContentCopyTwoToneIcon
                                fontSize='small'
                                onClick={() => handleCopy(lead?.primaryEmail)}
                                sx={{
                                    cursor: "pointer", color: "#192A56",
                                    '&:hover': {
                                        color: 'green',
                                        scale: "1.1",
                                        backgroundColor: 'inherit',
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", width: 450 }}>
                        <Typography sx={{ mr: 2, fontWeight: "bold", fontSize: 14 }}>Secondary Email: </Typography>
                        <Typography fontSize={14} > {lead?.secondaryEmail} </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
                            <ContentCopyTwoToneIcon
                                fontSize='small'
                                onClick={() => handleCopy(lead?.secondaryEmail)}
                                sx={{
                                    cursor: "pointer",
                                    color: "#192A56",
                                    '&:hover': {
                                        color: 'green',
                                        scale: "1.1",
                                        backgroundColor: 'inherit',
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* Phone and WhatsApp */}
                <Box sx={{ display: "flex", mt: 1 }}>
                    <Box sx={{ display: "flex", width: 450 }}>
                        <Typography sx={{ mr: 2, fontWeight: "bold", fontSize: 14 }}>Phone : </Typography>
                        <Typography fontSize={14}> {lead?.phone} </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
                            <ContentCopyTwoToneIcon
                                fontSize='small'
                                onClick={() => handleCopy(lead?.phone)}
                                sx={{
                                    cursor: "pointer",
                                    color: "#192A56",
                                    '&:hover': {
                                        color: 'green',
                                        scale: "1.1",
                                        backgroundColor: 'inherit',
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", width: 450 }}>
                        <Typography sx={{ mr: 2, fontWeight: "bold", fontSize: 14 }}>WhatsApp : </Typography>
                        <Typography fontSize={14}> {lead?.whatsApp} </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
                            <ContentCopyTwoToneIcon
                                fontSize='small'
                                onClick={() => handleCopy(lead?.whatsApp)}
                                sx={{
                                    cursor: "pointer",
                                    color: "#192A56",
                                    '&:hover': {
                                        color: 'green',
                                        scale: "1.1",
                                        backgroundColor: 'inherit',
                                    }
                                }}
                            />
                        </Box>
                    </Box>

                </Box>

                {/* Social Media  */}
                <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #99AAAB", p: 1, borderRadius: 2 }}>
                    <Box sx={{ display: "flex", width: 450, flexWrap: "wrap" }}>
                        <Typography sx={{ mr: 2, fontWeight: "bold", fontSize: 14 }}> Social Url: </Typography>
                        <Typography fontSize={14}> {lead?.socialUrl} </Typography>
                    </Box>
                    <Box sx={{ display: "flex", width: 450, flexWrap: "wrap" }}>
                        <Typography sx={{ mr: 2, fontWeight: "bold", fontSize: 14 }}>Linkedin Url: </Typography>
                        <Typography fontSize={14}> {lead?.linkedinUrl} </Typography>
                    </Box>
                </Box>

                {/* Employee Info */}
                <Box sx={{ mt: 1 }}>
                    <Typography fontWeight={900} fontSize={15}>Employee Info : </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", }}>
                        <Box sx={{ display: "flex", width: 450 }}>
                            <Typography sx={{ mr: 2, fontWeight: "bold", fontSize: 14 }}>Employee: </Typography>
                            <Typography fontSize={14}> {lead?.employee} </Typography>
                        </Box>
                        <Box sx={{ display: "flex", width: 450 }}>
                            <Typography sx={{ mr: 2, fontWeight: "bold", fontSize: 14 }}>Employee contact: </Typography>
                            <Typography fontSize={14}> {lead?.employeeContact} </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", flexWrap: 'wrap', mt: 1 }}>
                    <Typography sx={{ mr: 2, fontWeight: "bold", fontSize: 14 }}>Others Info : </Typography>
                    <Typography fontSize={14} > {lead?.othersInfo} </Typography>
                </Box>
            </Box>
        </Paper>
    )
}

export default SingleLead;
