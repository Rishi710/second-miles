import Link from 'next/link';
import styles from './whatwedo.module.css';

const services = [
  {
    id: 'menu',
    tag: '01',
    title: 'Menu & Range Optimisation',
    headline: 'Your menu is your most powerful commercial lever.',
    desc: 'Most food businesses are sitting on hidden revenue, buried in their own menu. Too many items, unclear positioning, underperforming dishes dragging down averages. We use sales data, margin analysis, and market benchmarks to rebuild your range around what actually works.',
    outcomes: ['Identify top-performing and underperforming items', 'Reduce complexity without losing revenue', 'Increase average order value through smart bundling', 'Position your menu to win on delivery platforms'],
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
      </svg>
    ),
  },
  {
    id: 'pricing',
    tag: '02',
    title: 'Pricing Intelligence',
    headline: 'Price with confidence, not guesswork.',
    desc: 'Pricing is the fastest route to profitability — if you get it right. We analyse competitor positioning, demand elasticity, platform dynamics, and your own cost structure to help you find the price points that maximise both volume and margin.',
    outcomes: ['Competitive landscape mapping', 'Price elasticity modelling', 'Platform-specific pricing strategies', 'Promotional discount analysis'],
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
  },
  {
    id: 'channel',
    tag: '03',
    title: 'Channel Strategy',
    headline: 'Be everywhere that matters. Nowhere that doesn\'t.',
    desc: 'Uber Eats, Deliveroo, Just Eat, your own direct website — each channel has different dynamics, different customers, different economics. We help you decide where to compete, how hard to push each platform, and what your ideal channel mix looks like.',
    outcomes: ['Platform performance benchmarking', 'Commission & fee optimisation', 'Direct ordering growth strategy', 'Multi-channel integration planning'],
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
  },
  {
    id: 'dashboards',
    tag: '04',
    title: 'Performance Dashboards',
    headline: 'See your business clearly, every single day.',
    desc: 'Most operators are flying blind, relying on gut feel and end-of-month reports. We build custom dashboards that surface the metrics that matter — real-time, clear, and built around the decisions you actually need to make.',
    outcomes: ['KPI identification and tracking', 'Custom dashboard design & build', 'Automated reporting setup', 'Team training and adoption support'],
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
];

export default function WhatWeDoPage() {
  return (
    <div style={{paddingTop: '72px'}}>
      {/* Hero */}
      <section className="page-hero" style={{background: 'radial-gradient(ellipse at 50% 0%, rgba(181,255,48,0.08) 0%, transparent 60%)'}}>
        <div className="container">
          <div className="tag" style={{marginBottom:'20px'}}>Our Services</div>
          <h1>Specialist expertise<br /><span className="green">for food businesses.</span></h1>
          <p>We go deeper than any generalist agency. Every service we offer is built around the specific dynamics of the food industry.</p>
          <Link href="/contact" className="btn-primary">Start a Conversation →</Link>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesList}>
            {services.map((s, i) => (
              <div key={s.id} id={s.id} className={styles.serviceRow}>
                <div className={styles.serviceLeft}>
                  <div className={styles.serviceTag}>{s.tag}</div>
                  <div className="icon-wrap" style={{width:'72px', height:'72px'}}>{s.icon}</div>
                  <h2 className={styles.serviceTitle}>{s.title}</h2>
                  <p className={styles.serviceHeadline}>{s.headline}</p>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <Link href="/contact" className="btn-outline" style={{marginTop:'8px'}}>
                    Discuss This →
                  </Link>
                </div>
                <div className={styles.serviceRight}>
                  <div className={styles.outcomesCard}>
                    <div className={styles.outcomesTitle}>What you get</div>
                    {s.outcomes.map((o, j) => (
                      <div key={j} className={styles.outcome}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.checkIcon}>
                          <path d="M3 8l4 4 6-7" stroke="#B5FF30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
      <section style={{padding:'0 0 100px'}}>
        <div className="container">
          <div style={{background:'rgba(14,19,14,0.8)', border:'1px solid rgba(181,255,48,0.12)', borderRadius:'20px', padding:'60px 40px', textAlign:'center'}}>
            <div className="section-label">Not sure where to start?</div>
            <h2 className="section-title" style={{textAlign:'center'}}>Let's figure it out <span>together.</span></h2>
            <p style={{color:'#8F9B8F', maxWidth:'480px', margin:'0 auto 32px', lineHeight:'1.7'}}>A 30-minute call is all we need to tell you where we can add the most value for your specific situation.</p>
            <Link href="/contact" className="btn-primary">Book a Free Discovery Call →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
