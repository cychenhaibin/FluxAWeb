import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Zap, Headphones } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "透明定价",
    desc: "官方价 + 仅 $3 服务费，所有套餐一视同仁，无隐藏费用。",
  },
  {
    icon: Zap,
    title: "极速体验",
    desc: "5 分钟内自动开通，特殊情况 30 分钟内人工处理。",
  },
  {
    icon: Headphones,
    title: "7×24 客服",
    desc: "真人客服在线响应，紧急工单 5 分钟内回复。",
  },
];

const stats = [
  { num: "2000+", label: "服务 AI 团队", color: "text-[#10A37F]" },
  { num: "5min", label: "极速到账", color: "text-[#FF7038]" },
  { num: "7×24", label: "真人客服", color: "text-[#7A27FF]" },
  { num: "$3", label: "透明服务费", color: "text-[#FF276F]" },
];

export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-background py-20 md:py-28 border-b border-border">
      <div className="container-fluid">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 rounded-full px-3 py-1 text-xs font-medium">
            关于 FluxA
          </Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            AI 服务，一站搞定
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            FluxA 致力于为开发者和团队提供稳定、极速、可观测的 AI 服务。从 ChatGPT / Claude 官方价直充，
            到 MiniMax Max 拼车降低 50% 成本，再到自营 AI 聚合 API 按量计费 — 我们用一个平台，解决所有 AI 服务需求。
          </p>
        </div>

        {/* 4 数字统计 — 每数字独立彩色, icon 统一前景色 */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-border bg-background p-5 sm:p-6"
              >
                <div className={`text-2xl font-semibold tracking-tight tnum sm:text-3xl ${s.color}`}>
                  {s.num}
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 价值卡 — icon 统一前景色 */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Card
                key={i}
                className="h-full transition-all hover:border-foreground/20 hover:shadow-sm"
              >
                <CardHeader className="gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background">
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle className="text-base font-semibold tracking-tight">
                    {v.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {v.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
