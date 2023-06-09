import React from "react";
import db from "../data/db.json";
import Typography from "@mui/material/Typography";
import { Link } from "gatsby";


const Footer = () => {
	return (
		<>
			<div style={{ marginTop: "16rem", textAlign: "center" }}>
				<img alt="qr_code" src="qr-code.svg" height="200px" width="200px"/>
				<Typography variant="h5"component="div"display="block"sx={{ paddingTop: "0.5rem" }}>
					NotesBay
				</Typography>
				<Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, opacity: "0.5" }}>
					Available on the Play Store
				</Typography>
			</div>
			<div style={{ marginTop: "16rem", textAlign: "center", marginBottom: "4rem" }}>
				<Link to="/privacy" target="_blank" style={{ textDecoration: "none", color: "#ffffff", opacity: "0.5", marginRight: "2rem"}}>
          			Privacy
        		</Link>
				<Link to="/terms" target="_blank" style={{ textDecoration: "none", color: "#ffffff", opacity: "0.5", marginRight: "2rem", marginLeft: "2rem"}}>
          			Terms
        		</Link>
				<a href={db.contact} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#ffffff", opacity: "0.5", marginLeft: "2rem" }}>
          			Contact
        		</a>
			</div>
		</>
	);
};

export default Footer;
