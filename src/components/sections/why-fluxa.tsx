import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Zap, BadgeDollarSign, Headphones } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "官方价透明",
    description:
      "OpenAI / Anthropic 官方通道充值，所有套餐官方价 + 仅 $3 服务费，无隐藏费用，到账即享官方权益。",
  },
  {
    icon: Zap,
    title: "5 分钟到账",
    description:
      "下单后自动开通，5 分钟内账号到位；特殊情况 30 分钟内人工处理，无需漫长等待。",
  },
  {
    icon: BadgeDollarSign,
    title: "拼车省 50%",
    description:
      "MiniMax Max 拼车 2-4 人共享官方团队账号，比单独订阅省 50% 以上，每人均摊 $28 起。",
  },
  {
    icon: Headphones,
    title: "7×24 客服",
    description:
      "真人客服在线响应，紧急工单 5 分钟内回复；微信、邮箱、工单多渠道随时可联系。",
  },
];

const stats = [
  { num: "2000+", label: "服务 AI 团队", color: "text-[#10A37F]" },
  { num: "5min", label: "极速到账", color: "text-[#FF7038]" },
  { num: "7×24", label: "真人客服", color: "text-[#7A27FF]" },
  { num: "$3", label: "透明服务费", color: "text-[#FF276F]" },
];

export default function WhyFluxa() {
  return (
    <section className="w-full bg-muted/30 py-20 md:py-28 border-b border-border">
      <div className="container-fluid">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 rounded-full px-3 py-1 text-xs font-medium">
            为什么选 FluxA
          </Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            简单 · 透明 · 即时
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            没有套路，没有隐藏条款 — 用 SaaS 标准重塑 AI 服务体验。
          </p>
        </div>

        {/* 4 个价值卡 — icon 统一前景色 */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                    {v.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* 数字统计 — 每数字独立彩色 */}
        <div className="mt-16 grid grid-cols-2 gap-4 rounded-lg border border-border bg-background p-6 sm:grid-cols-4 sm:p-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
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
    </section>
  );
}
