
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white mb-4">FAQs</h2>
          <p className="text-white/70">Everything you need to know about $GABBY</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card overflow-hidden">
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-white/70" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-white/70" />
                )}
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-white/70">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const faqs: FaqItem[] = [
  {
    question: "What makes $Gabby unique?",
    answer: "Only $Gabby combines blockchain-secured payments with community-validated insider intelligence."
  },
  {
    question: "How can I earn with $Gabby?",
    answer: "Stake tokens, validate insights, and earn rewards through ecosystem participation."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. Every interaction is encrypted and logged transparently via blockchain."
  },
  {
    question: "Where can I buy $Gabby?",
    answer: "During our launch event or later through selected decentralized exchanges (DEXs)."
  }
];

export default FaqSection;
