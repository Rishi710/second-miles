import Link from 'next/link';
import styles from './solutions.module.css';

const solutions = [
  {
    id: 'menu',
    title: 'Menu & Range Optimization',
    tag: 'Highest Impact',
    price: 'Growth Audit & Sprint',
    desc: 'What should you sell more of? A complete diagnostic of your online menu range, combo engineering, item sequencing, and margin performance.',
    features: [
      'Item-level sales velocity & margin diagnostic',
      'High-margin combo & bundle restructuring',
      'Modifier funnel & view-to-order audit',
      'Platform-specific digital merchandising',
      'Operational kitchen feasibility review',
      '90-day margin impact tracking',
    ],
    highlight: true,
  },
  {
    id: 'pricing',
    title: 'Pricing & Elasticity Audit',
    tag: 'Quick Margin Win',
    price: 'Targeted Sprint',
    desc: 'Where are you undercharging or losing conversion? Uncover the optimal price thresholds by channel, item, and daypart without harming order velocity.',
    features: [
      'Delivery platform price elasticity modeling',
      'Competitor & local catchment price mapping',
      'Modifier, add-on & combo fee calibration',
      'Discount efficiency & subsidy reduction roadmap',
    ],
    highlight: false,
  },
  {
    id: 'channel',
    title: 'Visibility & Channel Strategy',
    tag: 'Efficiency',
    price: 'Strategic Advisory',
    desc: 'Are you spending enough — or spending blindly? Rationalize your aggregator ad spend, platform visibility, and direct channel economics.',
    features: [
      'Aggregator ad spend incrementality audit',
      'Organic ranking & tag optimization',
      'Direct ordering growth & customer migration',
      'Commission defense & take-rate recovery plan',
      'Ongoing channel mix optimization',
    ],
    highlight: false,
  },
  {
    id: 'dashboards',
    title: 'Growth Intelligence & Daily Pulse',
    tag: 'Ongoing Intelligence',
    price: 'Continuous Partnership',
    desc: 'Know what happened. Know what to do next. Daily Pulse alerts and weekly commercial action plans tailored for modern restaurant leadership.',
    features: [
      'Daily Pulse intelligence summary',
      'Margin leak & conversion drop alerts',
      'Prioritized commercial actions for ops & marketing',
      'Zero platform bias — 100% focused on your bottom line',
      'Monthly strategic review with senior partners',
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: 'How does SecondMiles differ from traditional consultancies or agencies?',
    a: 'We are not a generic marketing agency selling ad management, nor an ivory-tower consultancy delivering 100-page slide decks. We are a growth intelligence partner for food businesses. Every insight we deliver connects directly to revenue, margin, or efficiency with immediate commercial actions.',
  },
  {
    q: 'What data do you need to get started?',
    a: 'We connect directly to your platform data feeds (Deliveroo, Uber Eats, Just Eat, direct ordering POS). We handle the data synthesis with no disruption to your daily operations.',
  },
  {
    q: 'Do you work with single-site independents or multi-site operators?',
    a: 'We partner with growing independent food brands and multi-site operators. Our framework adapts to your size and commercial priorities.',
  },
  {
    q: 'How fast do we see commercial results?',
    a: 'Most clients implement our first wave of pricing and menu adjustments within 7–14 days, seeing measurable conversion and basket-size improvements in the first month.',
  },
];

export default function SolutionsPage() {
  return (
    <div style={{ paddingTop: '72px', background: '#FFFFFF' }}>
      {/* Hero */}
      <section className="page-hero" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(175,67,29,0.08) 0%, transparent 60%)' }}>
        <div className="container">
          <div className="tag" style={{ marginBottom: '20px' }}>Commercial Solutions</div>
          <h1>Built for the modern<br /><span className="green">restaurant business.</span></h1>
          <p>From rapid high-impact audits to ongoing growth intelligence, we help you find the commercial opportunities others miss.</p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className={styles.solutionsGrid}>
            {solutions.map((s) => (
              <div key={s.id} id={s.id} className={`card ${styles.solutionCard} ${s.highlight ? styles.highlighted : ''}`}>
                {s.highlight && <div className={styles.popularBadge}>High Impact</div>}
                <div className={styles.solTag}>{s.tag}</div>
                <h3 className={styles.solTitle}>{s.title}</h3>
                <div className={styles.solPrice}>{s.price}</div>
                <p className={styles.solDesc}>{s.desc}</p>
                <div className={styles.solFeatures}>
                  {s.features.map((f, i) => (
                    <div key={i} className={styles.solFeature}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l4 4 6-7" stroke="#af431d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className={s.highlight ? 'btn-primary' : 'btn-outline'} style={{ marginTop: 'auto' }}>
                  Find Opportunities →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
      <section style={{ padding: '0 0 100px', background: '#FFFFFF' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{
            background: 'rgba(175,67,29,0.04)',
            border: '1px solid rgba(175,67,29,0.22)',
            borderRadius: '24px',
            padding: '60px 40px',
            maxWidth: '800px',
            margin: '0 auto',
            boxShadow: '0 10px 30px rgba(175,67,29,0.06)'
          }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>Find Your Second Mile</div>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '16px' }}>
              Let's find your <span>second mile.</span>
            </h2>
            <p style={{ color: '#1C1917', fontSize: '1.15rem', fontWeight: 600, marginBottom: '8px' }}>
              30 minutes. Your business. No sales pitch.
            </p>
            <p style={{ color: '#57534E', marginBottom: '28px', maxWidth: '480px', margin: '0 auto 28px' }}>
              Not sure which solution matches your current stage? Let's discuss your online ordering setup and determine where the fastest margin gains are.
            </p>
            <Link href="/contact" className="btn-primary">Find My Growth Opportunities →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
