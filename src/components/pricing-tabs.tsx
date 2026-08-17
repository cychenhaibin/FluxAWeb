import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { PricingCard } from './pricing-card';

interface Service { slug: string; name: string; }
interface PricingByService { [slug: string]: { tiers: any[] } | undefined; }

export default function PricingTabs({ services, pricingByService }: { services: Service[]; pricingByService: PricingByService }) {
  return (
    <Tabs defaultValue={services[0].slug}>
      <div className="flex justify-center">
        <TabsList className="inline-flex bg-[#F2F3F5] p-1.5 rounded-full border border-[#E4E7EB]">
          {services.map((s) => (
            <TabsTrigger
              key={s.slug}
              value={s.slug}
              className="rounded-full px-5 h-10 text-[14px] font-medium text-[#6E7782] data-[state=active]:bg-white data-[state=active]:text-[#181E25] data-[state=active]:shadow-sm"
            >
              {s.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {services.map((s) => (
        <TabsContent key={s.slug} value={s.slug}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {(pricingByService[s.slug]?.tiers ?? []).map((tier, i) => (
              <PricingCard key={i} tier={tier} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
