interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  label,
}: AnimatedCounterProps) {
  return (
    <div className="text-center">
      <span className="font-display text-4xl font-bold text-ink">
        {end.toLocaleString()}
        {suffix}
      </span>
      <p className="text-sm text-stone-500 font-sans mt-1">{label}</p>
    </div>
  );
}
