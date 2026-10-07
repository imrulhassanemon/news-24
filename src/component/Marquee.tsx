
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface HeadLine{
    id: string;
    title: string;

}


const Marquee = async() => {

    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data = await res.json();

    const headLines:HeadLine[] = data.data;
    console.log(headLines);

    return (
        <div className="bg-[#a51d2d]  text-white">

            <div className = 'flex lg:max-w-7xl mx-auto'>
                <div className='py-1 bg-red-900 px-4 '>সর্বশেষ </div>
            <MarqueeText   className='py-1' direction='right' duration={8} playOnlyInView={true} willChange={true} >

            {headLines.map(h => <span key={h.id}> 
                <span>{h.title}</span>
                <span className='mx-5'>󠁯•󠁏</span>
            </span>)}
            </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;