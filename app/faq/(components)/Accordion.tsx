import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function AccordionComponent({ questions }: { questions: any[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {questions.map((question) => (
        <AccordionItem value={question.id} key={question.id}>
          <AccordionTrigger>{question.question}</AccordionTrigger>
          <AccordionContent>{question.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
