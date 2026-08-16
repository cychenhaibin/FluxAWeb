import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-600">{item.answer}</p>
            <div className="mt-2 text-xs text-zinc-400">{item.category}</div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
