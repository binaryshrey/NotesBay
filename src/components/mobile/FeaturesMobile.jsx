import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

const FeaturesMobile = ({ feature }) => {
	const { title, subTitle1, subTitle2, avatarMobile, marginTopMobile, imgHeightMobile, imgWidthMobile } = feature;
	return (
        <Card sx={{ background: "#121212", marginTop: "0.5rem", display: "flex",flexDirection:"row"}}>
            <Box sx={{ width: "100vw", height: "50vh"}}>
                <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, padding: "2rem", paddingBottom: "0.5rem", opacity: "0.5", }}>
                    {title}
                </Typography>
                <Typography variant="subtitle1" component="div" display="block" sx={{ flexGrow: 1, paddingLeft: "2rem" }}>
                    {subTitle1}
                </Typography>
                <Typography variant="subtitle1" component="div" display="block" sx={{ flexGrow: 1, paddingLeft: "2rem" }}>
                    {subTitle2}
                </Typography>
                <div style={{ marginTop: marginTopMobile, textAlign: "center" }}>
                    <img alt="feature" src={avatarMobile} height={imgHeightMobile} width={imgWidthMobile} />
                </div>
            </Box>
		</Card>
	)
};

export default FeaturesMobile;
