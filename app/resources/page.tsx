import Link from 'next/link';
import styles from './resources.module.css';

const insights = [
  {
    tag: 'Menu Intelligence',
    title: 'Why 60% of delivery menus are too long — and how to fix yours',
    excerpt: 'Analysis across multi-platform restaurant data reveals a clear relationship between menu size and checkout conversion. Here is why choice overload depresses basket sizes.',
    date: 'Growth Insight',
    readTime: '5 min read',
    id: 'insights',
  },
  {
    tag: 'Pricing & Margin',
    title: 'The hidden cost of delivery discounts: an order-level margin audit',
    excerpt: 'Promotional discounting on aggregators drives gross GMV on the surface, but frequently erodes net contribution. Here is how to measure true discount incrementality.',
    date: 'Pricing Intelligence',
    readTime: '6 min read',
  },
  {
    tag: 'Channel Economics',
    title: 'Direct ordering vs. platform delivery: finding your commercial balance',
    excerpt: 'Aggregators provide top-of-funnel discovery, while direct channels preserve margins. We model how top food brands calibrate their channel mix.',
    date: 'Strategy Brief',
    readTime: '7 min read',
  },
];

const caseStudies = [
  {
    client: 'Multi-Unit Casual Dining Brand',
    result: '+23% Average Order Value',
    desc: 'Menu restructuring and bundle redesign across 35 sites, unlocking higher contribution without increasing kitchen assembly friction.',
    id: 'cases',
  },
  {
    client: 'Regional Fast-Casual Concept',
    result: '-18% Net Commission Drag',
    desc: 'Platform promotion rationalization and direct order migration that preserved customer volume while reclaiming net cash margin.',
  },
  {
    client: 'Independent Pizza & Burger Group',
    result: '+31% View-to-Order Conversion',
    desc: 'Overhauled visual merchandising, item description appeal, and modifier sequencing to eliminate dinner peak drop-offs.',
  },
];

export default function ResourcesPage() {
  return (
    <div style={{paddingTop:'72px', background: '#FFFFFF'}}>
      {/* Hero */}
      <section className="page-hero" style={{background:'radial-gradient(ellipse at 50% 0%, rgba(175,67,29,0.08) 0%, transparent 60%)'}}>
        <div className="container">
          <div className="tag" style={{marginBottom:'20px'}}>Growth Intelligence Hub</div>
          <h1>Insights on restaurant<br /><span className="green">growth & performance.</span></h1>
          <p>Practical, data-backed perspectives on menu engineering, pricing elasticity, and platform economics from SecondMiles.</p>
        </div>
      </section>

      {/* Curated Insights */}
      <section className="section" id="insights" style={{background: '#FFFFFF'}}>
        <div className="container">
          <div className="section-label" style={{marginBottom:'12px'}}>Featured Analysis</div>
          <h2 className="section-title" style={{marginBottom:'48px'}}>Growth <span>intelligence</span></h2>
          <div className="grid-3">
            {insights.map((a, i) => (
              <article key={i} className={`card ${styles.articleCard}`}>
                <div className={styles.articleTag}>{a.tag}</div>
                <h3 className={styles.articleTitle}>{a.title}</h3>
                <p className={styles.articleExcerpt}>{a.excerpt}</p>
                <div className={styles.articleMeta}>
                  <span>{a.date}</span>
                  <span className={styles.dot}>·</span>
                  <span>{a.readTime}</span>
                </div>
                <Link href="/contact" className={styles.readMore}>Discuss This Topic →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className={`section ${styles.caseSection}`} id="cases">
        <div className="container">
          <div className="section-label" style={{marginBottom:'12px'}}>Commercial Proof</div>
          <h2 className="section-title" style={{marginBottom:'48px'}}>Measured on <span>business impact</span></h2>
          <div className="grid-3">
            {caseStudies.map((c, i) => (
              <div key={i} className={`card ${styles.caseCard}`}>
                <div className={styles.caseResult}>{c.result}</div>
                <div className={styles.caseClient}>{c.client}</div>
                <p className={styles.caseDesc}>{c.desc}</p>
                <Link href="/contact" className={styles.caseLink}>Achieve Similar Growth →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'0 0 100px', background: '#FFFFFF'}}>
        <div className="container">
          <div style={{background:'rgba(175,67,29,0.04)', border:'1px solid rgba(175,67,29,0.22)', borderRadius:'24px', padding:'60px 40px', textAlign:'center', boxShadow:'0 10px 30px rgba(175,67,29,0.06)'}}>
            <div className="section-label">Partner With SecondMiles</div>
            <h2 className="section-title" style={{textAlign:'center', marginBottom:'16px'}}>Let's find your <span>second mile.</span></h2>
            <p style={{color:'#1C1917', fontSize:'1.2rem', fontWeight:600, marginBottom:'8px'}}>30 minutes. Your business. No sales pitch.</p>
            <p style={{color:'#57534E', maxWidth:'480px', margin:'0 auto 32px', lineHeight:'1.7'}}>
              Discover the commercial opportunities hidden in your restaurant's online performance data.
            </p>
            <Link href="/contact" className="btn-primary">Find My Growth Opportunities →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
