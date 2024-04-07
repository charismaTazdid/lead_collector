import React from 'react';
import { Box, CircularProgress, LinearProgress, Typography } from '@mui/material';

const LoadingData = () => {
    return (
        <Box sx={{ maxWidth: 600, minWidth: 200 }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant='h5' color="white"> Loading Data... </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CircularProgress sx={{ marginRight: 2, color: "white" }} />
                    <LinearProgress sx={{ width: 400, color: "white" }} />
                    <CircularProgress sx={{ ml: 2, color: "white" }} />
                </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 10 }}>
                <Typography variant='h5' color={"orange"}> Be patient...</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CircularProgress color="warning" sx={{ marginRight: 2 }} />
                    <LinearProgress color="warning" sx={{ width: 400 }} />
                    <CircularProgress color="warning" sx={{ ml: 2 }} />
                </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 10 }}>
                <Typography variant='h5' color="green">  Check your Internet Connection... </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CircularProgress color="success" sx={{ marginRight: 2, }} />
                    <LinearProgress color="success" sx={{ width: 400 }} />
                    <CircularProgress color="success" sx={{ ml: 2 }} />
                </Box>
            </Box>

        </Box>
    );
};

export default LoadingData;