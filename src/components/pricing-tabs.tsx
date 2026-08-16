import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { PricingCard } from './pricing-card';

interface Service { slug: string; name: string; }
interface PricingByService { [slug: string]: { tiers: any[] } | undefined; }

export default function PricingTabs({ services, pricingByService }: { services: Service[]; pricingByService: PricingByService }) {
  return (
    <Tabs defaultValue={services[0].slug}>
      <div className="flex justify-center">
        <TabsList className="inline-flex bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/10">
          {services.map((s) => (
            <TabsTrigger
              key={s.slug}
              value={s.slug}
              className="rounded-full px-4 text-[13.5px] font-medium text-zinc-400 data-[state=active]:bg-[#ff6b35] data-[state=active]:text-white data-[state=active]:shadow-orange"
            >
              {s.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {services.map((s) => (
        <TabsContent key={s.slug} value={s.slug}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            {(pricingByService[s.slug]?.tiers ?? []).map((tier, i) => (
              <PricingCard key={i} tier={tier} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
