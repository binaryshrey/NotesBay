import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SubHeader from "./SubHeader";
import Container from "@mui/material/Container";
import FeaturesContainer from "./FeaturesContainer";

const Desktoplayout = () => {
	return (
		<>
			<Container maxWidth="xl">
				<Header />
				<SubHeader />
				<FeaturesContainer />
				<Footer/>
			</Container>
		</>
	);
};

export default Desktoplayout;
