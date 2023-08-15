import React from "react";
import db from "../../data/db.json";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";


const SubHeader = () => {
	return (
		<>
			<Card sx={{ background: "#121212", marginTop: "6rem", display: "flex", justifyContent: "space-between"}}>
				<Box sx={{ width: "100vw", height: "48vh", textAlign: "center" }}>
					<Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, paddingTop: "3rem", fontWeight: "400" }}>
						{db.tagline}
					</Typography>
					<div style={{ marginTop: "4rem" }}>
						<div data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
							<img alt="play_store" src="banner.svg" width={360} height={200}/>
						</div>
					</div>
				</Box>
			</Card>
		</>
	);
};

export default SubHeader;
