import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.css';

// SVG Icons matching the exact screenshot design
const TargetIcon1 = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#9EE53B" strokeWidth="1.5" strokeDasharray="2 3" />
    <circle cx="12" cy="12" r="5" stroke="#9EE53B" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="1.5" fill="#9EE53B" />
    <line x1="12" y1="1" x2="12" y2="4" stroke="#9EE53B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="12" y1="20" x2="12" y2="23" stroke="#9EE53B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="1" y1="12" x2="4" y2="12" stroke="#9EE53B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="20" y1="12" x2="23" y2="12" stroke="#9EE53B" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const TargetIcon2 = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8.5" stroke="#9EE53B" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3.5" stroke="#9EE53B" strokeWidth="1.5" />
    <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="#9EE53B" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1" fill="#9EE53B" />
  </svg>
);

const GrowthChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 20H21" stroke="#9EE53B" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="5" y="14" width="3" height="6" rx="0.5" stroke="#9EE53B" strokeWidth="1.5" />
    <rect x="10.5" y="10" width="3" height="10" rx="0.5" stroke="#9EE53B" strokeWidth="1.5" />
    <rect x="16" y="6" width="3" height="14" rx="0.5" stroke="#9EE53B" strokeWidth="1.5" fill="#9EE53B" fillOpacity="0.2" />
    <path d="M6 10L12 4L19 7" stroke="#9EE53B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 4H19V7" stroke="#9EE53B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FoodBusinessIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#9EE53B" strokeWidth="1.5" strokeDasharray="3 3" />
    <path d="M7 13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13H7Z" stroke="#9EE53B" strokeWidth="1.5" />
    <path d="M12 6V10M9 8V10M15 8V10" stroke="#9EE53B" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Floating Road Callout Icons
const ReticleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" stroke="#9EE53B" strokeWidth="1.5" strokeDasharray="4 2" />
    <circle cx="12" cy="12" r="3" stroke="#9EE53B" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="1" fill="#9EE53B" />
  </svg>
);

const PerformanceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 18H20" stroke="#9EE53B" strokeWidth="1.5" />
    <path d="M6 15V18M11 11V18M16 7V18" stroke="#9EE53B" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 9L12 4L17 7" stroke="#9EE53B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 4H17V7" stroke="#9EE53B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const bottomHighlights = [
  { icon: <TargetIcon1 />, title: 'Independent Perspective' },
  { icon: <TargetIcon2 />, title: 'Commercial Focus' },
  { icon: <GrowthChartIcon />, title: 'Actionable Intelligence' },
  { icon: <FoodBusinessIcon />, title: 'Built for Food Businesses' },
];

const services = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#9EE53B" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
      </svg>
    ),
    title: 'Menu & Range Optimisation',
    desc: 'Identify your highest-performing dishes and eliminate underperformers. We use sales data, margin analysis, and market benchmarks to sharpen your menu.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#9EE53B" strokeWidth="1.5" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: 'Pricing Intelligence',
    desc: 'Stop leaving money on the table. We analyse competitor pricing, demand elasticity, and platform dynamics to help you price with confidence.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#9EE53B" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
    title: 'Channel Strategy',
    desc: 'Whether it\'s delivery apps, your own website, or in-store, we help you decide where to compete and how to win on each platform.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#9EE53B" strokeWidth="1.5" viewBox="0 0 24 24">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'Performance Dashboards',
    desc: 'Turn raw data into clear visual dashboards that your team can actually use — tracking the metrics that matter most to your business.',
  },
];

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      {/* ─── EXACT HERO SECTION MATCHING SCREENSHOT ─── */}
      <section className={styles.heroSection}>
        {/* Background Landscape with Glowing Road */}
        <div className={styles.heroBackground}>
          <Image
            src="/hero-road.jpg"
            alt="SecondMiles glowing road landscape"
            fill
            priority
            className={styles.heroBgImage}
            quality={100}
          />
          {/* Subtle Vignette & Gradient Overlays */}
          <div className={styles.heroGradientOverlay} />
        </div>

        {/* Floating Callout Labels positioned on the road */}
        <div className={styles.roadCalloutsContainer}>
          {/* Callout 1: Smarter Decisions (Top near horizon) */}
          <div className={`${styles.roadCallout} ${styles.calloutSmarter}`}>
            <div className={styles.calloutIconWrap}>
              <ReticleIcon />
            </div>
            <div className={styles.calloutText}>
              <span>Smarter</span>
              <span>Decisions</span>
            </div>
          </div>

          {/* Callout 2: Clearer Perspective (Upper-mid left) */}
          <div className={`${styles.roadCallout} ${styles.calloutPerspective}`}>
            <div className={styles.calloutIconWrap}>
              <ReticleIcon />
            </div>
            <div className={styles.calloutText}>
              <span>Clearer</span>
              <span>Perspective</span>
            </div>
          </div>

          {/* Callout 3: Better Performance (Mid-right) */}
          <div className={`${styles.roadCallout} ${styles.calloutPerformance}`}>
            <div className={styles.calloutIconWrap}>
              <PerformanceIcon />
            </div>
            <div className={styles.calloutText}>
              <span>Better</span>
              <span>Performance</span>
            </div>
          </div>

          {/* Callout 4: Sustainable Growth (Lower-left) */}
          <div className={`${styles.roadCallout} ${styles.calloutGrowth}`}>
            <div className={styles.calloutIconWrap}>
              <ReticleIcon />
            </div>
            <div className={styles.calloutText}>
              <span>Sustainable</span>
              <span>Growth</span>
            </div>
          </div>

          {/* Glowing Milestone Dots on the Road */}
          <div className={`${styles.roadNode} ${styles.node1}`}>
            <div className={styles.nodeInner} />
            <div className={styles.nodePulse} />
          </div>
          <div className={`${styles.roadNode} ${styles.node2}`}>
            <div className={styles.nodeInner} />
            <div className={styles.nodePulse} />
          </div>
          <div className={`${styles.roadNode} ${styles.node3}`}>
            <div className={styles.nodeInner} />
            <div className={styles.nodePulse} />
          </div>
          <div className={`${styles.roadNode} ${styles.node4}`}>
            <div className={styles.nodeInner} />
            <div className={styles.nodePulse} />
          </div>
        </div>

        {/* Hero Left Content */}
        <div className={styles.heroContentWrapper}>
          <div className={styles.heroTextContent}>
            <h1 className={styles.heroHeading}>
              Move beyond<br />
              <span className={styles.heroHeadingAccent}>the obvious.</span>
            </h1>

            <p className={styles.heroSubtitle}>
              SecondMiles helps food businesses make smarter<br className={styles.desktopBr} />
              decisions across their online business.
            </p>

            <div className={styles.heroCtaWrapper}>
              <Link href="/contact" className={styles.heroBtn}>
                Talk to SecondMiles
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Bottom Bar: 4 Highlight Metrics with Dividers */}
          <div className={styles.heroBottomBar}>
            {bottomHighlights.map((item, index) => (
              <div key={item.title} className={styles.bottomItemWrapper}>
                <div className={styles.bottomItem}>
                  <div className={styles.bottomIconWrap}>{item.icon}</div>
                  <span className={styles.bottomItemTitle}>{item.title}</span>
                </div>
                {index < bottomHighlights.length - 1 && (
                  <div className={styles.bottomDivider} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: WHAT WE DO ─── */}
      <section className="section" style={{background: '#080C08', position: 'relative', zIndex: 2}}>
        <div className="container">
          <div style={{maxWidth: '600px', marginBottom: '48px'}}>
            <div className="section-label">What We Do</div>
            <h2 className="section-title">
              Sharp thinking for<br /><span className="green">food businesses</span>
            </h2>
            <p className="section-desc">
              From menu engineering to pricing strategy, we bring specialist expertise to every stage of your online food business.
            </p>
          </div>

          <div className="grid-2">
            {services.map((s, i) => (
              <div key={i} className="card" style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <div className="icon-wrap">{s.icon}</div>
                <h3 style={{fontSize: '1.2rem', fontWeight: '700', color: '#ffffff'}}>{s.title}</h3>
                <p style={{fontSize: '0.92rem', color: '#8F9B8F', lineHeight: '1.7', flex: 1}}>{s.desc}</p>
                <Link href="/what-we-do" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#9EE53B', fontSize: '0.88rem', fontWeight: '600', marginTop: '8px'}}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: STATS NUMBERS ─── */}
      <section style={{padding: '80px 0', background: '#0A100A', borderTop: '1px solid rgba(158,229,59,0.08)', borderBottom: '1px solid rgba(158,229,59,0.08)'}}>
        <div className="container">
          <div className="grid-4">
            {[
              { num: '180+', label: 'Food Businesses Served' },
              { num: '23%', label: 'Average Revenue Uplift' },
              { num: '8+', label: 'Years of Expertise' },
              { num: '94%', label: 'Client Retention Rate' },
            ].map((n, i) => (
              <div key={i} style={{textAlign: 'center', padding: '24px 0'}}>
                <div style={{fontSize: '3rem', fontWeight: '900', color: '#9EE53B', lineHeight: 1, marginBottom: '8px'}}>{n.num}</div>
                <div style={{fontSize: '0.9rem', color: '#8F9B8F', fontWeight: '500'}}>{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: CTA ─── */}
      <section style={{padding: '100px 0', background: '#080C08'}}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, rgba(158,229,59,0.08) 0%, rgba(14,20,14,0.95) 100%)',
            border: '1px solid rgba(158,229,59,0.2)',
            borderRadius: '24px',
            padding: '70px 40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="section-label">Ready to Grow?</div>
            <h2 className="section-title" style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto 20px'}}>
              Ready to move beyond<br /><span className="green">the obvious?</span>
            </h2>
            <p style={{color: '#8F9B8F', maxWidth: '480px', margin: '0 auto 36px', fontSize: '1.05rem', lineHeight: '1.7'}}>
              Book a free 30-minute discovery call and find out what SecondMiles can do for your business.
            </p>
            <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link href="/contact" className="btn-primary">
                Talk to SecondMiles →
              </Link>
              <Link href="/what-we-do" className="btn-outline">
                See What We Do
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
