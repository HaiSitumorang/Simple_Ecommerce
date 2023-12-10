import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import { Box, Button, Checkbox, Divider, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material'
import api from '../Api/Axios'
import { currency } from "../Utils/Formater"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom'
import noImage from "../Image/NoImage.png"

const Cart = () => {
    const [totalAmount, setTotalAmount] = useState(0)
    const [cart, setCart] = useState([])
    const [cartPay, setCartPay] = useState([])
    const [check, setCheck] = useState([])
    // let check = []

    useEffect(() => { }, [totalAmount])

    useEffect(() => {
        setTimeout(() => {
            api
                .get("/CartList")
                .then((res) => {
                    setCart(res.data)
                    setCheck(Array(res.data.length).fill(false))
                })
                .catch((err) => {
                    console.log(err);
                });
        }, 1000);
    }, []);

    const onClikRemove = (id, index) => {
        api
            .get("/RemoveCart/" + id, {
                params: {
                    id: id,
                }
            })
            .then((res) => {
                if (res.status == 200) {
                    let checkTemp = check
                    let checkFilter = checkTemp.filter(x => x != index)

                    let cartTemp = cart
                    let cartFilter = cartTemp.filter(x => x.id != id)

                    let cartPayTemp = cartPay
                    let cartPayFilter = cartPayTemp.filter(x => x.id != id)

                    let amountTemp = 0
                    cartPayFilter.forEach(x => amountTemp += x.price)

                    setCheck(checkFilter)
                    setCartPay(cartPayFilter)
                    setCart(cartFilter)
                    setTotalAmount(amountTemp)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const onSave = () => {
        let cartIdlist = []
        cartPay.forEach(x => cartIdlist.push(x.id))
        console.log(cartIdlist)

        api
            .post('/Invoice', cartIdlist).then((res) => {
                if (res.status == 200) {
                }
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <Header />

            <Box margin={5} paddingX={3} paddingBottom={9}>

                <FormGroup>
                    {/* <Box display={"flex"} alignItems={"center"} gap={2}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkAll}
                                    indeterminate={false}
                                />
                            }
                            onClick={(e) => {
                                setCheckAll(!checkAll)
                            }}
                        />

                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "normal",
                            }}
                        >
                            Select All
                        </Typography>
                    </Box>

                    <Divider /> */}

                    {
                        cart.map((x, index) => (
                            <Box>
                                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Box display={"flex"} alignItems={"center"} gap={2}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={check[index]}
                                                />
                                            }
                                            onClick={(e) => {
                                                let checkTemp = check
                                                checkTemp[index] = !check[index]
                                                setCheck(checkTemp)
                                                let amountTemp = 0

                                                if (checkTemp[index] == true) {
                                                    let cartPayTemp = [...cartPay, x]
                                                    cartPayTemp.forEach(x => amountTemp += x.price)
                                                    setCartPay(cartPayTemp)
                                                } else {
                                                    let cartPayTemp = cartPay
                                                    let cartPayFilter = cartPayTemp.filter(y => y.id != x.id)
                                                    cartPayFilter.forEach(x => amountTemp += x.price)
                                                    setCartPay(cartPayFilter)
                                                }
                                                setTotalAmount(amountTemp)
                                            }}
                                        />

                                        <Box padding={2}>
                                            <img
                                                src={noImage}
                                                style={{ objectFit: "cover", width: "250px" }}
                                            />

                                        </Box>
                                        <Box display={"flex"} flexDirection={"column"} gap={1} alignItems={"flex-start"}>
                                            <Typography
                                                sx={{
                                                    color: "#828282",
                                                    textAlign: "start",
                                                    fontSize: "16px",
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    lineHeight: "normal",
                                                }}
                                            >
                                                {x.categoryName}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: "#333",
                                                    fontSize: "24px",
                                                    fontStyle: "normal",
                                                    fontWeight: "600",
                                                    lineHeight: "normal",
                                                    alignSelf: "stretch",
                                                }}
                                            >
                                                {x.productName}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: "#828282",
                                                    textAlign: "start",
                                                    fontSize: "16px",
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    lineHeight: "normal",
                                                }}
                                            >
                                                Total : {x.total} item
                                            </Typography>
                                            <Typography
                                                color="secondary"
                                                sx={{
                                                    textAlign: "start",
                                                    fontSize: "24px",
                                                    fontStyle: "normal",
                                                    fontWeight: "600",
                                                    lineHeight: "normal",
                                                }}
                                            >
                                                {x.price ? currency(x.price) : ""}
                                            </Typography>
                                        </Box>

                                    </Box>
                                    <Box>
                                        <Button
                                            color="red"
                                            onClick={() => onClikRemove(x.id, index)}
                                        >
                                            <DeleteForeverIcon />
                                        </Button>
                                    </Box>
                                </Box>
                                <Divider />
                            </Box>

                        )
                        )
                    }
                </FormGroup>
            </Box>
            <Box position={'fixed'} bottom={0} left={0} width={"100%"} bgcolor={"white"}>
                <Divider />

                <Box padding={4} display={"flex"} justifyContent={"space-between"}>
                    <Box>
                        <Typography
                            sx={{
                                color: "#333",
                                fontSize: "18px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "normal",
                            }}
                        >
                            Total Price :
                        </Typography>
                        <Typography
                            color={"secondary"}
                            sx={{
                                fontSize: "24px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                            }}
                        >
                            {currency(totalAmount)}
                        </Typography>
                    </Box>

                    <Button
                        component={Link}
                        to="/successpayment"
                        variant="contained"
                        color="secondary"
                        sx={{ width: "250px", height: "50px" }}
                        onClick={onSave}
                    >Pay Now
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Cart