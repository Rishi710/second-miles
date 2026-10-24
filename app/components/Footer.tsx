import Link from 'next/link';
import styles from './Footer.module.css';

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'What we fix', href: '/what-we-do' },
      { label: 'How we help', href: '/solutions' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'The work',
    links: [
      { label: 'Menu rebuild', href: '/what-we-do#menu' },
      { label: 'Pricing check', href: '/what-we-do#pricing' },
      { label: 'Ads & visibility', href: '/what-we-do#visibility' },
      { label: 'Profit per order', href: '/what-we-do#profitability' },
    ],
  },
  {
    title: 'Reading',
    links: [
      { label: 'Articles', href: '/resources#insights' },
      { label: 'Real results', href: '/resources#cases' },
      { label: 'Common questions', href: '/solutions#faq' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container container-wide">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.mark}>
                <svg width="20" height="17" viewBox="0 0 22 18" fill="none" aria-hidden="true">
                  <path d="M2 2.5L8.5 9L2 15.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.5 2.5L18 9L11.5 15.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>Second<em>Miles</em></span>
            </Link>

            <p className={styles.pitch}>
              We read your ordering data and tell you what to change. Plain
              English, every week, for restaurants that want to keep more of
              what they sell.
            </p>

            <div className={styles.contactRow}>
              <a href="mailto:info@secondmiles.in" className={styles.contactLink}>
                info@secondmiles.in
              </a>
              <a href="tel:+917694096021" className={styles.contactLink}>
                +91 76940 96021
              </a>
            </div>

            <div className={styles.socials}>
              <a href="#" aria-label="SecondMiles on LinkedIn" className={styles.social}>
                <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 10-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="SecondMiles on X" className={styles.social}>
                <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} className={styles.col} aria-label={col.title}>
              <h3 className={styles.colTitle}>{col.title}</h3>
              {col.links.map((l) => (
                <Link key={l.label} href={l.href} className={styles.link}>
                  {l.label}
                </Link>
              ))}
            </nav>
          ))}

          <div className={styles.cta}>
            <h3 className={styles.ctaTitle}>
              Ready for the<br />second mile?
            </h3>
            <p className={styles.ctaText}>
              Thirty minutes on your numbers. Free, and no sales pitch at the
              end of it.
            </p>
            <Link href="/contact" className="btn btn-saffron btn-sm">
              Book a free check
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} SecondMiles. Indore, India.</p>
          <div className={styles.legal}>
            <Link href="#">Privacy</Link>
            <span aria-hidden="true">·</span>
            <Link href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
