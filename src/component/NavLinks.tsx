import Link from "next/link";

interface Navs{
    slug: string;
    title: string ;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}

const NavLinks = async () => {

    const res = await fetch('https://news-api-v2.vercel.app/api/categories');
    const data = await res.json()
    const navs : Navs[] = data.data;
    const filteredNavs = navs.filter(n => n.scrapable)


    return (
        <div className=" flex  items-center justify-center gap-4  bg-white py-2 text-sm font-medium text-gray-500">
            <Link href={'/'}>হোম</Link>
            {
                filteredNavs.map((nav, i) => <Link key={i} href={`/category/${nav.slug}`}>{nav.title}</Link>)
            }
        </div>
    );
};

export default NavLinks;