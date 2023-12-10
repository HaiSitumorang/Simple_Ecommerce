import { Box, Button, Divider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import RecomendedProduct from '../Component/RecomendedProduct'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import Title from '../Component/Title'
import IncDecButton from '../Component/IncDecButton'
import api from '../Api/Axios'
import { Link, useParams } from 'react-router-dom'
import { currency } from "../Utils/Formater"
import noImage from "../Image/NoImage.png"

const Product = () => {
  const { id } = useParams()
  const [redirect, setRedirect] = useState(null)
  const [counter, setCounter] = useState(1)
  const [cartId, setCartId] = useState(0)
  const [product, setProduct] = useState([{
    id: null,
    name: "",
    categoryName: "",
    description: null,
    price: null
  }])

  useEffect(() => {
    api
      .get("/ProductList/" + id, {
        params: {
          id: id,
        }
      })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .get("/CartList/" + id, {
        params: {
          id: id,
        }
      })
      .then((res) => {
        if (res.data.length > 0) {
          setCounter(res.data[0].total)
          setCartId(res.data[0].id)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClickCart = () => {
    const cartData = {
      id: cartId,
      userId: 1,
      productId: id,
      total: counter
    }

    api
      .post('/Cart', cartData).then((res) => {
        if (res.status == 200) {
          setCartId(res.data.id)
        }
      }).catch((err) => {
        console.log(err)
      })

  }

  const onClickBuy = () => {
    const cartData = {
      id: cartId,
      userId: 1,
      productId: id,
      total: counter
    }

    api
      .post('/Cart', cartData).then((res) => {
        if (res.status == 200) {
        }
      }).catch((err) => {
        console.log(err)
      })

  }

  return (
    <>
      <Header />
      <Box display={"flex"} padding={9} paddingBottom={2}>
        <img
          src={noImage}
          style={{ objectFit: "cover", width:"350px" }}
        />
        <Box paddingLeft={6} paddingTop={2} width={"80%"}>

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
              {product[0].categoryName}
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
              {product[0].name}
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
              {product[0].price ? currency(product[0].price) : ""}
            </Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <IncDecButton
              state={counter}
              setState={setCounter}
            />
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Box display={"flex"} flexDirection={"row"} gap={1} alignItems={"flex-start"}>
              <Button
                variant="contained"
                color="primary"
                sx={{ width: "250px", height: "50px" }}
                onClick={onClickCart}
              >Add To Cart
              </Button>

              <Button
                component={Link}
                variant="contained"
                color="secondary"
                sx={{ width: "250px", height: "50px" }}
                to="/cart"
                onClick={onClickBuy}
              >Buy Now
              </Button>
            </Box>

            <Typography
              color={"secondary"}
              sx={{
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
              }}
            >
              Subtotal : {product[0].price ? currency(product[0].price * counter) : ""}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box padding={9} paddingTop={2}>
        <Typography
          sx={{
            color: "#333",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >
          Description
        </Typography>

        <Typography
          textAlign={"justify"}
          sx={{
            color: "#333",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            marginTop: "16px"
          }}
        >
          {product.description ? product.description : "There is no description"}
        </Typography>
      </Box>

      <Divider />

      <Title titleName={"More Our Product"} />

      <RecomendedProduct />

      <Footer />
    </>

  )
}

export default Product