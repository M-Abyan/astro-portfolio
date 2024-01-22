import { defineCollection, z } from 'astro:content';

const blogs = defineCollection({
    schema: ({image}) =>
    z.object({
        pubDate: z.date(),
        image: image(),
        description: z.string(),
        title: z.string(),
        author: z.string(),
        tags: z.array(z.string()),
    }),
});

export const collections = { blogs };