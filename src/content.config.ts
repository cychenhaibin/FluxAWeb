import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ──────────────────────────────────────────────────────────────
// FluxA — minimaxi.com 1:1 复刻 Content Collection schema
// 4 块业务数据驱动：services + pricing
// ──────────────────────────────────────────────────────────────

const services = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/services' }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    icon: z.string(), // lucide icon name (e.g. "Bot", "Sparkles")
    highlights: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
        }),
      )
      .min(3)
      .max(6),
    ctaLabel: z.string().default('立即购买'),
    showcase: z
      .object({
        image: z.string().optional(),
        badge: z.string().optional(),
        title: z.string().optional(),
        highlight: z.string().optional(),
        subtitle: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
    demo: z
      .object({
        thumbnail: z.string().optional(),
        description: z.string().optional(),
        url: z.string().optional(),
      })
      .optional(),
  }),
});

const pricing = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/pricing' }),
  schema: z.object({
    service: z.string(), // 服务 slug: chatgpt / claude / minimax / ai-aggregator
    tiers: z
      .array(
        z.object({
          name: z.string(),
          price: z.string(), // "$23" / "联系报价"
          period: z.string().default(''), // "/ 月" / "/ 月/人"
          originalPrice: z.string().default(''), // "官方 $20"
          serviceFee: z.string().default(''), // "$3"
          features: z.array(z.string()).min(3),
          recommended: z.boolean().default(false),
          ctaLabel: z.string().default('立即购买'),
        }),
      )
      .min(2)
      .max(4),
  }),
});

export const collections = { services, pricing };
