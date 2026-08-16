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
      className={`backdrop-blur-md rounded-2xl p-6 transition-all ${
        tier.recommended
          ? 'bg-gradient-to-b from-indigo-500/10 to-zinc-900/60 border-2 border-indigo-500/50 shadow-2xl shadow-indigo-500/20'
          : 'bg-zinc-900/60 border border-zinc-800'
      }`}
    >
      {tier.recommended && (
        <Badge className="mb-3 bg-indigo-500 text-white border-0">
          ⭐ 推荐
        </Badge>
      )}
      <h3 className="text-xl font-bold text-white">{tier.name}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-5xl font-bold text-white tracking-tight">{tier.price}</span>
        <span className="text-zinc-500 text-base">{tier.period}</span>
      </div>
      {tier.originalPrice && (
        <div className="mt-1 text-xs text-zinc-500">{tier.originalPrice}</div>
      )}
      <ul className="mt-6 space-y-3 text-sm text-zinc-300">
        {tier.features.map((f, i) => (
          <li key={i} className="flex gap-2">
            <Check size={16} className="text-indigo-400 shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="/contact" className="block mt-8">
        <Button
          variant={tier.recommended ? 'default' : 'outline'}
          className={`w-full rounded-full h-11 ${
            tier.recommended
              ? 'bg-white text-zinc-950 hover:bg-zinc-200'
              : 'border-zinc-700 bg-zinc-900/50 text-white hover:bg-zinc-800'
          }`}
        >
          {tier.ctaLabel}
        </Button>
      </a>
    </div>
  );
}
