const pathways = [
  "p53",
  "p27",
  "PI-3 Kinase",
  "NFkB",
  "PKC\u03b4",
  "ppRb",
  "Akt",
  "ERK 1/2",
];

export function PathwayBadges() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {pathways.map((pathway) => (
        <div
          key={pathway}
          className="border border-stone-200 bg-white px-4 py-3 text-center"
        >
          <span className="font-sans text-sm font-semibold text-ink">
            {pathway}
          </span>
        </div>
      ))}
    </div>
  );
}
