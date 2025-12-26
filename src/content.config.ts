import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        author: z.string(),
        image: image().optional(),
    }),
});
const projects = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        status: z.string(),
        tags: z.array(z.string()),
        url: z.string(),
        image: image(),
    }),
});

export const collections = { blog, projects };
