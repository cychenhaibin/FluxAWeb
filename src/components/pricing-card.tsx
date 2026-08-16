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
      className={`bg-white rounded-2xl p-7 transition-all flex flex-col ${
        tier.recommended
          ? 'border-2 border-indigo-500 shadow-stripe-lg ring-4 ring-indigo-500/10'
          : 'border border-zinc-200 shadow-stripe hover:border-indigo-200 hover:shadow-stripe-hover'
      }`}
    >
      {tier.recommended && (
        <Badge className="mb-3 self-start bg-indigo-600 text-white border-0 text-[11px] font-medium uppercase tracking-wider">
          推荐
        </Badge>
      )}
      <h3 className="text-lg font-semibold text-zinc-900 tracking-tight">{tier.name}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-[44px] font-semibold text-zinc-900 tracking-[-0.03em] tnum leading-none">{tier.price}</span>
        <span className="text-zinc-500 text-[14px]">{tier.period}</span>
      </div>
      {tier.originalPrice && (
        <div className="mt-2 text-[12px] text-zinc-500 tnum">{tier.originalPrice}</div>
      )}
      <ul className="mt-6 space-y-3 text-[14px] text-zinc-700 flex-1">
        {tier.features.map((f, i) => (
          <li key={i} className="flex gap-2.5">
            <Check size={16} className="text-indigo-600 shrink-0 mt-0.5" strokeWidth={2.5} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="/contact" className="block mt-7">
        <Button
          variant={tier.recommended ? 'default' : 'outline'}
          className={`w-full rounded-full h-11 text-[13.5px] font-medium ${
            tier.recommended
              ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-stripe'
              : 'border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50'
          }`}
        >
          {tier.ctaLabel}
        </Button>
      </a>
    </div>
  );
}
