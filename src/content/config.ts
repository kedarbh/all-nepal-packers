import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};