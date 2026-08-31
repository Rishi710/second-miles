import Link from 'next/link';
import styles from './about.module.css';

const values = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Independent Perspective',
    desc: 'We have no platform bias. Our advice is shaped entirely by what\'s right for your business, not any third-party interest.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Commercial Focus',
    desc: 'Every insight we surface ties back to revenue, margin, or growth. We don\'t generate reports for the sake of it.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Actionable Intelligence',
    desc: 'Data without direction is just noise. We turn complexity into clear, prioritised actions you can take this week.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Built for Food',
    desc: 'We only work in food. That means deeper benchmarks, sharper intuition, and faster answers than a generalist ever could.',
  },
];

const team = [
  {
    name: 'Alex Morgan',
    role: 'Founder & CEO',
    bio: '15+ years in food & hospitality. Former Head of Strategy at Deliveroo. Built analytics functions at two unicorn food-tech companies.',
    initials: 'AM',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Analytics',
    bio: 'Data science background from McKinsey\'s retail practice. Specialist in demand forecasting and pricing models for high-volume restaurants.',
    initials: 'SC',
  },
  {
    name: 'Jordan Williams',
    role: 'Commercial Director',
    bio: '10 years leading growth at Pret, Itsu, and Leon. Bridges the gap between insight and commercial decision-making.',
    initials: 'JW',
  },
  {
    name: 'Maya Patel',
    role: 'Senior Consultant',
    bio: 'Former category manager at Just Eat. Deep expertise in platform dynamics, commission structures, and visibility optimisation.',
    initials: 'MP',
  },
];

export default function AboutPage() {
  return (
    <div style={{paddingTop: '72px'}}>
      {/* Hero */}
      <section className={`page-hero ${styles.hero}`}>
        <div className="container">
          <div className="tag" style={{marginBottom:'20px'}}>Our Story</div>
          <h1>We help food businesses<br /><span className="green">think more clearly.</span></h1>
          <p>SecondMiles was founded on a simple belief: food operators deserve the same quality of strategic thinking that large corporates take for granted.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionLeft}>
              <div className="section-label">Our Mission</div>
              <h2 className="section-title">More than <span>a consultancy</span></h2>
              <p className="section-desc" style={{marginBottom:'24px'}}>
                We embedded ourselves in food businesses for over a decade — running ops, managing platforms, living with the data — before we ever started advising others.
              </p>
              <p className="section-desc">
                That experience is what makes SecondMiles different. We know what it feels like to face the decisions you face. We know where the traps are, and we know what good looks like.
              </p>
              <div className={styles.missionStats}>
                <div className={styles.mStat}><span className={styles.mNum}>2016</span><span className={styles.mLabel}>Founded</span></div>
                <div className={styles.mStat}><span className={styles.mNum}>180+</span><span className={styles.mLabel}>Clients Served</span></div>
                <div className={styles.mStat}><span className={styles.mNum}>12</span><span className={styles.mLabel}>Team Members</span></div>
              </div>
            </div>
            <div className={styles.missionRight}>
              <div className={styles.missionVisual}>
                <div className={styles.missionBg} />
                <div className={styles.missionCard}>
                  <div className={styles.missionQuote}>"We go the second mile so our clients don't have to."</div>
                  <div className={styles.missionAuthor}>— Alex Morgan, Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'60px'}}>
            <div className="section-label">Our Values</div>
            <h2 className="section-title">The principles that <span>guide us</span></h2>
          </div>
          <div className="grid-2">
            {values.map((v, i) => (
              <div key={i} className="card" style={{display:'flex', gap:'20px', alignItems:'flex-start'}}>
                <div className="icon-wrap" style={{flexShrink:0}}>{v.icon}</div>
                <div>
                  <h3 style={{fontSize:'1.05rem', fontWeight:'700', marginBottom:'8px'}}>{v.title}</h3>
                  <p style={{fontSize:'0.9rem', color:'#8F9B8F', lineHeight:'1.65'}}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'60px'}}>
            <div className="section-label">The Team</div>
            <h2 className="section-title">People who <span>know food</span></h2>
          </div>
          <div className="grid-4">
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
      <section style={{padding:'0 0 100px'}}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className="section-title" style={{textAlign:'center'}}>Want to <span>work with us?</span></h2>
            <p style={{color:'#8F9B8F', textAlign:'center', marginBottom:'32px'}}>Join 180+ food businesses who trust SecondMiles.</p>
            <div style={{display:'flex', justifyContent:'center'}}>
              <Link href="/contact" className="btn-primary">Talk to SecondMiles →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
