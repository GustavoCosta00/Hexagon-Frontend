// src/types/strapi.ts
export type StrapiItem<T> = {
  id: number;
  attributes: T & { createdAt: string; updatedAt: string; publishedAt?: string };
};

export type StrapiCollectionResponse<T> = {
  data: StrapiItem<T>[];
  meta: any;
};

export type StrapiSingleResponse<T> = {
  data: StrapiItem<T> | null;
  meta: any;
};

// Exemplo de "Post"
export type Post = {
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  cover?: {
    data: {
      id: number;
      attributes: { url: string; width: number; height: number; alternativeText?: string };
    } | null;
  };
};
