import Link from 'next/link';
import styles from './resources.module.css';

const insights = [
  {
    tag: 'Menu Strategy',
    title: 'Why 60% of delivery menus are too long — and how to fix yours',
    excerpt: 'Analysis of 3,000 restaurant menus reveals a clear correlation between menu size and conversion rate. Here\'s what the data says.',
    date: 'Aug 2026',
    readTime: '6 min read',
    id: 'insights',
  },
  {
    tag: 'Pricing',
    title: 'The hidden cost of delivery discounts: a margin analysis',
    excerpt: 'Promotional discounting on platforms like Deliveroo and Uber Eats looks good on the surface. But what does it actually do to your bottom line?',
    date: 'Jul 2026',
    readTime: '8 min read',
  },
  {
    tag: 'Channel Strategy',
    title: 'Direct vs. platform: when does it make sense to go your own way?',
    excerpt: 'We model the economics of direct ordering for restaurants at different revenue levels. The answer might surprise you.',
    date: 'Jun 2026',
    readTime: '5 min read',
  },
  {
    tag: 'Industry Trends',
    title: 'The 2026 Food Delivery Landscape: five trends operators must watch',
    excerpt: 'From AI-generated menus to hyper-local dark kitchens, the delivery market is shifting fast. Here\'s what\'s coming and how to prepare.',
    date: 'May 2026',
    readTime: '10 min read',
  },
  {
    tag: 'Data & Analytics',
    title: 'Five metrics every food operator should track (but most ignore)',
    excerpt: 'Beyond revenue and orders, there\'s a layer of insight that separates high-performing operators from the rest. We show you what to measure.',
    date: 'Apr 2026',
    readTime: '7 min read',
  },
  {
    tag: 'Menu Strategy',
    title: 'Bundling that actually works: lessons from 50 food brands',
    excerpt: 'Not all meal deals are created equal. We analyse which bundling strategies drive the most incremental value and how to replicate them.',
    date: 'Mar 2026',
    readTime: '6 min read',
  },
];

const caseStudies = [
  {
    client: 'National Burger Chain',
    result: '+23% average order value',
    desc: 'Menu restructure and bundle strategy for a 40-site burger brand, resulting in significant uplift in AOV within 60 days.',
    id: 'cases',
  },
  {
    client: 'Independent Pizza Group',
    result: '-18% commission cost',
    desc: 'Channel strategy overhaul that shifted 35% of volume to direct ordering, dramatically improving margins.',
  },
  {
    client: 'Asian Fusion Concept',
    result: '+31% delivery conversion',
    desc: 'Menu photography brief, item rationalisation, and description rewriting that transformed platform visibility and click-through rates.',
  },
];

const guides = [
  { title: 'The Food Operator\'s Guide to Delivery Analytics', pages: '24 pages', id: 'guides' },
  { title: 'How to Read Your Platform Dashboard', pages: '12 pages' },
  { title: 'Pricing Toolkit for Restaurant Owners', pages: '18 pages' },
];

export default function ResourcesPage() {
  return (
    <div style={{paddingTop:'72px'}}>
      {/* Hero */}
      <section className="page-hero" style={{background:'radial-gradient(ellipse at 50% 0%, rgba(181,255,48,0.08) 0%, transparent 60%)'}}>
        <div className="container">
          <div className="tag" style={{marginBottom:'20px'}}>Knowledge Hub</div>
          <h1>Insights to help<br /><span className="green">you grow.</span></h1>
          <p>Articles, case studies, and guides from the team at SecondMiles — all focused on the food industry.</p>
        </div>
      </section>

      {/* Insights */}
      <section className="section" id="insights">
        <div className="container">
          <div className="section-label" style={{marginBottom:'12px'}}>Insights & Articles</div>
          <h2 className="section-title" style={{marginBottom:'48px'}}>Latest <span>thinking</span></h2>
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
                <Link href="#" className={styles.readMore}>Read Article →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className={`section ${styles.caseSection}`} id="cases">
        <div className="container">
          <div className="section-label" style={{marginBottom:'12px'}}>Case Studies</div>
          <h2 className="section-title" style={{marginBottom:'48px'}}>Results that <span>speak for themselves</span></h2>
          <div className="grid-3">
            {caseStudies.map((c, i) => (
              <div key={i} className={`card ${styles.caseCard}`}>
                <div className={styles.caseResult}>{c.result}</div>
                <div className={styles.caseClient}>{c.client}</div>
                <p className={styles.caseDesc}>{c.desc}</p>
                <Link href="/contact" className={styles.caseLink}>Get a Similar Result →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="section" id="guides">
        <div className="container">
          <div className="section-label" style={{marginBottom:'12px'}}>Guides</div>
          <h2 className="section-title" style={{marginBottom:'48px'}}>Free <span>downloads</span></h2>
          <div className={styles.guidesList}>
            {guides.map((g, i) => (
              <div key={i} className={styles.guideRow}>
                <div className={styles.guideIcon}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
                  </svg>
                </div>
                <div className={styles.guideInfo}>
                  <div className={styles.guideTitle}>{g.title}</div>
                  <div className={styles.guidePages}>{g.pages} · PDF</div>
                </div>
                <button className={`btn-outline ${styles.downloadBtn}`}>Download Free →</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
