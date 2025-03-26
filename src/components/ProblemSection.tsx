
import { X } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white mb-4 animate-fade-in-up">
            Struggling with Unreliable AI Insights?
          </h2>
          <p className="text-lg text-white/70 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Most conversational AI platforms leave users frustrated because they:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="glass-card p-6 flex flex-col items-center text-center animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                <X className="h-5 w-5 text-red-500" />
              </div>
              <p className="text-white/90">{problem}</p>
            </div>
          ))}
        </div>
        
        <div className="relative mt-24 mb-12">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

const problems = [
  "Don't offer exclusive market intelligence",
  "Lack credibility and data validation",
  "Provide no secure way to monetize conversations"
];

export default ProblemSection;
