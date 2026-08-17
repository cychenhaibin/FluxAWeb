import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Sparkles,
  Users,
  Globe,
  ShieldCheck,
  Layers,
  Zap,
  Headphones,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot,
  Sparkles,
  Users,
  Globe,
  ShieldCheck,
  Layers,
  Zap,
  Headphones,
};

interface Service {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  highlights: { title: string; description: string; icon: string }[];
  ctaLabel: string;
  showcase?: {
    badge?: string;
    title?: string;
    highlight?: string;
    subtitle?: string;
    description?: string;
  };
}

export default function Services({ services }: { services: Service[] }) {
  // 每个服务的品牌色
  const accent: Record<string, { icon: string; chip: string; bar: string; ring: string }> = {
    chatgpt: {
      icon: "bg-[#10A37F] text-white",
      chip: "bg-[#10A37F]/10 text-[#0d8c6c] border-[#10A37F]/20",
      bar: "from-[#10A37F] to-[#10A37F]/0",
      ring: "hover:border-[#10A37F]/30",
    },
    claude: {
      icon: "bg-[#da7756] text-white",
      chip: "bg-[#da7756]/10 text-[#b85f3d] border-[#da7756]/20",
      bar: "from-[#da7756] to-[#da7756]/0",
      ring: "hover:border-[#da7756]/30",
    },
    minimax: {
      icon: "bg-gradient-to-br from-[#FF276F] to-[#7A27FF] text-white",
      chip: "bg-[#7A27FF]/10 text-[#7A27FF] border-[#7A27FF]/20",
      bar: "from-[#FF276F] via-[#FF7038] to-[#7A27FF]/0",
      ring: "hover:border-[#7A27FF]/30",
    },
    "ai-aggregator": {
      icon: "bg-[#7A27FF] text-white",
      chip: "bg-[#7A27FF]/10 text-[#7A27FF] border-[#7A27FF]/20",
      bar: "from-[#7A27FF] to-[#7A27FF]/0",
      ring: "hover:border-[#7A27FF]/30",
    },
  };
  return (
    <section id="services" className="w-full bg-muted/30 py-20 md:py-28 border-b border-border">
      <div className="container-fluid">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 rounded-full px-3 py-1 text-xs font-medium">
            核心服务
          </Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            一套平台，覆盖全部 AI 服务需求
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            从官方账号充值到团队拼车，再到自营 AI 聚合 API，官方价透明 + 仅 $3 服务费。
          </p>
        </div>

        {/* 4 卡片网格 */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Globe;
            const anchor = s.slug === "ai-aggregator" ? "fluxa" : s.slug;
            const c = accent[s.slug] ?? accent["ai-aggregator"];
            return (
              <Card
                key={s.slug}
                className={"group relative flex h-full flex-col overflow-hidden transition-all " + c.ring + " hover:shadow-md"}
              >
                {/* 顶部彩色条 */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.bar}`} />
                <CardHeader className="gap-3 pt-6">
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex h-9 w-9 items-center justify-center rounded-md ${c.icon}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    {s.showcase?.badge && (
                      <Badge variant="outline" className={`rounded-full text-[10px] font-medium uppercase tracking-wider ${c.chip}`}>
                        {s.showcase.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg font-semibold tracking-tight">
                    {s.name}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {s.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto flex flex-col gap-5">
                  <ul className="space-y-2.5 text-sm">
                    {s.highlights.slice(0, 3).map((h, i) => {
                      const Hi = iconMap[h.icon] ?? ShieldCheck;
                      return (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm ${c.icon.split(' ')[0]} text-white`}>
                            <Hi className="h-3 w-3" />
                          </span>
                          <span className="text-foreground/80">{h.title}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                    size="sm"
                  >
                    <a href={`#${anchor}`}>
                      {s.ctaLabel}
                      <ArrowRight className="h-3.5 w-3.5" />
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
