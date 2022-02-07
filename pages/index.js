import Head from 'next/head'
import Image from 'next/image'
import Ponds from '../components/Ponds'


export default function Home() {
  return (
  <>
    <Head>
    <title>魚池參數</title>
    </Head>
    <div className='wrapper'>
      <Ponds />
      <Ponds />
      <Ponds />
  
     </div>
  </>
  
  )
}
