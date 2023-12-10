import { Box, Button, CardActionArea, CardActions, Grid, Link, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../Api/Axios";
import { currency } from "../Utils/Formater"
import noImage from "../Image/NoImage.png"

const RecomendedProduct = () => {
  const [productList, setProductList] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  //GetRecomendedClass
  useEffect(() => {
    api
      .get("/ProductList", {
        params:{
          pageSize : 12,
          pageNumber: pageNum
        }
      })
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNum]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: "60px 91px 0px 91px",
      }}
    >
      <Grid container columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
        {productList.map((product) => (
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            lg={2}
            key={product.id}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
             <Link href={`/product/${product.id}`} underline="none">
              <CardActionArea>
                <div
                  style={{
                    border: "1px solid #BDBDBD",
                    borderRadius: "16px",
                    margin: "12px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={noImage}
                    alt="courseimage"
                    style={{
                      borderRadius: "16px 16px 0 0",
                    }}
                  ></img>
                  <div style={{ margin: "16px" }}>
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
                      {product.categoryName}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#333",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "normal",
                        height: "70px",
                        alignSelf: "stretch",
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      color="primary"
                      sx={{
                        textAlign: "start",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "normal",
                      }}
                    >
                      {currency(product.price)}
                    </Typography>
                  </div>
                </div>
              </CardActionArea>
            </Link>
          </Grid>
        ))}
      </Grid>

      <Pagination sx={{
        display:"flex",
        justifyContent:"center"
      }} 
      count={2} 
      color="primary"
      size="large" 
      onChange={(e, page) => setPageNum(page)}/>

    </Box>
  );
};

export default RecomendedProduct;
