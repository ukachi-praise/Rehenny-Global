import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  location: string;
  flag: React.ComponentType<{ className?: string }>;
  stats: string;
  href: string;
  themeColor: string;
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  ({ className, imageUrl, location, flag: Flag, stats, href, themeColor, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          // @ts-ignore - CSS custom properties are valid
          "--theme-color": themeColor,
        } as React.CSSProperties}
        className={cn("group w-full h-full", className)}
        {...props}
      >
        <a
          href={href}
          className="relative block w-full h-full rounded-2xl overflow-hidden shadow-lg 
                     transition-all duration-700 ease-out 
                     group-hover:scale-[1.03] group-hover:shadow-[0_0_60px_-15px_hsl(var(--theme-color)/0.65)]"
          aria-label={`Explore details for ${location}`}
          style={{
             boxShadow: `0 0 40px -15px hsl(var(--theme-color) / 0.5)`
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center 
                       transition-transform duration-700 ease-out group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div
            className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-90"
            style={{
              background: `linear-gradient(to top, hsl(var(--theme-color) / 0.95), hsl(var(--theme-color) / 0.6) 30%, transparent 60%)`,
            }}
          />
          
          <div className="relative flex flex-col justify-end h-full p-6 text-white overflow-hidden">
            <div className="flex items-center gap-3">
              <h3 className="text-3xl font-bold tracking-tight transform transition-transform duration-500 ease-out group-hover:-translate-y-1">
                {location}
              </h3>
              <Flag className="w-8 h-auto rounded-md transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6" />
            </div>
            <p className="text-sm text-white/80 mt-1 font-medium transform transition-all duration-500 ease-out translate-y-1 group-hover:translate-y-0 group-hover:text-white">
              {stats}
            </p>

            <div className="mt-5 flex items-center justify-between bg-[hsl(var(--theme-color)/0.15)] backdrop-blur-md border border-[hsl(var(--theme-color)/0.25)] 
                           rounded-lg px-4 py-3 
                           opacity-0 transform translate-y-6 scale-95
                           transition-all duration-700 ease-out
                           group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
                           group-hover:bg-[hsl(var(--theme-color)/0.45)] group-hover:border-[hsl(var(--theme-color)/0.5)]">
              <span className="text-sm font-semibold tracking-wide">Explore Now</span>
              <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </a>
      </div>
    );
  }
);
DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
