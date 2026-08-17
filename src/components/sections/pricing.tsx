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
                              className="self-start rounded-full px-2.5 text-[10px] font-medium uppercase tracking-wider"
                            >
                              推荐
                            </Badge>
                          )}
                          <CardTitle className="text-lg font-semibold tracking-tight">
                            {tier.name}
                          </CardTitle>
                          <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-3xl font-semibold tracking-tight tnum text-foreground">
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
                            className="mt-6 w-full"
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
