import Image from "next/image";

interface news {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    imageAlt: string;
}


const MainNews = ({ news }: {news:news[]}) => {

  const [firstNews, ...otherNews] = news

  return (
    <div className="flex  gap-4">
        {/* first news */}
      <div className="card bg-base-100 w-full  shadow-sm">
        <figure>
          <Image
          width={600}
            height={600}
            className="w-full h-64 object-cover"
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
          />
        </figure>
        <div className="card-body">
        <p className= 'text-red-800 font-bold'>{firstNews.category}</p>
          <h2 className="card-title">{firstNews.title}</h2>
          <p>
            {firstNews.description}
          </p>
        </div>
      </div>
      {/* other news */}

      <div>
        {otherNews.slice(0,4).map((news) => (
          <div key={news.id} className=" bg-base-100 border  rounded-xs border-gray-500 mb-3">
            <div className="card-body">
           <p className= 'text-red-800 font-bold'>{firstNews.category}</p>
              <h2 className="card-title">{news.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
