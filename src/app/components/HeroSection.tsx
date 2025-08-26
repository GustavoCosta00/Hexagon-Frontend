import React from "react";
import { getHeroSection } from "@/lib/strapi";
import ComeceAgora from "../components/ComeceAgora";
import medalha from "../../../public/medalha.png";

function resolveImageUrl(base: string, mediaField: any): string | null {
  if (!mediaField) return null;

  const data = mediaField.data ?? mediaField;
  if (Array.isArray(data)) {
    const first = data[0];
    const attr = first?.attributes ?? first;
    if (!attr) return null;
    const fmt = attr.formats ?? {};
    const candidate = fmt.large?.url ?? attr.url ?? fmt.thumbnail?.url;
    return candidate ? (candidate.startsWith("http") ? candidate : base + candidate) : null;
  }

  const attr = data?.attributes ?? data;
  if (!attr) return null;

  const candidate = attr.formats?.large?.url ?? attr.url ?? attr.formats?.thumbnail?.url;
  return candidate ? (candidate.startsWith("http") ? candidate : base + candidate) : null;
}

const HeroSection = async () => {
  const posts = await getHeroSection();
  const base_url = process.env.STRAPI_URL ?? "http://127.0.0.1:1337";

  // pega o item home-page (defensivo)
  const homeItem = posts?.data?.[1] ?? posts?.data ?? null;
  const homeAttrs = homeItem?.attributes ?? homeItem ?? {};

  const heroSection =
    homeAttrs?.home ??
    homeAttrs?.Home ??
    homeAttrs?.heroSection ??
    homeAttrs?.hero_sections ??
    homeAttrs?.sections ??
    homeAttrs?.components ??
    null;

  const heroArray = Array.isArray(heroSection) ? heroSection : heroSection ? [heroSection] : [];

  return (
    <section className="bg-gradient-to-b from-[#04060a] via-[#061019] to-[#071218] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {heroArray.map((item: any, idx: number) => {
          const mediaCandidates = [
            item.image,
            item.images,
            item.cover,
            item.media,
            item.bannerImage,
            item.banner,
          ];
          const mediaField = mediaCandidates.find((m) => m !== undefined && m !== null);
          const imgUrl = resolveImageUrl(base_url, mediaField);

          const reverse = idx % 2 === 1;

          return (
            <div
              key={item.id ?? idx}
              className={`flex flex-col-reverse gap-8 items-center md:items-center md:gap-12 md:flex-row ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
              }`}
              style={{marginTop:'4rem'}}
            >
              {/* LEFT - Texto */}
              <div className="w-full md:w-1/2">
                {/* Small badge */}
                <div className="inline-block bg-[#2a1410] border border-[#3a1f1b] text-orange-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  {item.slug}
                </div>

                {/* Title (com destaque laranja) */}
                <h2 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight text-white">
                  {item.title ? (
                    // se quiser destacar uma palavra específica,
                    // substitua aqui por lógica para envolver a palavra em <span className="text-orange-500">...</span>
                    <>
                      {item.title.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="text-orange-400">{item.title.split(" ").slice(-1)}</span>
                    </>
                  ) : (
                    "Título do Hero"
                  )}
                </h2>

                <p className="mt-4 text-gray-300 max-w-xl">{item.excerpt ?? item.subtitle ?? "-"}</p>

                {/* Slogan cards */}
                <div className="mt-6 flex flex-col gap-3">
                  {/* cada item com fundo escuro e ícone */}
                  {item.sloganCard?.subSloganTitle1 && (
                    <div className="flex items-center gap-3 bg-[#0f1416] border border-[#2a2f33] rounded-xl px-4 py-3 shadow-sm max-w-xl">
                      <img src={medalha.src} alt="ícone" className="w-6 h-6" />
                      <span className="text-sm">{item.sloganCard.subSloganTitle1}</span>
                    </div>
                  )}

                  {item.sloganCard?.subSloganTitle2 && (
                    <div className="flex items-center gap-3 bg-[#0f1416] border border-[#2a2f33] rounded-xl px-4 py-3 shadow-sm max-w-xl">
                      <img src={medalha.src} alt="ícone" className="w-6 h-6" />
                      <span className="text-sm">{item.sloganCard.subSloganTitle2}</span>
                    </div>
                  )}

                  {item.sloganCard?.subSloganTitle3 && (
                    <div className="flex items-center gap-3 bg-[#0f1416] border border-[#2a2f33] rounded-xl px-4 py-3 shadow-sm max-w-xl">
                      <img src={medalha.src} alt="ícone" className="w-6 h-6" />
                      <span className="text-sm">{item.sloganCard.subSloganTitle3}</span>
                    </div>
                  )}
                </div>


                {/* componente secundário */}
                <div className="mt-6">
                  {item.slug === 'Seja um fundador' ?
                  <ComeceAgora value="Seja um fundador"/> :
                  <ComeceAgora value="Comece Agora"/> 
                }
                </div>
              </div>

              {/* RIGHT - phone frame com imagem */}
              <div className="w-full md:w-1/2 flex justify-center">
                {/* wrapper de borda com gradiente laranja */}
                <div className="rounded-3xl p-1 bg-gradient-to-b from-orange-600 to-orange-400 shadow-2xl transform hover:scale-[1.01] transition">
                  <div
                    className="bg-[#071018] rounded-2xl overflow-hidden"
                    style={{ width: 340, maxWidth: "90vw" }}
                  >
                    {imgUrl ? (
                      <img
                        src={imgUrl}
                        alt={item.title ?? "Imagem hero"}
                        className="w-full object-cover"
                        // altura controlada para manter proporção semelhante ao mobile mockup
                      />
                    ) : (
                      <div className="w-full h-[680px] flex items-center justify-center text-gray-500">
                        Sem imagem
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HeroSection;
