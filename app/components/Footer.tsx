import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'What We Do', href: '/what-we-do' },
    { label: 'Contact', href: '/contact' },
  ],
  Solutions: [
    { label: 'Menu Optimisation', href: '/solutions#menu' },
    { label: 'Pricing Intelligence', href: '/solutions#pricing' },
    { label: 'Channel Strategy', href: '/solutions#channel' },
    { label: 'Performance Dashboards', href: '/solutions#dashboards' },
  ],
  Resources: [
    { label: 'Insights & Articles', href: '/resources#insights' },
    { label: 'Case Studies', href: '/resources#cases' },
    { label: 'Guides', href: '/resources#guides' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
                <path d="M4 4L14 12L4 20" stroke="#B5FF30" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 4L24 12L14 20" stroke="#B5FF30" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className={styles.logoText}>
                <span style={{color:'#fff'}}>SECOND</span><span style={{color:'#B5FF30'}}>MILES</span>
              </span>
            </Link>
            <p className={styles.brandDesc}>
              Helping food businesses make smarter decisions across their online presence.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.social} aria-label="LinkedIn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className={styles.social} aria-label="Twitter">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>{group}</h4>
              {links.map(l => (
                <Link key={l.label} href={l.href} className={styles.footerLink}>{l.label}</Link>
              ))}
            </div>
          ))}

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h4 className={styles.groupTitle}>Stay Updated</h4>
            <p className={styles.newsletterDesc}>Get insights on food industry trends delivered to your inbox.</p>
            <div className={styles.emailForm}>
              <input
                type="email"
                placeholder="Your email"
                className={styles.emailInput}
                id="footer-email"
              />
              <button className={styles.emailBtn} aria-label="Subscribe">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© {new Date().getFullYear()} SecondMiles. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="#" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="#" className={styles.legalLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
