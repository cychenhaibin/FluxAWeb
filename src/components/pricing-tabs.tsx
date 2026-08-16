import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { PricingCard } from './pricing-card';

interface Service { slug: string; name: string; }
interface PricingByService { [slug: string]: { tiers: any[] } | undefined; }

export default function PricingTabs({ services, pricingByService }: { services: Service[]; pricingByService: PricingByService }) {
  return (
    <Tabs defaultValue={services[0].slug}>
      <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
        {services.map((s) => (
          <TabsTrigger key={s.slug} value={s.slug}>{s.name}</TabsTrigger>
        ))}
      </TabsList>
      {services.map((s) => (
        <TabsContent key={s.slug} value={s.slug}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {(pricingByService[s.slug]?.tiers ?? []).map((tier, i) => (
              <PricingCard key={i} tier={tier} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
