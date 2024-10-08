import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const InfoCard = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography style={{ fontFamily: "NanumSquareNeoBold" }}>서초 스마트 워크센터</Typography>
        <Typography color="text.secondary" style={{ fontSize: "13px" }}>
          서울특별시 서초구 바우뫼로 6길 57 <br />
          대한 결핵협회 별관 1층
        </Typography>
        <Typography color="#2196f3" style={{ fontSize: "13px" }}>
          02-529-4834
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
