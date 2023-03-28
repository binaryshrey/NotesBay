import React from "react";
import db from "../data/db.json";
import Features from "./Features";
import Box from "@mui/material/Box";

const FeaturesContainer = ({ title, subTitle, avatar, marginTop }) => {
	return (
		<>
			<Box sx={{ display: "flex", justifyContent:"space-evenly" }}>
				<div style={{ marginTop: "0.6rem", marginRight: "0.4rem" }}>
					<Features feature={db.featureOne} />
				</div>

				<div style={{ marginTop: "0.6rem" }}>
					<Features feature={db.featureTwo} />
				</div>
			</Box>
			<Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
				<div style={{ marginTop: "0.6rem", marginRight: "0.4rem" }}>
					<Features feature={db.featureThree} />
				</div>

				<div style={{ marginTop: "0.6rem" }}>
					<Features feature={db.featureFour} />
				</div>
			</Box>

			<Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
				<div style={{ marginTop: "0.6rem", marginRight: "0.4rem" }}>
					<Features feature={db.featureFive} />
				</div>

				<div style={{ marginTop: "0.6rem" }}>
					<Features feature={db.featureSix} />
				</div>
			</Box>
		</>
	);
};

export default FeaturesContainer;
