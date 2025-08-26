// PUXA OS DADOS DO BANNER
export async function getBanner() {
const res = await fetch("http://127.0.0.1:1337/api/home-pages/ke5iwd6kzsc6e3xzq0zzt5o5?populate[Home][populate]=*");

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Strapi error ${res.status}: ${text}`);
  }

  const data = await res.json();
  return data;
}

// PUXA TODAS AS SEÇÕES
export async function getPosts() {
const res = await fetch("http://127.0.0.1:1337/api/home-pages?populate[Home][populate]=*");

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Strapi error ${res.status}: ${text}`);
  }

  const data = await res.json();
  return data;
}

export async function getHeroMainSection() {
  const res = await fetch("http://127.0.0.1:1337/api/home-pages/alktyg97au6n7qvxllahly9q?populate[Home][populate]=*")

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Strapi error ${res.status}: ${text}`);
  }

  const data = await res.json();
  return data;
}

export async function getHeroSection() {
  const res = await fetch("http://127.0.0.1:1337/api/home-pages/iied9dv76ih7j1re5s9b7a77?populate[Home][populate]=*")

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Strapi error ${res.status}: ${text}`);
  }

  const data = await res.json();
  return data;
}