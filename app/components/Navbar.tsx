'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; note: string; href: string; tone: string }[];
};

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'What We Fix', href: '/what-we-do' },
  {
    label: 'How We Help',
    href: '/solutions',
    dropdown: [
      { label: 'Menu rebuild', note: 'Sell more of what pays', href: '/solutions#menu', tone: 'ember' },
      { label: 'Pricing check', note: 'Charge the right number', href: '/solutions#pricing', tone: 'saffron' },
      { label: 'Ads & visibility', note: 'Stop paying for nothing', href: '/solutions#channel', tone: 'sky' },
      { label: 'Weekly Pulse', note: 'Know what to do Monday', href: '/solutions#dashboards', tone: 'basil' },
    ],
  },
  {
    label: 'Insights',
    href: '/resources',
    dropdown: [
      { label: 'Reading room', note: 'Short, useful articles', href: '/resources#insights', tone: 'plum' },
      { label: 'Real results', note: 'What changed for clients', href: '/resources#cases', tone: 'basil' },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${
        mobileOpen ? styles.menuOpen : ''
      }`}
    >
      <div className={styles.bar}>
        <Link href="/" className={styles.logo} aria-label="SecondMiles home">
          <span className={styles.logoMark} aria-hidden="true">
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
              <path d="M2 2.5L8.5 9L2 15.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.5 2.5L18 9L11.5 15.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className={styles.logoText}>
            Second<em>Miles</em>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Main">
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const active =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <li
                  key={link.label}
                  className={styles.navItem}
                  onMouseEnter={() => link.dropdown && setOpenMenu(link.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${active ? styles.active : ''}`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <svg className={styles.caret} width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden="true">
                        <path d="M1 1L4.5 4.5L8 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </Link>

                  {link.dropdown && openMenu === link.label && (
                    <div className={styles.menu}>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className={styles.menuItem}
                          onClick={closeAll}
                        >
                          <span className={`${styles.menuDot} ${styles[item.tone]}`} />
                          <span>
                            <strong>{item.label}</strong>
                            <em>{item.note}</em>
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.right}>
          <Link href="/contact" className={`btn btn-primary btn-sm ${styles.cta}`}>
            Book a free check
          </Link>

          <button
            className={styles.burger}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className={mobileOpen ? styles.b1 : ''} />
            <span className={mobileOpen ? styles.b2 : ''} />
            <span className={mobileOpen ? styles.b3 : ''} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={styles.drawer}>
          {navLinks.map((link) => (
            <div key={link.label} className={styles.drawerBlock}>
              <Link href={link.href} className={styles.drawerLink} onClick={closeAll}>
                {link.label}
              </Link>
              {link.dropdown && (
                <div className={styles.drawerSubs}>
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className={styles.drawerSub}
                      onClick={closeAll}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className={`btn btn-primary ${styles.drawerCta}`}
            onClick={closeAll}
          >
            Book a free check
          </Link>
        </div>
      )}
    </header>
  );
}
