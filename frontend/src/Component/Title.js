import { Typography } from '@mui/material'
import React from 'react'

const Title = ({titleName}) => {
  return (
    <>
    <Typography
      color="primary"
      align="center"
      sx={{
        fontSize: "30px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
        margin: "80px 0 60px"
      }}
    >
      {titleName}
    </Typography>

    </>
  )
}

export default Title