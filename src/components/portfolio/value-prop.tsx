import { Check } from "lucide-react";

const BENEFITS = [
  "Strategic Hook Placement",
  "Optimized for Algorithm Reach",
  "High-Impact Sound Design"
];

export function ValueProp() {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-black font-headline text-white mb-8">Why Creators Choose Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-secondary hover:bg-secondary/80 transition-colors border border-border flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Check className="text-primary group-hover:text-white w-6 h-6" />
              </div>
              <p className="text-lg font-bold leading-snug text-white">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
