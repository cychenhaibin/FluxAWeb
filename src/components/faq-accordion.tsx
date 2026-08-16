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
          className="px-6 border-b border-zinc-100 last:border-b-0"
        >
          <AccordionTrigger className="text-left text-[15px] font-medium text-zinc-900 hover:no-underline py-5 [&[data-state=open]>svg]:rotate-45">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-[14px] text-zinc-600 leading-relaxed pb-5">
            <p>{item.answer}</p>
            <div className="mt-3 text-[11px] uppercase tracking-wider text-indigo-600 font-medium">
              {item.category}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
