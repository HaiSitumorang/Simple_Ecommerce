import { Box, Breadcrumbs, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import { currency } from "../Utils/Formater"
import api from '../Api/Axios'
import { Link } from 'react-router-dom'

const Invoice = () => {
    const [invoiceList, setInvoice] = useState([])

    useEffect(() => {
        api
            .get("/InvoiceList")
            .then((res) => {
                setInvoice(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            <Header />
            <Box margin={7}>
                <Breadcrumbs separator="›">
                    <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
                        <Typography>Home</Typography>
                    </Link>
                    <Typography color="secondary">Invoice</Typography>
                </Breadcrumbs>
                <Typography variant="h5" sx={{ my: 2 }}>
                    Menu Invoice
                </Typography>
                <TableContainer>
                    <Table sx={{ minWidth: 700 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>No</TableCell>
                                <TableCell align="center">No Invoice</TableCell>
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="center">Total Product</TableCell>
                                <TableCell align="center">Total Amount</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {invoiceList.map((invoice, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="center">{invoice.invoiceNumber}</TableCell>
                                    <TableCell align="center">
                                        {invoice.createDate.substring(0, 10)}
                                    </TableCell>
                                    <TableCell align="center">{invoice.totalProduct}</TableCell>
                                    <TableCell align="center">
                                        {currency(invoice.totalAmount)}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button
                                            color="secondary"
                                            variant="contained"
                                            component={Link}
                                            to={`/invoice/${invoice.id}`}
                                            sx={{ padding: "10px 50px" }}
                                        >
                                            Details
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Footer />
        </>

    )
}

export default Invoice