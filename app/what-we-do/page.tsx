import Link from 'next/link';
import styles from './whatwedo.module.css';

const services = [
  {
    id: 'menu',
    tag: '01',
    area: 'Menu Optimization',
    title: 'What should you sell more of?',
    headline: 'Your menu is your single greatest commercial lever.',
    desc: 'Most food businesses are sitting on hidden revenue, buried in their own menu. Too many choices, unclear hierarchy, and underperforming dishes drag down basket sizes. We analyze sales mix, margin contribution, and category dynamics to rebuild your range around dishes that drive incremental revenue.',
    outcomes: [
      'Identify true hero dishes vs. margin-eroding complexity',
      'Engineer high-converting bundles to lift average order value',
      'Platform-specific menu hierarchy & modifier flow redesign',
      'Operational kitchen feasibility review'
    ],
    icon: (
      <svg width="32" height="32" fill="none" stroke="#af431d" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
      </svg>
    ),
  },
  {
    id: 'pricing',
    tag: '02',
    area: 'Pricing Intelligence',
    title: 'Where are you undercharging or losing conversion?',
    headline: 'Price with commercial conviction, not gut guesswork.',
    desc: 'Pricing is the fastest route to profitability — if you get it right. We analyze platform elasticity, competitor pricing bands, modifier fees, and daypart demand to pinpoint the exact price thresholds that maximize total cash margin without depressing order volume.',
    outcomes: [
      'Channel-specific price elasticity mapping',
      'Modifier & add-on pricing optimization',
      'Defensive competitor price benchmarking',
      'Promotional discount & threshold recalibration'
    ],
    icon: (
      <svg width="32" height="32" fill="none" stroke="#af431d" strokeWidth="1.5" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
  },
  {
    id: 'visibility',
    tag: '03',
    area: 'Visibility & Channel Strategy',
    title: 'Are you spending enough — or spending blindly?',
    headline: 'Stop wasting marketing budgets on low-converting slots.',
    desc: 'Aggregators encourage continuous ad spend and deep discounts, but often this merely subsidizes orders you would have won anyway. We audit your platform visibility, sponsored placements, and channel economics to ensure every marketing pound drives true incremental margin.',
    outcomes: [
      'Aggregator ad efficiency & incrementality audit',
      'Organic search algorithm & tag optimization',
      'Direct ordering vs. platform channel mix balancing',
      'Commission defense and net take-rate recovery'
    ],
    icon: (
      <svg width="32" height="32" fill="none" stroke="#af431d" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
  },
  {
    id: 'conversion',
    tag: '04',
    area: 'Conversion Rate Optimization',
    title: 'Why are customers viewing but not ordering?',
    headline: 'Plug the leaks in your digital storefront.',
    desc: 'Driving impressions is meaningless if prospective diners bounce before adding to cart. We diagnose where browsing drop-offs occur, improving product photography briefs, dish descriptions, and cart completion rates across peak dining hours.',
    outcomes: [
      'Funnel drop-off diagnosis from view to checkout',
      'Item description & appetite-appeal enhancement',
      'Photo brief & category sequencing rebuild',
      'Basket threshold & delivery fee friction analysis'
    ],
    icon: (
      <svg width="32" height="32" fill="none" stroke="#af431d" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="#af431d" strokeWidth="1.5" strokeDasharray="2 3" />
        <circle cx="12" cy="12" r="4" stroke="#af431d" strokeWidth="1.5" />
        <path d="M12 8v4l3 3" stroke="#af431d" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'profitability',
    tag: '05',
    area: 'Profitability & Unit Economics',
    title: 'Which orders actually make you money?',
    headline: 'See through gross GMV to true net cash contribution.',
    desc: 'High delivery revenue often disguises razor-thin or negative net margins after factoring in platform take rates, refunds, packaging, and promo subsidies. We map your true order-level economics so you can focus resources on high-contribution business.',
    outcomes: [
      'Order-level contribution margin modeling',
      'Refund, error charge & dispute leak audits',
      'Packaging and fulfillment cost allocation',
      'High-margin daypart & channel prioritization'
    ],
    icon: (
      <svg width="32" height="32" fill="none" stroke="#af431d" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#af431d" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'growth',
    tag: '06',
    area: 'Growth Intelligence & Execution',
    title: 'What should you do next?',
    headline: 'Continuous growth intelligence without vanity metrics.',
    desc: 'Data without direction is just noise. We provide daily and weekly growth intelligence that tells leadership what happened, what needs attention, and the exact commercial decisions to execute next.',
    outcomes: [
      'Sample Daily Pulse & weekly commercial action items',
      'Proactive margin alert triggers',
      'Continuous experimentation & promo tracking',
      'Dedicated growth partner support with zero platform bias'
    ],
    icon: (
      <svg width="32" height="32" fill="none" stroke="#af431d" strokeWidth="1.5" viewBox="0 0 24 24">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
];

export default function WhatWeDoPage() {
  return (
    <div style={{paddingTop: '72px', background: '#FFFFFF'}}>
      {/* Hero */}
      <section className="page-hero" style={{background: 'radial-gradient(ellipse at 50% 0%, rgba(175,67,29,0.08) 0%, transparent 60%)'}}>
        <div className="container">
          <div className="tag" style={{marginBottom:'20px'}}>Where We Find Your Next Growth</div>
          <h1>Commercial clarity<br /><span className="green">for the modern restaurant business.</span></h1>
          <p>We don't talk in vague consulting theories. SecondMiles isolates the exact commercial friction points where food operators leave profit on the table.</p>
          <div style={{display:'flex', gap:'16px', marginTop:'16px'}}>
            <Link href="/contact" className="btn-primary">Find My Growth Opportunities →</Link>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section" style={{background: '#FFFFFF'}}>
        <div className="container">
          <div className={styles.servicesList}>
            {services.map((s) => (
              <div key={s.id} id={s.id} className={styles.serviceRow}>
                <div className={styles.serviceLeft}>
                  <div className={styles.serviceTag}>{s.tag} — {s.area}</div>
                  <div className="icon-wrap" style={{width:'64px', height:'64px'}}>{s.icon}</div>
                  <h2 className={styles.serviceTitle}>{s.title}</h2>
                  <p className={styles.serviceHeadline}>{s.headline}</p>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <Link href="/contact" className="btn-outline" style={{marginTop:'8px', alignSelf:'flex-start'}}>
                    Solve This With SecondMiles →
                  </Link>
                </div>
                <div className={styles.serviceRight}>
                  <div className={styles.outcomesCard}>
                    <div className={styles.outcomesTitle}>Commercial Actions & Deliverables</div>
                    {s.outcomes.map((o, j) => (
                      <div key={j} className={styles.outcome}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.checkIcon}>
                          <path d="M3 8l4 4 6-7" stroke="#af431d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {o}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'0 0 100px', background: '#FFFFFF'}}>
        <div className="container">
          <div style={{background:'rgba(175,67,29,0.04)', border:'1px solid rgba(175,67,29,0.22)', borderRadius:'24px', padding:'64px 40px', textAlign:'center'}}>
            <div className="section-label">Find Your Second Mile</div>
            <h2 className="section-title" style={{textAlign:'center', marginBottom:'16px'}}>Let's find your <span>second mile.</span></h2>
            <p style={{color:'#1C1917', fontSize:'1.2rem', fontWeight:600, marginBottom:'8px'}}>30 minutes. Your business. No sales pitch.</p>
            <p style={{color:'#57534E', maxWidth:'520px', margin:'0 auto 32px', lineHeight:'1.7'}}>
              We'll look at your online-ordering data without platform bias and show you the growth opportunities that are easy to miss.
            </p>
            <Link href="/contact" className="btn-primary">Find My Growth Opportunities →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
