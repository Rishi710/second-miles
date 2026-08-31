import Link from 'next/link';
import styles from './solutions.module.css';

const solutions = [
  {
    id: 'menu',
    title: 'Menu Intelligence Suite',
    tag: 'Most Popular',
    price: 'From £2,500',
    desc: 'A complete menu audit and rebuild. We analyse every item, restructure your range, and give you a clear action plan to increase revenue from day one.',
    features: [
      'Full sales & margin data analysis',
      'Competitive menu benchmarking',
      'Range architecture redesign',
      'Menu photography brief',
      'Platform-specific optimisation',
      '90-day performance tracking',
    ],
    highlight: true,
  },
  {
    id: 'pricing',
    title: 'Pricing Audit',
    tag: 'Quick Win',
    price: 'From £1,500',
    desc: 'A focused deep-dive into your current pricing vs. the market. Identify quick wins and long-term positioning opportunities.',
    features: [
      'Competitor price mapping',
      'Price point recommendation',
      'Elasticity sensitivity analysis',
      'Promotional strategy review',
    ],
    highlight: false,
  },
  {
    id: 'channel',
    title: 'Channel Growth Package',
    tag: 'Growth',
    price: 'From £3,500',
    desc: 'End-to-end channel strategy. We audit your current platform performance and build a 6-month growth roadmap.',
    features: [
      'Platform performance audit',
      'Channel mix recommendation',
      'Direct ordering strategy',
      'Commission reduction playbook',
      '6-month growth roadmap',
      'Monthly check-ins',
    ],
    highlight: false,
  },
  {
    id: 'dashboards',
    title: 'Analytics Dashboard',
    tag: 'Ongoing',
    price: 'From £800/mo',
    desc: 'A custom, always-on performance dashboard built for your business. Track what matters, in real time.',
    features: [
      'Custom KPI dashboard',
      'Platform data integration',
      'Weekly automated reports',
      'Monthly strategy reviews',
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Most projects run 4–8 weeks from kickoff to delivery. Ongoing retainers begin within 2 weeks of sign-off.',
  },
  {
    q: 'Do you work with independent restaurants or only chains?',
    a: 'Both. We work with everything from single-site independents to multi-site chains and food-tech scale-ups. Our approach adapts to your size and complexity.',
  },
  {
    q: 'What data do you need from us?',
    a: 'For most projects we need 6–12 months of sales data from your platform(s), your current menu, and basic cost information. We guide you through every step of the data-gathering process.',
  },
  {
    q: 'Can you work with our existing team?',
    a: 'Absolutely. We\'re designed to complement in-house teams, not replace them. Most of our best results come from working closely with your ops, marketing, and finance leads.',
  },
];

export default function SolutionsPage() {
  return (
    <div style={{paddingTop:'72px'}}>
      {/* Hero */}
      <section className="page-hero" style={{background:'radial-gradient(ellipse at 50% 0%, rgba(181,255,48,0.08) 0%, transparent 60%)'}}>
        <div className="container">
          <div className="tag" style={{marginBottom:'20px'}}>Solutions</div>
          <h1>The right solution<br /><span className="green">for your stage.</span></h1>
          <p>Whether you need a one-off audit or an ongoing strategic partner, we have a solution that fits.</p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.solutionsGrid}>
            {solutions.map((s) => (
              <div key={s.id} id={s.id} className={`card ${styles.solutionCard} ${s.highlight ? styles.highlighted : ''}`}>
                {s.highlight && <div className={styles.popularBadge}>Most Popular</div>}
                <div className={styles.solTag}>{s.tag}</div>
                <h3 className={styles.solTitle}>{s.title}</h3>
                <div className={styles.solPrice}>{s.price}</div>
                <p className={styles.solDesc}>{s.desc}</p>
                <div className={styles.solFeatures}>
                  {s.features.map((f, i) => (
                    <div key={i} className={styles.solFeature}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l4 4 6-7" stroke="#B5FF30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className={s.highlight ? 'btn-primary' : 'btn-outline'} style={{marginTop:'auto'}}>
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'60px'}}>
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Common <span>questions</span></h2>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((f, i) => (
              <div key={i} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{f.q}</h3>
                <p className={styles.faqA}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'0 0 100px'}}>
        <div className="container" style={{textAlign:'center'}}>
          <p style={{color:'#8F9B8F', marginBottom:'24px'}}>Not sure which solution is right for you?</p>
          <Link href="/contact" className="btn-primary">Talk to the Team →</Link>
        </div>
      </section>
    </div>
  );
}
