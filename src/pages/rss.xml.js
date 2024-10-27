import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'All Nepal Packers and Movers Blog',
    description: 'All you need to know for your smooth relocation',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedDate,
      description: post.data.description,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}/`,
    })),
  });
}