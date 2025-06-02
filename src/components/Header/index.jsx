import { Typography } from "@mui/material";
import { IoMdHelpCircleOutline } from "react-icons/io";

export default function Header() {
	return (
		<header className="page-header">
			<Typography variant="h6" component="h4" color="#fff ">
				SPLIT BILL
			</Typography>
			<IoMdHelpCircleOutline style={{ width: "20px", height: "20px", color: "#fff" }} />
		</header>
	);
}