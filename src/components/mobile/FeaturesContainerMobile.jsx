import React from "react";
import db from "../../data/db.json";
import FeaturesMobile from "./FeaturesMobile";

const FeaturesContainerMobile = () => {
	return (
		<>
           <FeaturesMobile feature={db.featureOne} />
           <FeaturesMobile feature={db.featureTwo} />
           <FeaturesMobile feature={db.featureThree} />
           <FeaturesMobile feature={db.featureFour} />
           <FeaturesMobile feature={db.featureFive} />
           <FeaturesMobile feature={db.featureSix} />

		</>
	);
};

export default FeaturesContainerMobile;
