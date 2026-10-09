import MainNews from "@/component/MainNews";
import Marquee from "@/component/Marquee";
import MostRead from "@/component/MostRead";
import NewsCard from "@/component/NewsCard";
import Image from "next/image";

interface otherSection {
  articles: {
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    imageAlt: string;
    id: number;
  }[];
  curationId: number;
  title: string;
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();

  const sections = data.data;
  const mainNews = sections[0].articles;

  const otherSections: otherSection[] = sections.slice(1);

  return (
    <div>
      
      <div className="mx grid grid-cols-3 gap-2 ">
        {/* news section  */}
        <div className="col-span-3 lg:col-span-2">
          <MainNews news={mainNews} />
          <div className="grid gap-5 mt-5">
            {otherSections.map((section) => (
              <div key={section.curationId}>
                <h1 className="text-xl pb-2 font-bold border-b-2 border-red-600">
                  {section.title}
                </h1>
                <div className="grid grid-cols-3 mt-5 gap-3">
                  {section.articles.map((news) => (
                    <NewsCard news={news} key={news.id} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* most read section  */}
        <div className="col-span-1">
          <MostRead />
        </div>
      </div>
    </div>
  );
}
