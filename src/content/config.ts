import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    publishedDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    coverImage: image().optional(),
  }),
});

const locationCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    location: z.string(),
    description: z.string(),
    introduction: z.string().optional(),
    bgImage: image().optional(),
    bgColor: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

const serviceCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string().min(5).max(70),
    icon: z.string().optional().default("star"),
    description: z.string(),
    summary: z.string(),
    coverImage: z.object({
      src: image(),
      alt: z.string(),
    })
  }),
});

export const collections = {
  'blog': blogCollection,
  'location': locationCollection,
  'services': serviceCollection,
};