import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    title: z.string(),
    publishedDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    coverImage: image().refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      }).optional(),

  }),
});

export const collections = {
  'blog': blogCollection,
};