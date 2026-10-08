import Image from "next/image";
interface News {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  imageAlt: string;
}

const NewsCard = ({news}: {news: News}) => {
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <Image
            width={1000}
            height={1000}
            className="w-full h-64 object-cover"
            src={news.imageUrl}
            alt={news.imageAlt}
          />
        </figure>
        <div className="card-body">
          <p className="text-red-800 font-bold">{news.category}</p>
          <h2 className="card-title">{news.title}</h2>
          <p>{news.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
