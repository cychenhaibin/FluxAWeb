# FluxA 官网

FluxA 是面向终端用户的 AI 服务转售/拼车品牌官网。

提供 4 块业务：

- **ChatGPT 充值** — OpenAI 官方账号直充（Plus / Pro 100 / Pro 200）
- **Claude 充值** — Anthropic 官方账号直充（Pro / Max 5x / Max 20x）
- **Claude Max 拼车** — Claude Max 5x 团队账号 2-4 人拼车
- **AI 聚合平台** — GPT + Claude + Gemini + 国产大模型统一接入

## 技术栈

- [Astro 5](https://astro.build) (Islands 架构 + 静态生成)
- [React 18](https://react.dev) (shadcn/ui React island)
- [TypeScript](https://www.typescriptlang.org) (strict mode)
- [Tailwind CSS v4](https://tailwindcss.com) (via Vite 插件)
- [shadcn/ui](https://ui.shadcn.com) (new-york-v4 严格官方源)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

## 本地开发

```sh
# 依赖要求：Node.js >= 22.12.0
npm install
npm run dev          # http://localhost:4321
npm run build        # 产出 dist/
npm run preview      # 本地预览 build 产物
npm run astro check  # 类型检查
```

## 部署

### Vercel (推荐)

1. 打开 [Vercel Dashboard](https://vercel.com/new) → Import Project → 选择 `cychenhaibin/FluxAWeb` 仓库
2. Vercel 自动检测 Astro 5 + Node 22，配置如下（如未自动填入）：
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
3. 点击 Deploy
4. 之后每次 push 到 `main` 分支，Vercel 自动重新 build + deploy（无需 GitHub Actions）

如需显式配置，仓库根有 `vercel.json`。

### 静态托管

`dist/` 目录是纯静态产物，可部署到任何静态主机（Cloudflare Pages / Netlify / Nginx）。

```sh
npm run build
# 上传 dist/ 目录到目标主机
```

## 目录结构

```
fluxa/
├── public/                 # 静态资源（favicon / og.png / robots.txt）
├── src/
│   ├── components/
│   │   ├── ui/             # shadcn 官方源（不修改）
│   │   ├── sections/       # 首页 section 组件
│   │   ├── site-*.astro    # Header / Footer
│   │   ├── pricing-*.tsx   # Pricing React island
│   │   └── faq-accordion.tsx
│   ├── content/            # Content Collections (services / pricing / faq)
│   ├── content.config.ts   # Zod schema
│   ├── layouts/            # BaseLayout
│   ├── lib/                # site-config + utils
│   ├── pages/              # 路由 (/ + /services/[slug] + /pricing + /faq + /contact)
│   └── styles/             # globals.css (Tailwind v4 + shadcn CSS variables)
├── astro.config.mjs
├── components.json
├── tailwind config 走 @tailwindcss/vite (无 tailwind.config.ts)
├── tsconfig.json
├── vercel.json
└── package.json
```

## 内容编辑

所有业务内容（服务、套餐、FAQ）通过 Astro Content Collections 文件驱动（`src/content/`），修改后 `npm run build` 即可：

- `src/content/services/*.json` — 4 块业务的名称/简介/卖点
- `src/content/pricing/*.json` — 每个业务的套餐
- `src/content/faq/faq.json` — FAQ 列表
- `src/lib/site-config.ts` — 品牌名、导航、客服联系方式

## License

Private — all rights reserved.
