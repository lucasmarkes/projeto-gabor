import React, { useState, useEffect } from "react"
import {db} from "../../firebase"
import {ref, set, update, onValue} from "firebase/database"
import { CircularProgress, Box, Button, Typography } from "@mui/material"
import SavingsIcon from '@mui/icons-material/Savings';

function UpdateCoins() {
    const [coins, setCoins] = useState(0)
    const [vagas, setVagas] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])

    const insertData = () => {
        set(ref(db, "test"), {coins: 0, vaga1: 0})
        setCoins(0)
    }

    const updateData = (data: any) => {
        return update(ref(db, "test"), data)
    }

    const getData = () => {
        const dbRef = ref(db)
        onValue(dbRef, (snapshot) => {
            if(snapshot.exists()){
                setCoins(snapshot.val().test.coins)
                setVagas(snapshot.val().test.vaga1)
            } else{
                insertData()
            }
            setLoading(false)
        })
    }

    const updateCoins = () => {
        updateData({coins: coins}).then(() => {
            setCoins(coins)
        }).catch(() =>
            alert("Problema na comunicação com o firebase")
        )
    }
    
  	return (
    <>
        {loading ? (<CircularProgress size={24} />) : 
        (
            <Box sx={{display:"flex", flexDirection: "column", marginTop:"auto", marginBottom:"auto", backgroundColor: "white", borderRadius: "20px", padding: "100px", boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"}}>
                <Typography variant="h3" sx={{color: "black", marginBottom: "1.5rem", letterSpacing: 2, fontWeight: "600"}}>Marques && Liu Solutions</Typography>
                <Typography sx={{color: "black", marginBottom: "1rem", fontSize:"27px"}}>Insira créditos para estacionar! 💲💲</Typography>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <input className="form-control" type="number" min="1" value={coins} onChange={e => setCoins(Number(e.target.value))} />
                    <Button variant="contained" color="success" onClick={updateCoins} size="medium" sx={{marginLeft: "1rem"}}>
                        <SavingsIcon/>
                    </Button>
                </Box>
                {/* <Typography sx={{color: "black", marginTop:"2rem", fontSize:"20px"}}>Dinheiro disponível: R$ {coins}</Typography> */}
                <Typography sx={{color: "black", marginTop:"2rem", fontSize:"27px"}}>{vagas === 1 ? `🟢${vagas} Vaga disponível` : `🔴${vagas} Vagas disponíveis` } </Typography>
            </Box>
        )}
    </>
  )
}

export default UpdateCoins