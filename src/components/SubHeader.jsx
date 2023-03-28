import React from "react";
import db from "../data/db.json";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";


const SubHeader = () => {
	return (
		<>
			<Card sx={{ background: "#121212",borderRadius: "0.5rem", marginTop: "7.6rem", display: "flex", justifyContent: "space-between"}}>
				<Box sx={{ width: "100vw", height: "85vh", textAlign: "center", }}>
					<Typography variant="h4" component="div" sx={{ flexGrow: 1, paddingTop: "5rem", fontWeight: "500" }}>
						{db.tagline}
					</Typography>
					<div style={{ marginTop: "4rem" }}>
						<img alt="play_store" src="banner.svg" width={900} height={440}/>
					</div>
				</Box>
			</Card>
		</>
	);
};

export default SubHeader;
