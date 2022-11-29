import React, { useState } from "react"

function CreateCoinValue() {

    const [details, setDetails] = useState({fName: ''})

    const PostData =async(e: any)=>{
        e.preventDefault()

    	const{fName}=details;

       const res = await fetch("https://fir-se-22-2-default-rtdb.firebaseio.com/test/coins.json",
       {
           method:'POST',
           headers:{
               'Content-Type':'text/plain'
           },
           body:JSON.stringify({
            fName, 
           })
        })
		console.log(res)
    }

	const GetData = async(e: any)=>{
		e.preventDefault()
		const res = await fetch("https://fir-se-22-2-default-rtdb.firebaseio.com/test.json")
		const data = await res.json()
		console.log(data)
	}

  	return (
    <div className='form' >
        <input type='text' placeholder='Enter coins value' onChange={(e)=> setDetails({...details,fName:e.target.value})} />
        <button onClick={PostData}>Submit</button>
		<button onClick={GetData}>Get Data</button>
    </div>
  )
}

export default CreateCoinValue