import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface Tier {
  name: string;
  price: string;
  period: string;
  originalPrice?: string;
  features: string[];
  recommended: boolean;
  ctaLabel: string;
}

export function PricingCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={`rounded-2xl p-7 transition-all flex flex-col ${
        tier.recommended
          ? 'bg-gradient-to-b from-[#ff6b35]/15 to-[#14121f] border-2 border-[#ff6b35] shadow-orange-lg ring-4 ring-[#ff6b35]/15'
          : 'glass-card hover:border-[#ff6b35]/40 hover:shadow-orange'
      }`}
    >
      {tier.recommended && (
        <Badge className="mb-3 self-start bg-[#ff6b35] text-white border-0 text-[11px] font-medium uppercase tracking-wider">
          推荐
        </Badge>
      )}
      <h3 className="text-lg font-semibold text-white tracking-tight">{tier.name}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-[44px] font-semibold text-white tracking-[-0.005em] tnum leading-none">{tier.price}</span>
        <span className="text-zinc-500 text-[14px]">{tier.period}</span>
      </div>
      {tier.originalPrice && (
        <div className="mt-2 text-[12px] text-zinc-500 tnum">{tier.originalPrice}</div>
      )}
      <ul className="mt-6 space-y-3 text-[14px] text-zinc-300 flex-1">
        {tier.features.map((f, i) => (
          <li key={i} className="flex gap-2.5">
            <Check size={16} className="text-[#ff6b35] shrink-0 mt-0.5" strokeWidth={2.5} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="/contact" className="block mt-7">
        <Button
          variant={tier.recommended ? 'default' : 'outline'}
          className={`w-full rounded-full h-11 text-[13.5px] font-medium ${
            tier.recommended
              ? 'bg-[#ff6b35] text-white hover:bg-[#ff8255] shadow-orange'
              : 'border-white/15 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md'
          }`}
        >
          {tier.ctaLabel}
        </Button>
      </a>
    </div>
  );
}
