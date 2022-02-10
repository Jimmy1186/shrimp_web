import Head from "next/head";
import { useEffect, useState } from "react";
import Ponds from "../components/Ponds";
import axios from "axios";
import Loading from "../components/Loading";

// }

export default function Home() {
  const [payload8, setPayload8] = useState([]);
  const [payload9, setPayload9] = useState([]);
  const [payload10, setPayload10] = useState([]);



  useEffect(() => {
     const fetchData = async () => {
        const result8 = await axios("http://localhost:3000/api/pond8Data");
        const result9 = await axios("http://localhost:3000/api/pond9Data");
        const result10 = await axios("http://localhost:3000/api/pond10Data");
        setPayload8(result8.data);
        setPayload9(result9.data);
        setPayload10(result10.data);
      };
fetchData();

    setInterval(async() => {
     
      fetchData();
      
    }, 5000);
   return ()=>{
     clearInterval()
   }
  }, []);
  return (
    <>
      <Head>
        <title>魚池參數</title>
      </Head>
    
      <div className="wrapper">
      {payload8.length==0 ? (  <Loading pondTitle={8} />):(<Ponds pondTitle={8} data={payload8}/>)}
        {payload9.length==0 ? (  <Loading pondTitle={9} />):(<Ponds pondTitle={9} data={payload9}/>)}
        {payload10.length==0 ? (  <Loading pondTitle={10} />):(<Ponds pondTitle={10} data={payload10}/>)}
      </div>
    </>
  );
}
