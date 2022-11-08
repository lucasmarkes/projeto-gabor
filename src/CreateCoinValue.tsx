import React, { useState } from "react"
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase"

function CreateCoinValue() {
	const [ coin, setCoin ] = useState("")
	
	const handleSubmit = async (e: any) => {
		e.preventDefault()
		try {
			const docRef = await addDoc(collection(db, "coins"), {
				coin
			})
			console.log("Document written with ID: ", docRef.id)
		} catch (error) {
			console.error("Error adding document: ", error)
		}
	}
	// const createCoinValue = (e: React.FormEvent<EventTarget>) => {
	// 	e.preventDefault()
	// 	const item = {
	// 		value: coin,
	// 	}
    //     db.push(item)
	// 	setCoin("")
	// }

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={coin} onChange={(e) => setCoin(e.target.value)} placeholder="Insert a coin value" />
			<button type="submit">Add</button>
		</form>
	)
}

export default CreateCoinValue