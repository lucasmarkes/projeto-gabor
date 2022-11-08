import React, { useState } from "react"
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase"
import { Button, Typography } from "@mui/material";
import {
	Container,
	AddRemoveCoinsButtonsContainer,
	SubmitInfoContainer,
	CoinsText,
	PageTitle
} from './styled';


function CreateCoinValue() {
	const [coin, setCoin] = useState(0);
	
	const handleSubmit = async (e: any) => {
		e.preventDefault()
		try {
			const docRef = await setDoc(doc(db, 'coins', 'one'), {
				coin: coin,
				 name: "Los Angeles",
				state: "CA",
				country: "USA"
			})
			console.log("ADEED: ", docRef)
		} catch (error) {
			console.error("ERROR: ", error)
		}
	}

	const addCoins = (e: any) => {
		e.preventDefault()
		setCoin(coin + 10)
	}

	const removeCoins = (e: any) => {
		e.preventDefault()
		setCoin(coin - 10)

		if (coin <= 0) {
			setCoin(0)
		}
	}
	
	return (
		<>
			<Container>
				<PageTitle variant="h4">
					Adicione créditos para o motorista!
				</PageTitle>
				<AddRemoveCoinsButtonsContainer>
					<Button variant="contained" onClick={addCoins} size='small'
						sx={{ textTransform: 'none' }}>+10</Button>
					<CoinsText variant="h4">
						{coin}
					</CoinsText>
					<Button variant="contained" onClick={removeCoins} size='small'
						sx={{ textTransform: 'none', marginLeft: '1rem' }}>-10</Button>
				</AddRemoveCoinsButtonsContainer>
				<SubmitInfoContainer>
					<Button variant="contained" onClick={handleSubmit} size='small'
					sx={{  textTransform: 'none' }}>
					Submit
					</Button>
				</SubmitInfoContainer>
			</Container>
		</>
	)
}

export default CreateCoinValue