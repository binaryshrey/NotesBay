import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const Features = ({ feature }) => {
	const { title, subTitle1, subTitle2, avatar, marginTop, imgHeight, imgWidth } = feature;
	return (
		<Card sx={{ background: "#121212", width: "48vw", height: "80vh", borderRadius: "0.5rem" }}>
			<Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, padding: "4rem", paddingBottom: "0.5rem", opacity: "0.5", }}>
				{title}
			</Typography>
			<Typography variant="h4" component="div" display="block" sx={{ flexGrow: 1, paddingLeft: "4rem" }}>
				{subTitle1}
			</Typography>
			<Typography variant="h4" component="div" display="block" sx={{ flexGrow: 1, paddingLeft: "4rem" }}>
				{subTitle2}
			</Typography>
			<div data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
				<div style={{ marginTop: marginTop, textAlign: "center" }}>
					<img alt="feature" src={avatar} height={imgHeight} width={imgWidth} />
				</div>
			</div>
		</Card>
	);
};

export default Features;
