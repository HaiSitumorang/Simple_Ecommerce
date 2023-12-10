import { Box, ButtonGroup, Grid, IconButton, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import React, { useEffect, useState } from "react";
import api from "../Api/Axios";

const Footer = () => {
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
      component={"footer"}
      marginTop={10}
      minHeight={100}
      sx={{
        p: 5,
        bgcolor: "#226957",
        color: "#FFFFFF",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        sx={{ justifyContent: "center", minHeight: "220px" }}
      >
        <Grid item md={4} key={"About Us"} gap={3}>
          <Typography variant="h5" marginBottom={"8px"}>
            About Us
          </Typography>
          <Typography textAlign="justify">
            jsgfas djfgslfsd fksdljfgslkjfgsdjf sldfsdhfjgsd fsdljfgsdlfgs fsgfslfgsdfsdlfsdlgfs
            jsgfas djfgslfsd fksdljfgslkjfgsdjf sldfsdhfjgsd fsdljfgsdlfgs fsgfslfgsdfsdlfsdlgfs
            jsgfas djfgslfsd fksdljfgslkjfgsdjf sldfsdhfjgsd fsdljfgsdlfgs fsgfslfgsdfsdlfsdlgfs
            jsgfas djfgslfsd fksdljfgslkjfgsdjf sldfsdhfjgsd fsdljfgsdlfgs fsgfslfgsdfsdlfsdlgfs
            jsgfas djfgslfsd fksdljfgslkjfgsdjf sldfsdhfjgsd fsdljfgsdlfgs fsgfslfgsdfsdlfsdlgfs
          </Typography>
        </Grid>
        <Grid item md={3} lg={3} key={"Product"}>
          <Typography variant="h5" marginBottom={"14px"}>
            Product
          </Typography>
          <Box sx={{ gap: "8px", display: "flex", flexWrap: "wrap" }}>
            {categoryList.map((category) => (
              <li style={{ width: "40%" }}>{category.name}</li>
            ))}
          </Box>
        </Grid>
        <Grid item md={4} key={"Address"}>
          <Box>
            <Typography variant="h5" marginBottom={"10px"}>
              Address
            </Typography>
            <Typography textAlign="justify" marginBottom={"16px"}>
              Jalan abcdef no 12
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" marginBottom={"8px"}>
              Contact Us
            </Typography>
            <ButtonGroup sx={{gap: 1}}>
              <IconButton color="secondary" sx={{ bgcolor: "#FFFFFF" }}>
                <CallIcon />
              </IconButton>
              <IconButton color="secondary" sx={{ bgcolor: "#FFFFFF" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton color="secondary" sx={{ bgcolor: "#FFFFFF" }}>
                <YouTubeIcon />
              </IconButton>
              <IconButton color="secondary" sx={{ bgcolor: "#FFFFFF" }}>
                <TelegramIcon />
              </IconButton>
              <IconButton color="secondary" sx={{ bgcolor: "#FFFFFF" }}>
                <MailOutlineIcon />
              </IconButton>
            </ButtonGroup>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
