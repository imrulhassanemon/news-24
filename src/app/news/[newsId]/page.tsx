interface News {
  id: string;
  title: string;
  description: string;
  imageUrl: string ;
  firstPublished: string;
  source: string;
  sourceUrl: string;
  byline: {
    name: string;
    role: string;
  }[];
  topics: {
    id: string;
    name: string;
  }[];
  tags: string[];
  body: {
    type: "image" | "text" | "subheading";
    text?: string;
    url?: string | undefined;
    width?: number;
    height?: number;
    caption?: string;
    altText?: string;
    copyrightHolder?: string;
  }[];
}

import Image from "next/image";

const NewsDetails = async ({ params } ) => {
    const { newsId } = await params;

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/article/${newsId}`
    );

    // if (!res.ok) {
    //     throw new Error("Failed to fetch news");
    // }

    const { data: news} : {data:News} = await res.json();

    console.log(news);

    return (
        <main className="mx-auto max-w-4xl px-4 py-10">

            {/* Topics */}
            <div className="mb-4 flex flex-wrap gap-2">
                {news?.topics?.map((topic) => (
                    <span
                        key={topic.id}
                        className="rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-600"
                    >
                        {topic.name}
                    </span>
                ))}
            </div>

            {/* Title */}
            <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
                {news.title}
            </h1>

            {/* Author & Date */}
            <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span>
                    লিখেছেন:{" "}
                    <strong className="text-gray-800">
                        {news.byline?.[0]?.name}
                    </strong>
                </span>

                <span>•</span>

                <span>
                    {new Date(news.firstPublished).toLocaleDateString(
                        "bn-BD",
                        {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        }
                    )}
                </span>
            </div>

            {/* Main Image */}
            <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl">
                <Image
                    src={news?.imageUrl}
                    alt={news?.title}
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Image caption */}
            {news.body?.[0]?.caption && (
                <p className="mb-8 text-sm text-gray-500">
                    {news.body[0].caption}
                </p>
            )}

            {/* Description */}
            <div className="mb-8 rounded-xl bg-gray-50 p-5">
                <p className="text-lg font-medium leading-8 text-gray-700">
                    {news.description?.blocks?.[0]?.model?.blocks?.[0]?.model
                        ?.text}
                </p>
            </div>

            {/* News Body */}
            <article className="space-y-6 text-lg leading-9 text-gray-700">
                {news.body?.map((item, index) => {
                    // Image
                    if (item.type === "image") {
                        return (
                            <figure key={index} className="my-8">
                                <div className="relative overflow-hidden rounded-2xl">
                                    <Image
                                        src={item.url}
                                        alt={item.altText || news.title}
                                        width={item.width}
                                        height={item.height}
                                        className="h-auto w-full object-cover"
                                    />
                                </div>

                                {item.caption && (
                                    <figcaption className="mt-2 text-sm text-gray-500">
                                        {item.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );
                    }

                    // Subheading
                    if (item.type === "subheading") {
                        return (
                            <h2
                                key={index}
                                className="mt-10 text-2xl font-bold text-gray-900"
                            >
                                {item.text}
                            </h2>
                        );
                    }

                    // Text
                    if (item.type === "text") {
                        return (
                            <p key={index}>
                                {item.text}
                            </p>
                        );
                    }

                    return null;
                })}
            </article>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-2 border-t pt-6">
                {news.tags?.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-600"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            {/* Source */}
            <div className="mt-8 border-t pt-6 text-sm text-gray-500">
                Source:{" "}
                <span className="font-medium text-gray-800">
                    {news.source}
                </span>
            </div>
        </main>
    );
};

export default NewsDetails;
