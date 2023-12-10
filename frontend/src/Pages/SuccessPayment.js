import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Header from '../Component/Header'
import success from '../Image/success.jpg'
import { Link } from 'react-router-dom'

const SuccessPayment = () => {
    return (
        <>
            <Header />
            <Box display={'flex'} flexDirection={"column"} width={"100%"} lineHeight={200} alignItems={"center"} justifyContent={"center"} marginTop={"200px"}>

                <img src={success} alt="Success" width="250px" />

                <Typography
                    color="primary"
                    sx={{
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "normal",
                    }}
                >
                    Success Payment
                </Typography>
                <Typography
                    sx={{
                        color: "#333",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                    }}
                >
                    Thank you !!!
                </Typography>
            </Box>
            <Box display={'flex'} justifyContent={"center"} gap={2} padding={5}>

                <Button
                    component={Link}
                    to="/Home"
                    variant="contained"
                    color="secondary"
                    sx={{ width: "150px", height: "50px" }}
                >Back to Home
                </Button>

                <Button
                    component={Link}
                    to="/Invoice"
                    variant="contained"
                    color="primary"
                    sx={{ width: "150px", height: "50px" }}
                >Open Invoice
                </Button>
            </Box>
        </>
    )
}

export default SuccessPayment