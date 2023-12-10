import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Box, Breadcrumbs, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { currency } from "../Utils/Formater"
import api from '../Api/Axios'

const DetailInvoive = () => {
    const { id } = useParams()
    const [invoiceDetail, setInvoiceDetail] = useState([])
    const [invoiceHeader, setIInvoiceHeader] = useState([{
        invoiceNumber: null,
        totalProduct: null,
        totalAmount: null,
        createDate: null
    }])

    useEffect(() => {
        console.log(id)
        api
            .get("/InvoiceDetail", {
                params: {
                    id: id,
                }
            })
            .then((res) => {
                setInvoiceDetail(res.data.invoiceDetail);
                setIInvoiceHeader(res.data.invoiceHeader);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <Header />

            <Box margin={8}>
                <Breadcrumbs separator="›">
                    <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
                        <Typography>Home</Typography>
                    </Link>
                    <Link to="/invoice" style={{ textDecoration: "none", color: "black" }}>
                        <Typography>Invoice</Typography>
                    </Link>
                    <Typography color="secondary">Details Invoice</Typography>
                </Breadcrumbs>
                <Typography
                    sx={{
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "800",
                        lineHeight: "normal",
                        paddingTop: "30px"
                    }}>
                    Details Invoice
                </Typography>
                <Box paddingTop={4} paddingBottom={2}>
                    <Box display={"flex"}>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                                marginRight: "50px"
                            }}>
                            No. Invoice
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                            }}>
                            : {invoiceHeader[0].invoiceNumber}
                        </Typography>
                    </Box>
                    <Box display={"flex"}>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                                marginRight: "103px"
                            }}>
                            Date
                        </Typography>
                        <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    lineHeight: "normal",
                                }}>
                                : {invoiceHeader[0].createDate ? invoiceHeader[0].createDate.substring(0, 10) : null}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    lineHeight: "normal",
                                }}>
                                Total Price {invoiceHeader[0].totalAmount ? currency(invoiceHeader[0].totalAmount) : null}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <TableContainer>
                    <Table sx={{ paddingTop: "10px" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>No</TableCell>
                                <TableCell align="center">Product Name</TableCell>
                                <TableCell align="center">Category</TableCell>
                                <TableCell align="center">Total Product</TableCell>
                                <TableCell align="center">Total Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {invoiceDetail.map((invoice, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="center">{invoice.productName}</TableCell>
                                    <TableCell align="center">{invoice.categoryName}</TableCell>
                                    <TableCell align="center">
                                        {invoice.total}
                                    </TableCell>
                                    <TableCell align="center">{currency(invoice.price)}</TableCell>
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

export default DetailInvoive