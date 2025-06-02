import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { FaQrcode } from "react-icons/fa";

export default function EnterExistingBillComponent() {
  const [code, setCode] = useState<String>("");

	return (
		<div className="new-bill-box">
			<div className="box-icon-container">
				<FaQrcode style={{ width: "50px", height: "50px", color: "#2e7d32" }} />
			</div>
			<div className="box-text">
				<Typography variant="subtitle1" component="h1" color="#2e7d32">
					<b>Entrar em uma conta compartilhada</b>
				</Typography>
				<Typography variant="body2" component="p" color="#000">
					Entre com o código da conta compartilhada para participar da divisão.
				</Typography>
				<div className="box-textfield-container">
					<TextField
						label="Código da conta compartilhada"
						variant="standard"
						color="success"
						style={{ width: "90%" }}
						onChange={(e) => setCode(e.target.value)}
					/>
					<Button
						variant="contained"
						color="success"
						style={{ marginTop: "10px" }}
						disabled={code.length < 1}
					>Entrar</Button>
				</div>
			</div>
		</div>
	);
}