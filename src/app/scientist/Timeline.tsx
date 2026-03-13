interface Milestone {
  year: string;
  label: string;
}

const milestones: Milestone[] = [
  { year: "1975", label: "Began cancer formation research" },
  { year: "1977", label: "Board certified in Pathology" },
  { year: "1980", label: "PhD from University of Maryland" },
  { year: "1985", label: "Started IP6 research" },
  { year: "1988", label: "Full Professor" },
  {
    year: "1998",
    label: "First International IP6 Symposium, Kyoto",
  },
  { year: "1999", label: "Golden Apple Award" },
  { year: "200+", label: "Scientific publications" },
];

export function Timeline() {
  return (
    <section className="py-16">
      <div className="section-container">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-10 font-display text-2xl text-ink sm:text-3xl">
            Key Milestones
          </h2>

          <table className="w-full text-left">
            <tbody>
              {milestones.map((milestone) => (
                <tr
                  key={milestone.year + milestone.label}
                  className="border-b border-stone-200 last:border-b-0"
                >
                  <td className="py-4 pr-8 align-top font-display font-bold text-ink whitespace-nowrap">
                    {milestone.year}
                  </td>
                  <td className="py-4 text-sm text-stone-600">
                    {milestone.label}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
