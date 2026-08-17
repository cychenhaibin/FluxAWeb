import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, ArrowRight, Clock, ShieldCheck } from "lucide-react";

// 每个服务对应的品牌 logo 路径
const brandLogo: Record<string, { src: string; bg: string }> = {
  chatgpt: { src: "/logos/chatgpt.svg", bg: "bg-white" },
  claude: { src: "/logos/claude.svg", bg: "bg-white" },
  minimax: { src: "/logos/minimax.svg", bg: "bg-white" },
};

interface ServiceHeroCard {
  slug: string;
  name: string;
  description: string;
  icon: string;
  price: string;
  href: string;
  cta: string;
}

const featured: ServiceHeroCard = {
  slug: "minimax",
  name: "MiniMax Max 拼车",
  description:
    "MiniMax Max 官方团队帐号 2-4 人拼车，4 人总价 ¥119 / 月",
  icon: "Users",
  price: "¥119 / 月",
  href: "#minimax",
  cta: "立即拼车",
};

const other: ServiceHeroCard[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT 充值",
    description: "OpenAI 官方账号直充，Plus / Pro 100 / Pro 200 全档位可选。",
    icon: "Bot",
    price: "$23 / 月起",
    href: "#chatgpt",
    cta: "立即购买",
  },
  {
    slug: "claude",
    name: "Claude 充值",
    description: "Anthropic 官方账号直充，Pro / Max 5x / Max 20x 全档位可选。",
    icon: "Sparkles",
    price: "$23 / 月起",
    href: "#claude",
    cta: "立即购买",
  },
  {
    slug: "ai-aggregator",
    name: "AI 聚合平台",
    description: "GPT + Claude + Gemini + 国产大模型，统一 API + 统一 UI。",
    icon: "Globe",
    price: "$9.9 体验价",
    href: "#fluxa",
    cta: "立即试用",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden border-b border-border bg-background">
      <div className="container-fluid py-16 md:py-24">
        {/* Hero 标题区 */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-5 rounded-full px-3 py-1 text-xs font-medium">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            官方价透明 · 服务费透明
          </Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            FluxA
          </h1>
          <p className="mt-4 text-lg font-medium sm:text-xl">
            <span className="bg-gradient-to-r from-[#FF276F] via-[#FF7038] to-[#7A27FF] bg-clip-text text-transparent">
              AI 服务，一站搞定
            </span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            4 块业务一站搞定 · 拼车无服务费 / 充值仅 $3 · 5 分钟到账 · 7×24 客服
          </p>
        </div>

        {/* 4 个服务卡：1 个主推 + 3 个并排 */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* 主推卡 (FEATURED) — 跨 2 行, pink-orange 渐变 + 深底色 */}
          <Card
            id="minimax"
            className="relative md:row-span-2 overflow-hidden border-0 bg-gradient-to-br from-[#FF276F] via-[#FF7038] to-[#7A27FF] text-background transition-all hover:shadow-xl"
          >
            <CardHeader className="gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white p-1.5">
                  <img src="/logos/minimax.svg" alt="MiniMax" className="h-full w-full" />
                </span>
                <Badge
                  variant="secondary"
                  className="rounded-full bg-background/20 text-background border-0 hover:bg-background/20"
                >
                  团队账号 · 主推
                </Badge>
              </div>
              <CardTitle className="text-2xl font-semibold tracking-tight text-background sm:text-3xl">
                {featured.name}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-background/85">
                {featured.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col gap-5">
              <div>
                <div className="text-xs uppercase tracking-wider text-background/70">
                  4 人拼车价
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold tracking-tight tnum text-background sm:text-4xl">
                    {featured.price}
                  </span>
                  <span className="rounded-md bg-background/15 px-2 py-0.5 text-xs font-medium text-background/90">
                    4 人总价
                  </span>
                </div>
              </div>
              <ul className="space-y-1.5 text-sm text-background/85">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  MiniMax 官方账号
                </li>
                <li className="flex items-center gap-2">
                  <img src="/logos/minimax.svg" alt="MiniMax" className="h-3.5 w-3.5" />
                  2-4 人拼车，人均更低
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5" />
                  下单后 5 分钟开通
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="w-full rounded-md bg-background text-foreground hover:bg-background/90"
              >
                <a href={featured.href}>
                  {featured.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* 3 个并排卡 — 每个有彩色顶条 + 彩色 icon 背景 */}
          {other.map((s, idx) => {
            const id = s.slug === "ai-aggregator" ? "fluxa" : s.slug;
            // 每个服务一种品牌色 — 只用于顶部色条 + chip + 价格文字
            const accent: Record<string, { chip: string; bar: string; priceText: string }> = {
              chatgpt: {
                chip: "bg-[#10A37F]/10 text-[#0d8c6c] border-[#10A37F]/20",
                bar: "from-[#10A37F] to-[#10A37F]/0",
                priceText: "text-[#0d8c6c]",
              },
              claude: {
                chip: "bg-[#da7756]/10 text-[#b85f3d] border-[#da7756]/20",
                bar: "from-[#da7756] to-[#da7756]/0",
                priceText: "text-[#b85f3d]",
              },
              "ai-aggregator": {
                chip: "bg-[#7A27FF]/10 text-[#7A27FF] border-[#7A27FF]/20",
                bar: "from-[#7A27FF] to-[#7A27FF]/0",
                priceText: "text-[#7A27FF]",
              },
            };
            const c = accent[s.slug];
            const logo = brandLogo[s.slug];
            return (
              <Card
                key={s.slug}
                id={id}
                className="group relative overflow-hidden transition-all hover:border-foreground/20 hover:shadow-sm"
              >
                {/* 顶部彩色条 — 保留品牌色装饰 */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.bar}`} />
                <CardHeader className="gap-3 pt-6">
                  <div className="flex items-center gap-2">
                    {logo ? (
                      <span className={`inline-flex h-8 w-8 items-center justify-center rounded-md p-1 ${logo.bg}`}>
                        <img src={logo.src} alt={s.name} className="h-full w-full" />
                      </span>
                    ) : (
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background">
                        <Globe className="h-4 w-4" />
                      </span>
                    )}
                    <Badge variant="outline" className={`rounded-full px-2.5 text-[10px] font-medium uppercase tracking-wider ${c.chip}`}>
                      0{idx + 1}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold tracking-tight">
                    {s.name}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {s.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto flex flex-col gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      起售价
                    </div>
                    <div className={"mt-1 text-2xl font-semibold tracking-tight tnum " + c.priceText}>
                      {s.price}
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                  >
                    <a href={s.href}>
                      {s.cta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
