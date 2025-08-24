// src/app/posts/[slug]/page.tsx
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { strapiFetch } from '@/lib/strapi';
import { StrapiCollectionResponse, Post } from '@/types/strapi';

export const revalidate = 60;

async function getPost(slug: string) {
  const q = `?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=cover`;
  const res = await strapiFetch<StrapiCollectionResponse<Post>>('/api/posts', {
    query: q,
    revalidate: 60,
  });
  return res.data[0] ?? null;
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const item = await getPost(params.slug);
  if (!item) return notFound();

  const a = item.attributes;
  const cover = a.cover?.data?.attributes;
  const imgUrl = cover ? process.env.STRAPI_URL + cover.url : null;

  return (
    <article className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-semibold">{a.title}</h1>
      {imgUrl && cover?.width && cover?.height && (
        <Image
          src={imgUrl}
          width={cover.width}
          height={cover.height}
          alt={cover.alternativeText || a.title}
          className="rounded-md"
        />
      )}
      {a.content && <div dangerouslySetInnerHTML={{ __html: a.content }} />}
    </article>
  );
}
