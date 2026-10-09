import NewsCard from "@/component/NewsCard";


const CategoryNews = async({params}) => {

    const {categoryId} = await params;

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
    const data = await res.json();
    const CategoryNews = data.data;

    return (
        <div >
            Category News
            <h1 className='text-2xl font-bold border-red-800 mb-5 border-b-2'>{data.title}</h1>
            <div className='grid gap-5 grid-cols-3'>
                {CategoryNews.map((news) => <NewsCard key={news.id} news={news} />)}
            </div>
        </div>
    );
};

export default CategoryNews;