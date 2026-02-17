export function TrustBar() {
  const tags = ["RETENTION", "ALGORITHM", "VIRAL GROWTH", "STRATEGIC HOOKS", "SOUND DESIGN", "PACE MASTERY"];
  
  return (
    <div className="bg-primary py-4 overflow-hidden border-y-2 border-black rotate-1 scale-105 z-20 relative">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {tags.map((tag, j) => (
              <span key={j} className="text-black font-headline text-3xl md:text-4xl font-black mx-12 flex items-center">
                {tag} <span className="ml-12">★</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}