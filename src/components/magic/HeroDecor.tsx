import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export function HeroDecor() {
  return (
    <>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.18}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(720px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[160%] skew-y-12 opacity-40"
        )}
      />
      <DotPattern className="opacity-10" />
    </>
  );
}
