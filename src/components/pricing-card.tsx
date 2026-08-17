import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

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

export function PricingCard({ tier }: { tier: Tier }) {
  const hasOriginal = Boolean(tier.originalPrice);
  const hasFee = Boolean(tier.serviceFee);
  return (
    <div
      className={`relative rounded-3xl p-8 transition-all flex flex-col ${
        tier.recommended
          ? 'gradient-purple text-white shadow-2xl'
          : 'bg-white border border-[#E4E7EB] text-[#181E25] hover:border-[#CDD1D6] hover:shadow-lg'
      }`}
    >
      {tier.recommended && (
        <Badge className="mb-4 self-start bg-white/25 backdrop-blur-sm text-white border-0 text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
          推荐
        </Badge>
      )}
      <h3 className={`text-[20px] font-bold tracking-tight ${tier.recommended ? 'text-white' : 'text-[#181E25]'}`}>{tier.name}</h3>

      {/* 两栏布局: 左 大字价格 / 右 官方价 + 服务费 (minimaxi.com 风格) */}
      <div className="mt-5 grid grid-cols-[1fr_auto] items-end gap-4">
        <div>
          <div className={`text-[48px] font-bold tracking-[-0.025em] tnum leading-none ${tier.recommended ? 'text-white' : 'text-[#181E25]'}`}>
            {tier.price}
          </div>
          {tier.period && (
            <div className={`mt-1 text-[13px] ${tier.recommended ? 'text-white/80' : 'text-[#6E7782]'}`}>
              {tier.period}
            </div>
          )}
        </div>
        {(hasOriginal || hasFee) && (
          <div className={`text-right text-[12px] tnum space-y-0.5 ${tier.recommended ? 'text-white/80' : 'text-[#6E7782]'}`}>
            {hasOriginal && <div>官方 ${tier.originalPrice}</div>}
            {hasFee && <div>服务费 ${tier.serviceFee}</div>}
          </div>
        )}
      </div>

      <ul className={`mt-7 space-y-3 text-[14px] flex-1 ${tier.recommended ? 'text-white/95' : 'text-[#181E25]'}`}>
        {tier.features.map((f, i) => (
          <li key={i} className="flex gap-2.5">
            <div className={`shrink-0 mt-0.5 h-5 w-5 rounded-full flex items-center justify-center ${tier.recommended ? 'bg-white/20' : 'bg-[#F2F0FF]'}`}>
              <Check size={12} className={tier.recommended ? 'text-white' : 'text-[#7A27FF]'} strokeWidth={3} />
            </div>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="/contact" className="block mt-8">
        <Button
          className={`w-full rounded-full h-12 text-[14px] font-semibold ${
            tier.recommended
              ? 'bg-white text-[#7A27FF] hover:bg-white/90 shadow-lg'
              : 'gradient-purple text-white hover:opacity-90'
          }`}
        >
          {tier.ctaLabel}
        </Button>
      </a>
    </div>
  );
}
