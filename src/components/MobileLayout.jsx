import React from "react";
import HeaderMob from "./mobile/HeaderMob";
import Container from "@mui/material/Container";
import FooterMobile from "./mobile/FooterMobile";
import SubHeaderMob from "./mobile/SubHeaderMob";
import FeaturesContainerMobile from "./mobile/FeaturesContainerMobile";


const MobileLayout = () => {
	return (
		<>
			<Container maxWidth="xl">
				<HeaderMob />
				<SubHeaderMob />
				<FeaturesContainerMobile />
				<FooterMobile/>
			</Container>
		</>
	);
};

export default MobileLayout;