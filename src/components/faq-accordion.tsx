import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="px-6 border-b border-[#E4E7EB] last:border-b-0"
        >
          <AccordionTrigger className="text-left text-[16px] font-semibold text-[#181E25] hover:no-underline py-5 [&[data-state=open]>svg]:rotate-45 [&[data-state=open]>svg]:text-[#7A27FF]">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-[14px] text-[#6E7782] leading-relaxed pb-5">
            <p>{item.answer}</p>
            <div className="mt-3 inline-block text-[11px] uppercase tracking-wider text-[#7A27FF] font-semibold">
              {item.category}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
