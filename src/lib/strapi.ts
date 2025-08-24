export async function getPosts() {
const res = await fetch("http://127.0.0.1:1337/api/posts?populate=*");


console.log(res)
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Strapi error ${res.status}: ${text}`);
  }

  const data = await res.json();
  return data;
}