// src/app/posts/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from "@/lib/strapi";
import { StrapiCollectionResponse, Post } from '@/types/strapi';

export const revalidate = 60; // revalida no máx. a cada 60s (ISR)  ← doc Next
// https://nextjs.org/docs/app/getting-started/caching-and-revalidating

export default async function PostsPage() {
  const posts = await getPosts();
  const dados = posts.data
  return (
    <div>
      <h1>Lista de Posts</h1>
      <ul>
        {dados.map((post: any) => (
          <li key={post.id}>
            <h2>{post.attributes.Titulo}</h2>
            <p>{post.attributes.Descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}