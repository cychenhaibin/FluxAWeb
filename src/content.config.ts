import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/services' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
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
      .max(5),
    ctaLabel: z.string().default('立即购买'),
  }),
});

const pricing = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/pricing' }),
  schema: z.object({
    service: reference('services'),
    tiers: z
      .array(
        z.object({
          name: z.string(),
          price: z.string(), // "$23" / "联系报价"
          period: z.string().default(''), // "/ 月" / "/ 月/人"
          originalPrice: z.string().default(''), // "官方 $20 + $3 人工费"
          features: z.array(z.string()).min(3),
          recommended: z.boolean().default(false),
          ctaLabel: z.string().default('立即购买'),
        }),
      )
      .min(2)
      .max(3),
  }),
});

// FAQ: single faq.json contains an array of 6-10 entries covering 5 categories.
// Note: diverges from design-doc's per-item object schema in favor of the
// brief's array-of-items format, which keeps a single canonical file.
const faq = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/faq' }),
  schema: z.array(
    z.object({
      question: z.string(),
      answer: z.string(),
      category: z.enum(['账户', '支付', '售后', '合规', '退款']),
    }),
  ).min(6).max(10),
});

export const collections = { services, pricing, faq };
