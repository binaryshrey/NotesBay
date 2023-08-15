import React from "react";
import Waitlist from "../Waitlist";
import db from "../../data/db.json";
import Box from "@mui/material/Box";
import { Icon } from "@mui/material";
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius:'1rem',
  boxShadow: 24,
  p: 4,
};

const HeaderMob = () => {
	const [open, setOpen] = React.useState(false);
  	const handleOpen = () => setOpen(true);
  	const handleClose = () => setOpen(false);

	const downloadIcon = (
		<Icon sx={{ width: "100%", height: "100%", marginTop: "8x" }}>
			<img alt="play_store" src="play_store_mobile.svg" height={32} width={24}/>
		</Icon>
	);
	const AppStoreIcon = (
		<Icon sx={{ width: "100%", height: "100%", marginTop: "8px", paddingTop:"4px", paddingBottom:"4px"}}>
			<img alt="app_store" src="apple.svg" height={24} width={24}/>
		</Icon>
	);



	return (
		<>
			<Box sx={{ textAlign: "center" }}>
				<div data-sal="slide-down" data-sal-delay="300" data-sal-easing="ease">
					<Box sx={{  height: "60vh" }}>
						<img alt="header" src="mobile_header.svg" height="100%"  />
					</Box>
				</div>
				<Typography variant="h4" component="div" sx={{ flexGrow: 1, marginTop: "4rem", fontWeight: "500"}} >
						{db.appName}
				</Typography>
				<Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, opacity: "0.5" , marginTop:'0.5rem'}} >
					Notes • Todos • AI Writing Assistant
				</Typography>
				<Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, opacity: "0.5" }} >
					Powered by ChatGPT
				</Typography>

				<a href={db.appLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#000000"}}>
          			<Button sx={{ textTransform: "none", fontFamily: `"Helvetica Neue", "Roboto", "sans-serif"`, marginTop: "4rem", background: "#FFFFFF", padding:'0.5rem',
						":hover": { bgcolor: "#FFFFFF", color: "#000000",boxShadow: "rgba(255, 255, 255, 0.21) 0px 0.755195px 3.77597px -0.75px, rgba(255, 255, 255, 0.204) 0px 1.93034px 9.65168px -1.5px, rgba(255, 255, 255, 0.192) 0px 3.86188px 19.3094px -2.25px, rgba(255, 255, 255, 0.173) 0px 7.32867px 36.6434px -3px, rgba(255, 255, 255, 0.13) 0px 14.554px 72.77px -3.75px, rgba(255, 255, 255, 0.024) 0px 32px 160px -4.5px, rgba(255, 255, 255, 0.16) 0px 16px 180px 0px"},
						borderRadius: "24px", paddingRight: "24px", paddingLeft: "32px", boxShadow: "rgba(255, 255, 255, 0.21) 0px 0.755195px 3.77597px -0.75px, rgba(255, 255, 255, 0.204) 0px 1.93034px 9.65168px -1.5px, rgba(255, 255, 255, 0.192) 0px 3.86188px 19.3094px -2.25px, rgba(255, 255, 255, 0.173) 0px 7.32867px 36.6434px -3px, rgba(255, 255, 255, 0.13) 0px 14.554px 72.77px -3.75px, rgba(255, 255, 255, 0.024) 0px 32px 160px -4.5px, rgba(255, 255, 255, 0.16) 0px 16px 180px 0px",}}
						variant="contained" startIcon={downloadIcon}>
							Download Now
					</Button>
        		</a>
				<Box sx={{ textAlign: "center" }}>
					<Button variant="outlined" sx={{ textTransform: "none", fontFamily: `"Helvetica Neue", "Roboto", "sans-serif"`, marginTop: "1rem", color: "#ffffff",
						borderRadius: "24px", paddingRight: "32px", paddingLeft: "32px", ":hover" : {borderColor:'#ffffff'}, borderColor:'#a4a4a4'}} color="secondary" 
						startIcon={AppStoreIcon} onClick={handleOpen}>
							&nbsp;&nbsp; Join Waitlist
					</Button>
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description">
						<Box sx={modalStyle}> 
							<Waitlist handleClose= {handleClose}/>
						</Box>
					</Modal>
				</Box>
			</Box>
		</>
	);
};

export default HeaderMob;
