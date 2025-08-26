import { getBanner } from "@/lib/strapi";

export default async function Banner() {
  const posts = await getBanner();
  const base_url = "http://localhost:1337";

  // Dados do banner
  const homeData = posts.data;
  const banner = homeData.Home?.[0];

  return (
    <section className="bg-black text-white py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        <h1 className="text-3xl font-bold mb-4">{banner?.title}</h1>
        <p className="text-lg text-gray-300 mb-6">{banner?.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {banner?.image?.map((img: any, idx: number) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-lg bg-gray-900">
              <img
                src={base_url + img.formats?.medium?.url}
                alt={`Banner ${idx}`}
                className="w-full h-64 object-cover"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
