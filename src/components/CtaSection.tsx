
import Button from './Button';

const CtaSection = () => {
  return <section className="section-container" id="join-launch">
      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gabby-purple to-gabby-dark animate-gradient-shift"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gabby-gold/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        
        <div className="relative z-10 px-6 py-16 md:py-20 text-center">
          <h2 className="heading-md text-white mb-6">JOIN GABBY TOKEN LAUNCH</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">Don't miss the opportunity to join the GABBY token launch. Stake tokens, engage immediately, and start benefiting from exclusive, actionable insider intelligence today.</p>
          <Button variant="secondary" size="lg">
            Join Launch
          </Button>
        </div>
      </div>
    </section>;
};
export default CtaSection;
