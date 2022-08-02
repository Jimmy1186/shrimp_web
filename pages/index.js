import Head from "next/head";
import { useEffect, useState } from "react";
import Ponds from "../components/Ponds";
import axios from "axios";
import Loading from "../components/Loading";

const DNS = process.env.DNS;
const POND_6_API = process.env.POND_6_API;
const POND_7_API = process.env.POND_7_API;
const POND_8_API = process.env.POND_8_API;
const POND_9_API = process.env.POND_9_API;
const POND_10_API = process.env.POND_10_API;

export default function Home() {
  const [payload6, setPayload6] = useState([]);
  const [payload7, setPayload7] = useState([]);
  const [payload8, setPayload8] = useState([]);
  const [payload9, setPayload9] = useState([]);
  const [payload10, setPayload10] = useState([]);
  //
  useEffect(() => {
    const fetchData = async () => {
      const result6 = await axios(`${DNS}+${POND_6_API}`).catch(function (
        error
      ) {
        console.log(error);
      });
      const result7 = await axios(`${DNS}+${POND_7_API}`).catch(function (
        error
      ) {
        console.log(error);
      });
      const result8 = await axios(`${DNS}+${POND_8_API}`).catch(function (
        error
      ) {
        console.log(error);
      });
      const result9 = await axios(`${DNS}+${POND_9_API}`).catch(function (
        error
      ) {
        console.log(error);
      });
      const result10 = await axios(`${DNS}+${POND_10_API}`).catch(function (
        error
      ) {
        console.log(error);
      });
      try {
        setPayload6(result6.data);
        setPayload7(result7.data);
        setPayload8(result8.data);
        setPayload9(result9.data);
        setPayload10(result10.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    setInterval(async () => {
      fetchData();
    }, 5000);
    return () => {
      clearInterval();
    };
  }, []);
  return (
    <>
      <Head>
        <title>魚池參數</title>
      </Head>

      <div className="wrapper">
        {payload6.length == 0 ? (
          <Loading pondTitle={6} />
        ) : (
          <Ponds pondTitle={6} data={payload6} />
        )}
        {payload7.length == 0 ? (
          <Loading pondTitle={7} />
        ) : (
          <Ponds pondTitle={7} data={payload7} />
        )}
        {payload8.length == 0 ? (
          <Loading pondTitle={8} />
        ) : (
          <Ponds pondTitle={8} data={payload8} />
        )}
        {payload9.length == 0 ? (
          <Loading pondTitle={9} />
        ) : (
          <Ponds pondTitle={9} data={payload9} />
        )}
        {payload10.length == 0 ? (
          <Loading pondTitle={10} />
        ) : (
          <Ponds pondTitle={10} data={payload10} />
        )}
      </div>
    </>
  );
}
