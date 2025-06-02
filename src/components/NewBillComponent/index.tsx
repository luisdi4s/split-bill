import { Button, TextField, Typography } from "@mui/material";
import { MdOutlineLocalDining } from "react-icons/md";

export default function NewBillComponent({ inCreationMode, setCreationMode }: { inCreationMode: boolean, setCreationMode: (mode: boolean) => void }) {
	return <div className="new-bill-box">
		<div className="box-icon-container">
			<MdOutlineLocalDining style={{ width: "50px", height: "50px", color: "#2e7d32" }} />
		</div>
		<div className="box-text">
			<Typography variant="subtitle1" component="h1" color="#2e7d32">
				<b>Criar nova conta compartilhada</b>
			</Typography>
			<Typography variant="body2" component="p" color="#000">
				Crie uma nova conta compartilhada para dividir despesas com amigos e familiares.
			</Typography>
			{!inCreationMode && <div className="box-standalone-button-container">
				<div className="button-container">
					<Button
						variant="contained"
						color="success"
						fullWidth
						style={{ marginTop: "10px" }}
						onClick={() => setCreationMode(true)}
					>
						Criar
					</Button>
				</div>
			</div>
			}

			{
				inCreationMode && <div className="new-bill-form-container">
					<TextField
						label="Seu nome"
						variant="standard"
						color="success"
						style={{ width: "90%" }}
					/>

					<TextField
						label="Estabelecimento"
						variant="standard"
						color="success"
						style={{ width: "90%" }}
					/>

					<div className="box-standalone-button-container">
						<Button
							variant="outlined"
							color="success"
							style={{ marginTop: "10px", marginRight: "10px" }}
							onClick={() => setCreationMode(false)}
						>
							Voltar
						</Button>
						<Button
							variant="contained"
							color="success"
							style={{ marginTop: "10px" }}
						>
							Criar
						</Button>
					</div>
				</div>
			}
		</div>
	</div>
}