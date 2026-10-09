interface mostReadNews {
  id: number;
  title:string;
}

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const news :mostReadNews[] = data.data;

  return (
    <div className="card bg-base-100 border-gray-300 border p-2 ">
      <h1 className="font-bold text-red-600 mb-5">সর্বাধিক পঠিত</h1>
      <div className='grid gap-3'>
        {
        news.map((n, i) => <div key={n.id}><span className='mr-2 text-2xl text-red-700'>{i+1}</span>{n.title}</div>)
      }
      </div>
    </div>
  );
};

export default MostRead;
