import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, BadgeDollarSign } from "lucide-react";

interface Tier {
  name: string;
  price: string;
  period: string;
  originalPrice?: string;
  serviceFee?: string;
  features: string[];
  recommended: boolean;
  ctaLabel: string;
}

interface Service {
  slug: string;
  name: string;
}

interface PricingByService {
  [slug: string]: { tiers: Tier[] } | undefined;
}

const serviceAccent: Record<string, { bar: string; trigger: string; checkBg: string; priceText: string }> = {
  minimax: {
    bar: "from-[#FF276F] via-[#FF7038] to-[#7A27FF]",
    trigger: "data-[state=active]:from-[#FF276F] data-[state=active]:to-[#7A27FF] data-[state=active]:text-background",
    checkBg: "bg-gradient-to-br from-[#FF276F] to-[#7A27FF]",
    priceText: "text-[#7A27FF]",
  },
  chatgpt: {
    bar: "from-[#10A37F] to-[#10A37F]/0",
    trigger: "data-[state=active]:bg-[#10A37F] data-[state=active]:text-background",
    checkBg: "bg-[#10A37F]",
    priceText: "text-[#0d8c6c]",
  },
  claude: {
    bar: "from-[#da7756] to-[#da7756]/0",
    trigger: "data-[state=active]:bg-[#da7756] data-[state=active]:text-background",
    checkBg: "bg-[#da7756]",
    priceText: "text-[#b85f3d]",
  },
  "ai-aggregator": {
    bar: "from-[#7A27FF] to-[#FF276F]/0",
    trigger: "data-[state=active]:bg-[#7A27FF] data-[state=active]:text-background",
    checkBg: "bg-[#7A27FF]",
    priceText: "text-[#7A27FF]",
  },
};

export default function Pricing({
  services,
  pricingByService,
}: {
  services: Service[];
  pricingByService: PricingByService;
}) {
  return (
    <section id="pricing" className="w-full bg-background py-20 md:py-28 border-b border-border">
      <div className="container-fluid">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 rounded-full px-3 py-1 text-xs font-medium">
            价格方案
          </Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            透明定价，按需选择
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            官方价 + 仅 $3 服务费 · 不收其他费用 · 5 分钟到账
          </p>
        </div>

        {/* Tabs + tier cards */}
        <div className="mt-10">
          <Tabs defaultValue={services[0]?.slug} className="w-full">
            <div className="flex justify-center">
              <TabsList className="inline-flex h-auto flex-wrap items-center justify-center rounded-lg bg-muted p-1">
                {services.map((s) => (
                  <TabsTrigger
                    key={s.slug}
                    value={s.slug}
                    className="rounded-md px-4 py-1.5 text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  >
                    {s.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {services.map((s) => {
              const tiers = pricingByService[s.slug]?.tiers ?? [];
              const accent = serviceAccent[s.slug] ?? serviceAccent["ai-aggregator"];
              return (
                <TabsContent key={s.slug} value={s.slug} className="mt-10 outline-none">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {tiers.map((tier, i) => (
                      <Card
                        key={i}
                        className={
                          "flex h-full flex-col transition-all " +
                          (tier.recommended
                            ? "border-foreground/30 shadow-sm ring-1 ring-foreground/10"
                            : "hover:border-foreground/20 hover:shadow-sm")
                        }
                      >
                        <CardHeader className="gap-2">
                          {tier.recommended && (
                            <Badge
                              variant="default"
                              className="self-start rounded-full bg-gradient-to-r from-[#7A27FF] to-[#FF276F] px-2.5 text-[10px] font-medium uppercase tracking-wider text-background hover:from-[#7A27FF] hover:to-[#FF276F] border-0"
                            >
                              ★ 推荐
                            </Badge>
                          )}
                          <CardTitle className="text-lg font-semibold tracking-tight">
                            {tier.name}
                          </CardTitle>
                          <div className="flex items-baseline gap-2 mt-2">
                            <span className={"text-3xl font-semibold tracking-tight tnum " + accent.priceText}>
                              {tier.price}
                            </span>
                            {tier.period && (
                              <span className="text-sm text-muted-foreground">
                                {tier.period}
                              </span>
                            )}
                          </div>
                          {(tier.originalPrice || tier.serviceFee) && (
                            <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                              {tier.originalPrice && (
                                <span className="rounded-md bg-muted px-2 py-0.5">
                                  官方 ${tier.originalPrice}
                                </span>
                              )}
                              {tier.serviceFee && (
                                <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5">
                                  <BadgeDollarSign className="h-3 w-3" />
                                  服务费 ${tier.serviceFee}
                                </span>
                              )}
                            </div>
                          )}
                        </CardHeader>
                        <CardContent className="mt-2 flex flex-1 flex-col">
                          <ul className="space-y-2.5 text-sm text-foreground/80 flex-1">
                            {tier.features.map((f, j) => (
                              <li key={j} className="flex items-start gap-2.5">
                                <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-foreground text-background">
                                  <Check className="h-3 w-3" strokeWidth={3} />
                                </span>
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                          <Button
                            asChild
                            variant={tier.recommended ? "default" : "outline"}
                            className={
                              "mt-6 w-full " +
                              (tier.recommended
                                ? "bg-gradient-to-r from-[#7A27FF] to-[#FF276F] text-background hover:from-[#6a1fe0] hover:to-[#e61e5e] border-0"
                                : "")
                            }
                          >
                            <a href="#contact">
                              {tier.ctaLabel}
                              <ArrowRight className="h-4 w-4" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
