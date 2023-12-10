import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../Api/Axios";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);

  //GetCategory
  useEffect(() => {
    api
      .get("/Category")
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: "60px 82px 120px",
      }}
    >
      <Grid container columns={{ xs: 6, sm: 9, md: 12, lg: 10 }}>
        {categoryList.map((category) => (
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={2}
            key={category.id}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
              <CardActionArea>
                <Card
                  sx={{
                    maxWidth: 345,
                    margin: "20px",
                    padding: "16px",
                    border: "1px solid #BDBDBD",
                    borderRadius: "8px",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://res.cloudinary.com/dlnicxanf/image/upload/v1692679684/CookingCourse/Homepage/Rectangle_13_ldmgmk.png"
                    alt="green iguana"
                    sx={{ border: "1px solid #BDBDBD", borderRadius: "8px" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="div"
                      textAlign={"center"}
                    >
                      {category.name}
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
