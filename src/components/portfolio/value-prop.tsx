
import { Check } from "lucide-react";

const BENEFITS = [
  "Clear and direct communication.",
  "Fast delivery, always on time.",
  "Unlimited revisions — I stop only when you’re satisfied."
];

export function ValueProp() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-secondary hover:bg-secondary/80 transition-colors border border-border flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Check className="text-primary group-hover:text-white w-6 h-6" />
              </div>
              <p className="text-lg font-bold leading-snug">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
