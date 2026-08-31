'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'What We Do', href: '/what-we-do' },
  {
    label: 'Solutions',
    href: '/solutions',
    hasDropdown: true,
    dropdown: [
      { label: 'Menu & Range Optimisation', href: '/solutions#menu' },
      { label: 'Pricing Intelligence', href: '/solutions#pricing' },
      { label: 'Channel Strategy', href: '/solutions#channel' },
      { label: 'Performance Dashboards', href: '/solutions#dashboards' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    hasDropdown: true,
    dropdown: [
      { label: 'Insights & Articles', href: '/resources#insights' },
      { label: 'Case Studies', href: '/resources#cases' },
      { label: 'Guides', href: '/resources#guides' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <svg className={styles.logoIcon} width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L14 13L4 22" stroke="#9EE53B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 4L23 13L13 22" stroke="#9EE53B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className={styles.logoText}>
            <span className={styles.logoSecond}>SECOND</span>
            <span className={styles.logoMiles}>MILES</span>
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <li
                  key={link.label}
                  className={styles.navItem}
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link href={link.href} className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}>
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <svg className={styles.dropdownChevron} width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {isActive && <div className={styles.activeUnderline} />}
                  </Link>

                  {link.hasDropdown && activeDropdown === link.label && (
                    <div className={styles.dropdownMenu}>
                      {link.dropdown?.map((item) => (
                        <Link key={item.label} href={item.href} className={styles.dropdownItem}>
                          <span className={styles.dropdownItemDot} />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA */}
        <div className={styles.navRight}>
          <Link href="/contact" className={styles.headerBtn}>
            Talk to SecondMiles
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen1 : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen2 : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen3 : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className={styles.mobileDrawer}>
          {navLinks.map((link) => (
            <div key={link.label} className={styles.mobileDrawerItem}>
              <Link
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className={styles.mobileDropdown}>
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className={styles.mobileSubLink}
                      onClick={() => setMobileOpen(false)}
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
            className={styles.mobileHeaderBtn}
            onClick={() => setMobileOpen(false)}
          >
            Talk to SecondMiles →
          </Link>
        </div>
      )}
    </header>
  );
}
