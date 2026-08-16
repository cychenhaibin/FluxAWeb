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
          ? 'bg-zinc-900 text-white border-2 border-zinc-900 shadow-ink-lg'
          : 'bg-white border border-zinc-200 hover:border-zinc-900 hover:shadow-ink'
      }`}
    >
      {tier.recommended && (
        <Badge className="mb-3 self-start bg-white text-zinc-900 border-0 text-[11px] font-medium uppercase tracking-wider">
          推荐
        </Badge>
      )}
      <h3 className={`text-lg font-semibold tracking-tight ${tier.recommended ? 'text-white' : 'text-zinc-900'}`}>{tier.name}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className={`text-[44px] font-semibold tracking-[-0.005em] tnum leading-none ${tier.recommended ? 'text-white' : 'text-zinc-900'}`}>{tier.price}</span>
        <span className={`text-[14px] ${tier.recommended ? 'text-zinc-400' : 'text-zinc-500'}`}>{tier.period}</span>
      </div>
      {tier.originalPrice && (
        <div className={`mt-2 text-[12px] tnum ${tier.recommended ? 'text-zinc-400' : 'text-zinc-500'}`}>{tier.originalPrice}</div>
      )}
      <ul className={`mt-6 space-y-3 text-[14px] flex-1 ${tier.recommended ? 'text-zinc-300' : 'text-zinc-700'}`}>
        {tier.features.map((f, i) => (
          <li key={i} className="flex gap-2.5">
            <Check size={16} className={`shrink-0 mt-0.5 ${tier.recommended ? 'text-white' : 'text-zinc-900'}`} strokeWidth={2.5} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="/contact" className="block mt-7">
        <Button
          variant={tier.recommended ? 'secondary' : 'default'}
          className={`w-full rounded-full h-11 text-[13.5px] font-medium ${
            tier.recommended
              ? 'bg-white text-zinc-900 hover:bg-zinc-100'
              : 'bg-zinc-900 text-white hover:bg-zinc-800'
          }`}
        >
          {tier.ctaLabel}
        </Button>
      </a>
    </div>
  );
}
