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

const locationCollection = defineCollection ({
  type: 'content',
  schema: ({image}) => z.object({
    title: z.string(),
    location: z.string(),
    description: z.string(),
    introduction: z.string(),
    bgImage: image().refine((img) => img.width >= 1080, {
      message: "Cover image must be at least 1080 pixels wide!",
    }).optional(),
    bgColor: z.string(),
    tags: z.array(z.string()),
  }),
});

const serviceCollection = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    title: z.string().min(5).max(70),
    description: z.string(),
    summary: z.string(),
    coverImage: z.object({
      src:image().refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
      alt: z.string(),
    })
  }),
});

export const collections = {
  'blog': blogCollection,
  'location' : locationCollection,
  'services' : serviceCollection,
};