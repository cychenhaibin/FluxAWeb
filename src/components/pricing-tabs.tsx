import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { PricingCard } from './pricing-card';

interface Service { slug: string; name: string; }
interface PricingByService { [slug: string]: { tiers: any[] } | undefined; }

export default function PricingTabs({ services, pricingByService }: { services: Service[]; pricingByService: PricingByService }) {
  return (
    <Tabs defaultValue={services[0].slug}>
      <div className="flex justify-center">
        <TabsList className="inline-flex bg-zinc-100 p-1 rounded-full">
          {services.map((s) => (
            <TabsTrigger
              key={s.slug}
              value={s.slug}
              className="rounded-full px-4 text-[13.5px] font-medium text-zinc-600 data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-ink"
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
