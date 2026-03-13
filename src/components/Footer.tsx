import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Science", href: "/science" },
  { label: "Scientist", href: "/scientist" },
  { label: "Benefits", href: "/benefits" },
  { label: "News", href: "/news" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

const patents = [
  "US Patent #5,082,833",
  "US Patent #7,009,067",
  "US Patent #7,517,868",
  "US Patent #7,989,435",
]

export default function Footer() {
  return (
    <footer>
      {/* Accent bar */}
      <div className="h-1 bg-accent" />

      <div className="bg-[#0f1b2d]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* Column 1: Brand */}
            <div className="space-y-4">
              <Link href="/" className="block">
                <span className="font-display text-3xl text-white">IP-6</span>
                <span className="block text-sm uppercase tracking-widest text-stone-400">
                  Research, Inc.
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-stone-400">
                Advancing scientific knowledge of IP6 + Inositol through decades
                of peer-reviewed research.
              </p>
              <div className="flex items-center gap-4 pt-1">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-stone-400 transition-colors duration-200 hover:text-white"
                >
                  Twitter
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-stone-400 transition-colors duration-200 hover:text-white"
                >
                  Facebook
                </a>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-4">
                Navigation
              </h3>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-400 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Patents */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-4">
                Patents
              </h3>
              <ul className="space-y-2.5">
                {patents.map((patent) => (
                  <li key={patent} className="text-sm text-stone-400">
                    {patent}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-4">
                Contact
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-sm text-stone-400">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                  <span>
                    15 Charles Plaza, Suite 2508
                    <br />
                    Baltimore, MD 21201
                  </span>
                </li>
                <li>
                  <a
                    href="tel:1-410-659-3906"
                    className="flex items-center gap-2.5 text-sm text-stone-400 transition-colors duration-200 hover:text-white"
                  >
                    <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                    1-410-659-3906
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:research@ip-6.net"
                    className="flex items-center gap-2.5 text-sm text-stone-400 transition-colors duration-200 hover:text-accent"
                  >
                    <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                    research@ip-6.net
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <p className="text-center text-xs text-stone-600">
              &copy; {new Date().getFullYear()} All copyrights reserved by IP-6
              Research, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
