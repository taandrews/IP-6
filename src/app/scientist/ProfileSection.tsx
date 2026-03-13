import Image from "next/image";

export function ProfileSection() {
  return (
    <section className="py-12">
      <div className="section-container">
        <div className="mx-auto max-w-4xl">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_300px]">
            <div>
              <h2 className="font-display text-3xl text-ink">
                AbulKalam M. Shamsuddin
              </h2>
              <p className="mt-1 text-sm font-medium uppercase tracking-wide text-accent">
                M.B.,B.S., PhD
              </p>

              <div className="mt-6 space-y-1 text-stone-600">
                <p>Professor of Pathology</p>
                <p>University of Maryland School of Medicine</p>
                <p>Baltimore, MD, U.S.A.</p>
              </div>

              <hr className="my-8 border-stone-200" />

              <p className="text-base leading-relaxed text-stone-600">
                Prof Shamsuddin graduated from University of Dhaka - Dhaka
                Medical College. Following Internship in Massachusetts and
                Residency training in pathology in Maryland, he was certified by
                the American Board of Pathology in 1977 when he joined the
                faculty of the University of Maryland School of Medicine as an
                Instructor. In 1980, he received Ph.D. from the University of
                Maryland for his research on colon carcinogenesis and rose
                through the ranks of Assistant Professor and Associate Professor
                to become a full Professor in 1988.
              </p>
            </div>

            {/* Davidge Hall, University of Maryland (Wikimedia Commons, CC BY-SA 4.0, Acroterion) */}
            <div className="hidden md:block">
              <Image
                src="/IP-6/images/davidge-hall.jpg"
                alt="Davidge Hall, University of Maryland School of Medicine"
                width={300}
                height={400}
                className="w-full rounded-lg object-cover"
              />
              <p className="mt-2 text-xs text-stone-400">
                Davidge Hall, University of Maryland School of Medicine. Photo: Acroterion (CC BY-SA 4.0)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
