import { ReactNode } from "react";

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function BenefitCard({
  icon,
  title,
  description,
}: BenefitCardProps) {
  return (
    <div className="p-6">
      <div className="text-accent [&>svg]:h-8 [&>svg]:w-8">{icon}</div>
      <h3 className="mt-4 font-display text-lg font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm text-stone-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
