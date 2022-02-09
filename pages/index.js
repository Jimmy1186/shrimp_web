import Head from 'next/head'
import useSWR from 'swr'
import Ponds from '../components/Ponds'
// const { POND_8_COLLECTION  } = require("../models/pond");
// import dbConnect from "../utils/dbConnection";
// dbConnect();



const pond8fetcher = async()=>{
  const response = await fetch("http://localhost:3000/api/pond8Data")
  const payload8 = await response.json()
  return payload8
}

const pond9fetcher = async()=>{
  const response = await fetch("http://localhost:3000/api/pond9Data")
  const payload9 = await response.json()
  return payload9
}

const pond10fetcher = async()=>{
  const response = await fetch("http://localhost:3000/api/pond10Data")
  const payload10 = await response.json()
  return payload10
}

export default function Home() {
  const{data:payload8,error} = useSWR('pond8',pond8fetcher)
  const{data:payload9,error9} = useSWR('pond9',pond9fetcher)
  const{data:payload10,error10} = useSWR('pond10',pond10fetcher)
  // if(error8||error9||error10) return "data fetch fail"

 
  if(!payload9) return "loading"
  if(!payload10) return "loading"

  // if(!data9) return "loading"
  // if(!data10) return "loading"



  return (
  <>
    <Head>
    <title>魚池參數</title>
    </Head>
    <div className='wrapper'>
      {!payload8 ? "loading":(<Ponds pondTitle={8} data={payload8}/>)}
      <Ponds pondTitle={9} data={payload9}/>
      <Ponds pondTitle={10} data={payload10}/>
      
     </div>
  </>
  
  )
}
