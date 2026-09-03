import Link from 'next/link';
import styles from './about.module.css';

const values = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#af431d" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Independent Perspective',
    desc: 'We look at your business without platform bias. Aggregators want you to spend on ad slots; third-party tools push their own lock-in. Our sole objective is your commercial profitability.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#af431d" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Commercial Focus',
    desc: 'Every recommendation connects to revenue, efficiency or profitability. We don\'t generate reports for the sake of it. Every insight must prove its financial justification.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#af431d" strokeWidth="1.5" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Actionable Intelligence',
    desc: 'No vanity dashboards. Every insight should lead to a decision. We translate complex data streams into specific commercial actions your team can execute immediately.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#af431d" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="#af431d" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M7 13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13H7Z" stroke="#af431d" strokeWidth="1.5" />
        <path d="M12 6V10M9 8V10M15 8V10" stroke="#af431d" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Built for the Modern Restaurant Business',
    desc: 'Your menu, pricing, promotions, visibility, customer behaviour and profitability are connected. SecondMiles brings those signals together to identify where growth is being won — and where it is being lost.',
  },
];

const team = [
  {
    name: 'Deepak Singh Dagur',
    role: 'Founder',
    bio: '15+ years in food & hospitality. Former Head of Strategy at Deliveroo. Built analytics and growth functions across top food-tech and multi-site operators.',
    initials: 'DD',
  },
  {
    name: 'Rishi Sharma',
    role: 'Co-Founder',
    bio: '18+ years of commercial and operational leadership in food & hospitality. Expert in menu profitability, platform economics, and brand growth.',
    initials: 'RS',
  }
];

const coreMetrics = ['Revenue', 'Orders', 'AOV', 'Conversion', 'Visibility', 'Profitability'];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '72px', background: '#FFFFFF' }}>
      {/* Hero */}
      <section className={`page-hero ${styles.hero}`}>
        <div className="container">
          <div className="tag" style={{ marginBottom: '20px' }}>Growth Intelligence Partner</div>
          <h1>Move beyond the obvious.<br /><span className="green">Find the overlooked growth.</span></h1>
          <p>SecondMiles is the growth intelligence partner for modern food businesses — helping them turn online-ordering data into sharper decisions, stronger performance and sustainable growth.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionLeft}>
              <div className="section-label">Our Philosophy</div>
              <h2 className="section-title">The first answer isn't <span>always the best answer.</span></h2>
              <p className="section-desc" style={{ marginBottom: '20px' }}>
                We go one step further — connecting performance, customer behaviour and commercial decisions to uncover opportunities others miss.
              </p>
              <p className="section-desc" style={{ marginBottom: '24px' }}>
                Most restaurant operators are inundated with dashboards and platform reports that state what happened yesterday, but fail to provide the commercial conviction needed to act on tomorrow.
              </p>
              <div style={{ borderTop: '1px solid rgba(175,67,29,0.15)', paddingTop: '24px', marginTop: '12px' }}>
                <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#af431d', fontWeight: 700, marginBottom: '14px' }}>
                  Built around the metrics that actually matter
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {coreMetrics.map(m => (
                    <span key={m} style={{
                      background: 'rgba(175,67,29,0.06)',
                      border: '1px solid rgba(175,67,29,0.2)',
                      padding: '6px 14px',
                      borderRadius: '100px',
                      fontSize: '0.82rem',
                      color: '#1C1917',
                      fontWeight: 600
                    }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.missionRight}>
              <div className={styles.missionVisual}>
                <div className={styles.missionBg} />
                <div className={styles.missionCard}>
                  <div className={styles.missionQuote}>
                    "We don't just report performance. We challenge it."
                  </div>
                  <div className={styles.missionAuthor}>
                    — SecondMiles Founding Principle
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="section-label">Core Principles</div>
            <h2 className="section-title">How we bring <span>growth to light</span></h2>
          </div>
          <div className="grid-2">
            {values.map((v, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div className="icon-wrap" style={{ flexShrink: 0 }}>{v.icon}</div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '10px', color: '#1C1917' }}>{v.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: '#57534E', lineHeight: '1.65' }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="section-label">Leadership</div>
            <h2 className="section-title">Operators who know <span>food business economics</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', maxWidth: '800px', margin: '0 auto' }}>
            {team.map((m, i) => (
              <div key={i} className={`card ${styles.teamCard}`}>
                <div className={styles.teamAvatar}>{m.initials}</div>
                <h3 className={styles.teamName}>{m.name}</h3>
                <div className={styles.teamRole}>{m.role}</div>
                <p className={styles.teamBio}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 0 100px', background: '#FFFFFF' }}>
        <div className="container">
          <div className={styles.ctaBox} style={{ textAlign: 'center' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>Start Your Second Mile</div>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '16px' }}>
              Let's find your <span>second mile.</span>
            </h2>
            <p style={{ color: '#1C1917', fontSize: '1.15rem', fontWeight: 600, marginBottom: '8px' }}>
              30 minutes. Your business. No sales pitch.
            </p>
            <p style={{ color: '#57534E', maxWidth: '500px', margin: '0 auto 32px', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Let's look at your ordering data and uncover the hidden commercial opportunities you're leaving behind.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary">Find My Growth Opportunities →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
