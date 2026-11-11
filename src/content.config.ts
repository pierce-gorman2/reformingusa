import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// To add content, drop a new .md file in the matching folder under src/content/.
// Set `draft: true` to hide it.

const episodes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/episodes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    episodeNumber: z.number().optional(),
    url: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    url: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    author: z.string().default('Reforming USA'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { episodes, videos, essays };
