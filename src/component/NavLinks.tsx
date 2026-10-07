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
    console.log(navs);

    const filteredNavs = navs.filter(n => n.scrapable)


    return (
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4  bg-white py-2 text-sm font-medium text-gray-500">
            <Link href={'/'}>হোম</Link>
            {
                filteredNavs.map((nav, i) => <Link key={i} href={nav.slug}>{nav.title}</Link>)
            }
        </div>
    );
};

export default NavLinks;