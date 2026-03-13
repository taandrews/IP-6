import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  heading: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  heading,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      )}
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
        {heading}
      </h2>
      {description && (
        <p className="font-sans text-lg text-stone-600 mt-4 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
