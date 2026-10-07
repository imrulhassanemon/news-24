import MainNews from "@/component/MainNews";
import Marquee from "@/component/Marquee";
import Image from "next/image";

export default async function Home () {

  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()

  const sections = data.data;
  const mainNews = sections[0].articles

    

  return (
    <div>
      <Marquee/>

      <div className='mx-auto grid grid-cols-3 gap-2 lg:max-w-7xl'>
        {/* news section  */}
        <div className='col-span-3 lg:col-span-2'>
          <MainNews news={mainNews}/>
        </div>
        {/* most read section  */}
        <div className='bg-green-300 col-span-1'>
s
        </div>
      </div>
       
    </div>
  );
}
