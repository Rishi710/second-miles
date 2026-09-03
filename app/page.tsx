import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.css';

// SVG Icons tailored for Growth Intelligence with #af431d theme
const ReticleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" stroke="#af431d" strokeWidth="1.5" strokeDasharray="4 2" />
    <circle cx="12" cy="12" r="3" stroke="#af431d" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="1" fill="#af431d" />
  </svg>
);

const SignalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12C2 6.477 6.477 2 12 2M2 12C2 17.523 6.477 22 12 22" stroke="#af431d" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 12C6 8.686 8.686 6 12 6M6 12C6 15.314 8.686 18 12 18" stroke="#af431d" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2" fill="#af431d" />
  </svg>
);

const PerformanceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 18H20" stroke="#af431d" strokeWidth="1.5" />
    <path d="M6 15V18M11 11V18M16 7V18" stroke="#af431d" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 9L12 4L17 7" stroke="#af431d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 4H17V7" stroke="#af431d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TargetIcon1 = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#af431d" strokeWidth="1.5" strokeDasharray="2 3" />
    <circle cx="12" cy="12" r="5" stroke="#af431d" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="1.5" fill="#af431d" />
  </svg>
);

const TargetIcon2 = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8.5" stroke="#af431d" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3.5" stroke="#af431d" strokeWidth="1.5" />
    <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="#af431d" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const GrowthChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 20H21" stroke="#af431d" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="5" y="14" width="3" height="6" rx="0.5" stroke="#af431d" strokeWidth="1.5" />
    <rect x="10.5" y="10" width="3" height="10" rx="0.5" stroke="#af431d" strokeWidth="1.5" />
    <rect x="16" y="6" width="3" height="14" rx="0.5" stroke="#af431d" strokeWidth="1.5" fill="#af431d" fillOpacity="0.15" />
    <path d="M6 10L12 4L19 7" stroke="#af431d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FoodBusinessIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#af431d" strokeWidth="1.5" strokeDasharray="3 3" />
    <path d="M7 13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13H7Z" stroke="#af431d" strokeWidth="1.5" />
    <path d="M12 6V10M9 8V10M15 8V10" stroke="#af431d" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const bottomHighlights = [
  { icon: <TargetIcon1 />, title: 'Independent Perspective' },
  { icon: <TargetIcon2 />, title: 'Commercial Focus' },
  { icon: <GrowthChartIcon />, title: 'Actionable Intelligence' },
  { icon: <FoodBusinessIcon />, title: 'Built for Modern Restaurants' },
];

const commercialProblems = [
  {
    num: '01',
    area: 'Menu',
    question: 'What should you sell more of?',
    desc: 'Identify true revenue engines and eliminate underperforming dishes dragging down basket sizes. We re-engineer ranges around high-margin demand.',
    link: '/solutions#menu',
  },
  {
    num: '02',
    area: 'Pricing',
    question: 'Where are you undercharging or losing conversion?',
    desc: 'Stop guessing price thresholds. We model channel-specific price elasticity to capture maximum contribution margin without hurting volume.',
    link: '/solutions#pricing',
  },
  {
    num: '03',
    area: 'Visibility',
    question: 'Are you spending enough — or spending blindly?',
    desc: 'Dissect sponsored listings and platform placement. Ensure every marketing pound spent directly translates into profitable, incremental orders.',
    link: '/solutions#channel',
  },
  {
    num: '04',
    area: 'Conversion',
    question: 'Why are customers viewing but not ordering?',
    desc: 'Diagnose where menu viewers bounce. We optimize visual hierarchy, photo briefs, modifier flow, and bundle design to close the order.',
    link: '/solutions#menu',
  },
  {
    num: '05',
    area: 'Profitability',
    question: 'Which orders actually make you money?',
    desc: 'Uncover true net contribution after aggregator commissions, packaging costs, and discounting schemes eat away at gross revenues.',
    link: '/solutions#dashboards',
  },
  {
    num: '06',
    area: 'Growth',
    question: 'What should you do next?',
    desc: 'Move past static retrospectives. Receive clear commercial actions and weekly priorities that compound performance month after month.',
    link: '/contact',
  },
];

const howItWorksSteps = [
  {
    step: '01',
    title: 'Diagnose',
    desc: 'Understand the business and benchmark current performance across delivery platforms and direct ordering channels.',
  },
  {
    step: '02',
    title: 'Identify',
    desc: 'Find gaps, hidden opportunities, and performance leaks where profit is being lost across menu, pricing, and visibility.',
  },
  {
    step: '03',
    title: 'Act',
    desc: 'Translate insights into specific commercial actions with straightforward execution for your ops and marketing teams.',
  },
  {
    step: '04',
    title: 'Grow',
    desc: 'Track impact on true contribution margins and continuously identify the next commercial opportunity.',
  },
];

const metricTags = ['Revenue', 'Orders', 'AOV', 'Conversion', 'Visibility', 'Profitability'];

const clientResults = [
  {
    badge: 'Multi-Unit Casual Brand',
    title: 'Menu Architecture & Bundle Optimization',
    desc: 'Restructured delivery menu architecture and promotional bundling across 35 locations, driving significant incremental order value without increasing kitchen complexity.',
  },
  {
    badge: 'Independent Restaurant Group',
    title: 'Channel Mix & Commission Defense',
    desc: 'Calibrated platform commission spend and introduced targeted direct-ordering incentives, shifting margin back to the business bottom line.',
  },
  {
    badge: 'Fast-Growing Food Brand',
    title: 'Conversion Audit & Pricing Elasticity',
    desc: 'Isolated peak-hour drop-offs and implemented surgical price adjustments, restoring evening basket conversion while lifting overall dish margins.',
  },
];

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      {/* ─── 01: HERO SECTION ─── */}
      <section className={styles.heroSection}>
        {/* Background Landscape with Glowing Road */}
        <div className={styles.heroBackground}>
          <Image
            src="/hero-road.jpg"
            alt="SecondMiles glowing road landscape representing commercial growth intelligence"
            fill
            priority
            className={styles.heroBgImage}
            quality={100}
          />
          <div className={styles.heroGradientOverlay} />
        </div>

        {/* Floating Road Intelligence Path: Data Points → Signals → Action → Growth */}
        <div className={styles.roadCalloutsContainer}>
          {/* Node 1: Data Points (Near horizon) */}
          <div className={`${styles.roadCallout} ${styles.calloutDataPoints}`}>
            <div className={styles.calloutIconWrap}>
              <ReticleIcon />
            </div>
            <div className={styles.calloutText}>
              <span className={styles.calloutStep}>01 · DATA POINTS</span>
              <span className={styles.calloutTitle}>Platform Signals</span>
              <span className={styles.calloutDesc}>Menu, POS & order streams</span>
            </div>
          </div>

          {/* Node 2: Signals (Upper-mid left) */}
          <div className={`${styles.roadCallout} ${styles.calloutSignals}`}>
            <div className={styles.calloutIconWrap}>
              <SignalIcon />
            </div>
            <div className={styles.calloutText}>
              <span className={styles.calloutStep}>02 · SIGNALS</span>
              <span className={styles.calloutTitle}>Margin Leak Detection</span>
              <span className={styles.calloutDesc}>Pricing & conversion gaps</span>
            </div>
          </div>

          {/* Node 3: Action (Mid-right) */}
          <div className={`${styles.roadCallout} ${styles.calloutAction}`}>
            <div className={styles.calloutIconWrap}>
              <PerformanceIcon />
            </div>
            <div className={styles.calloutText}>
              <span className={styles.calloutStep}>03 · ACTION</span>
              <span className={styles.calloutTitle}>Clear Decisions</span>
              <span className={styles.calloutDesc}>Prioritised commercial moves</span>
            </div>
          </div>

          {/* Node 4: Growth (Lower-left) */}
          <div className={`${styles.roadCallout} ${styles.calloutGrowth}`}>
            <div className={styles.calloutIconWrap}>
              <GrowthChartIcon />
            </div>
            <div className={styles.calloutText}>
              <span className={styles.calloutStep}>04 · GROWTH</span>
              <span className={styles.calloutTitle}>Sustainable Profit</span>
              <span className={styles.calloutDesc}>Compounding revenue uplift</span>
            </div>
          </div>

          {/* Glowing Milestone Dots along the road */}
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
            <div className={styles.heroEyebrow}>
              <span className={styles.heroPulseDot} />
              Growth Intelligence for Food Businesses
            </div>

            <h1 className={styles.heroHeading}>
              Move beyond<br />
              <span className={styles.heroHeadingAccent}>the obvious.</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Find the growth your food business is leaving behind.
            </p>

            <p className={styles.heroDesc}>
              SecondMiles helps restaurants turn online-ordering data into sharper decisions, stronger performance and sustainable growth.
            </p>

            <div className={styles.heroCtaWrapper}>
              <Link href="/contact" className={styles.heroBtn}>
                Find My Growth Opportunities
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="#problem" className={styles.heroBtnSecondary}>
                How We Think ↓
              </Link>
            </div>
          </div>

          {/* Bottom Bar: Core Philosophical Highlights */}
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

      {/* ─── 02: THE PROBLEM ─── */}
      <section id="problem" className={styles.problemSection}>
        <div className="container">
          <div className="section-label">The Problem</div>
          <h2 className="section-title">
            Your data already knows where the growth is.<br />
            <span>Most restaurants just aren't looking at it the right way.</span>
          </h2>

          <div className={styles.problemCardGrid}>
            <div className={styles.problemQuoteBox}>
              <p className={styles.problemQuote}>
                "Disjointed aggregator dashboards, promo costs, and clunky spreadsheets give you mountains of reports — but zero clarity on what moves your profit."
              </p>
              <p className={styles.problemQuoteSub}>
                Food operators spend hours looking at yesterday's volume while invisible leaks in menu architecture, discount erosion, and channel fees quietly drain margins.
              </p>
            </div>

            <div className={styles.problemComparison}>
              <div className={styles.comparisonItem}>
                <div className={styles.comparisonIconFail}>✕</div>
                <div className={styles.comparisonContent}>
                  <h4>Generic Dashboard Reporting</h4>
                  <p>"Yesterday sales dropped 4.2% on Platform A." Raw facts without commercial context, leaving teams guessing what went wrong.</p>
                </div>
              </div>

              <div className={styles.comparisonItem}>
                <div className={styles.comparisonIconPass}>✓</div>
                <div className={styles.comparisonContent}>
                  <h4>SecondMiles Growth Intelligence</h4>
                  <p>"Dinner conversion dropped 1.8% due to combo price friction. Adjusting bundle tiering restores £1,400 in weekly contribution."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 03: SECOND MILES PHILOSOPHY ─── */}
      <section className={styles.philosophySection}>
        <div className="container">
          <div className="section-label">Our Philosophy</div>
          <h2 className="section-title">
            The first answer isn't always the best answer.<br />
            <span>We go one step further.</span>
          </h2>
          <p className="section-desc" style={{marginBottom: '40px'}}>
            We connect performance, customer behaviour and commercial decisions to uncover the high-impact opportunities others miss.
          </p>

          <div className={styles.philosophyBanner}>
            <div className={styles.philosophyStatement}>
              We don't just report performance. <span>We challenge it.</span>
            </div>
            <Link href="/about" className="btn-outline" style={{padding: '10px 20px', fontSize: '0.85rem'}}>
              Read Our Story →
            </Link>
          </div>

          <div className="grid-3">
            <div className={styles.pillarCard}>
              <div className="icon-wrap" style={{width: '48px', height: '48px'}}>
                <TargetIcon1 />
              </div>
              <h3 className={styles.pillarTitle}>Independent Perspective</h3>
              <p className={styles.pillarDesc}>
                We look at your business without platform bias. Aggregators want you to spend on ad slots; third parties push their own tools. Our only stakeholder is your commercial profitability.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className="icon-wrap" style={{width: '48px', height: '48px'}}>
                <TargetIcon2 />
              </div>
              <h3 className={styles.pillarTitle}>Commercial Focus</h3>
              <p className={styles.pillarDesc}>
                Every recommendation connects directly to revenue, efficiency or profitability. We don't produce decorative reports or vanity metrics. Every insight must prove its commercial value.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className="icon-wrap" style={{width: '48px', height: '48px'}}>
                <GrowthChartIcon />
              </div>
              <h3 className={styles.pillarTitle}>Actionable Intelligence</h3>
              <p className={styles.pillarDesc}>
                No vanity dashboards. Every insight should lead to a decision. We translate complex multi-platform patterns into immediate actions your operational team can execute this week.
              </p>
            </div>
          </div>

          {/* Strategic Modern Restaurant Callout */}
          <div className={styles.strategicCallout}>
            <div className="icon-wrap" style={{width: '64px', height: '64px', flexShrink: 0}}>
              <FoodBusinessIcon />
            </div>
            <div className={styles.strategicCalloutText}>
              <h3>Built for the modern restaurant business.</h3>
              <p>
                Your menu, pricing, promotions, visibility, customer behaviour and profitability are connected. SecondMiles brings those signals together to identify where growth is being won — and where it is being lost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 04: WHERE WE FIND GROWTH (6 COMMERCIAL PROBLEMS) ─── */}
      <section className="section" style={{background: '#FFFFFF'}}>
        <div className="container">
          <div className="section-label">Commercial Problem Solvers</div>
          <h2 className="section-title">
            Where we find your <span>next growth</span>
          </h2>
          <p className="section-desc">
            We don't talk in vague consultancy abstractions. We solve the six fundamental commercial friction points where food brands leave money behind.
          </p>

          <div className={styles.growthGrid}>
            {commercialProblems.map((item) => (
              <div key={item.num} className={styles.growthCard}>
                <span className={styles.growthCardNumber}>{item.num} — {item.area}</span>
                <h3 className={styles.growthCardQuestion}>{item.question}</h3>
                <p className={styles.growthCardDesc}>{item.desc}</p>
                <Link href={item.link} className={styles.growthCardLink}>
                  Explore {item.area} Strategy →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 05: DAILY PULSE (SAMPLE GROWTH INTELLIGENCE MOCKUP) ─── */}
      <section className={styles.pulseSection}>
        <div className="container">
          <div className={styles.pulseContainer}>
            <div>
              <div className="section-label">Growth Intelligence</div>
              <h2 className="section-title">
                Know what happened.<br />
                <span>Know what to do next.</span>
              </h2>
              <p className="section-desc" style={{marginBottom: '28px'}}>
                Most operators drown in raw data without knowing what action to take on Monday morning. SecondMiles synthesizes daily activity into a clear pulse of performance shifts and prioritized moves.
              </p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                  <div style={{color: '#af431d', fontWeight: 800}}>✓</div>
                  <span style={{color: '#1C1917', fontSize: '0.92rem'}}>Highlights what changed, not just static volumes</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                  <div style={{color: '#af431d', fontWeight: 800}}>✓</div>
                  <span style={{color: '#1C1917', fontSize: '0.92rem'}}>Flags margin leaks and demand risks before they compound</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                  <div style={{color: '#af431d', fontWeight: 800}}>✓</div>
                  <span style={{color: '#1C1917', fontSize: '0.92rem'}}>Delivers direct commercial recommendations your team can execute</span>
                </div>
              </div>
              <Link href="/contact" className="btn-primary">
                Request a Growth Audit →
              </Link>
            </div>

            {/* Illustrative Sample Daily Pulse Component */}
            <div className={styles.pulseMockup}>
              <div className={styles.mockupTopBar}>
                <div className={styles.mockupBadge}>
                  <span className={styles.heroPulseDot} />
                  SAMPLE DAILY PULSE
                </div>
                <div className={styles.mockupStatus}>Yesterday's Performance Overview</div>
              </div>

              {/* Metrics Strip */}
              <div className={styles.metricsStrip}>
                <div className={styles.metricTile}>
                  <div className={styles.metricTileLabel}>Revenue</div>
                  <div className={styles.metricTileVal}>↑ 12.4%</div>
                </div>
                <div className={styles.metricTile}>
                  <div className={styles.metricTileLabel}>Orders</div>
                  <div className={styles.metricTileVal}>↑ 8.7%</div>
                </div>
                <div className={styles.metricTile}>
                  <div className={styles.metricTileLabel}>AOV</div>
                  <div className={styles.metricTileVal}>↑ 3.4%</div>
                </div>
                <div className={styles.metricTile}>
                  <div className={styles.metricTileLabel}>Ads ROI</div>
                  <div className={styles.metricTileVal}>↓ 6.2%</div>
                </div>
                <div className={styles.metricTile}>
                  <div className={styles.metricTileLabel}>Conversion</div>
                  <div className={styles.metricTileVal}>↑ 2.1%</div>
                </div>
              </div>

              {/* Action Stack */}
              <div className={styles.pulseActionStack}>
                <div className={styles.actionCard}>
                  <span className={styles.actionTag}>What Changed</span>
                  <div className={styles.actionText}>
                    <strong>Chicken combos drove incremental revenue.</strong> High uptake in lunch meal bundles expanded basket size by £2.80 per ticket.
                  </div>
                </div>

                <div className={styles.actionCard}>
                  <span className={styles.actionTagOutline}>Needs Attention</span>
                  <div className={styles.actionText}>
                    <strong>Dinner conversion dropped.</strong> View-to-order rate declined across the 7:30 PM – 9:00 PM slot despite steady search impressions.
                  </div>
                </div>

                <div className={styles.actionCard}>
                  <span className={styles.actionTag}>Recommended Action</span>
                  <div className={styles.actionText}>
                    <strong>Review dinner pricing + promotional structure.</strong> Adjust minimum bundle spend thresholds and recalibrate evening featured slots.
                  </div>
                </div>
              </div>

              <div className={styles.mockupDisclaimer}>
                * Illustrative sample. SecondMiles models multi-channel signals to deliver actionable commercial clarity.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 06: HOW IT WORKS ─── */}
      <section className={styles.howSection}>
        <div className="container">
          <div style={{textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px'}}>
            <div className="section-label">The Process</div>
            <h2 className="section-title">
              From data to <span>decisions.</span>
            </h2>
            <p className="section-desc" style={{margin: '0 auto'}}>
              How SecondMiles turns complex, scattered online-ordering data into decisive commercial action.
            </p>
          </div>

          <div className={styles.howStepsGrid}>
            {howItWorksSteps.map((s) => (
              <div key={s.step} className={styles.howStepCard}>
                <div className={styles.howStepNumber}>{s.step}</div>
                <h3 className={styles.howStepTitle}>{s.title}</h3>
                <p className={styles.howStepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 07: PROOF (METRICS THAT ACTUALLY MATTER) ─── */}
      <section className={styles.proofSection}>
        <div className="container">
          <div style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto'}}>
            <div className="section-label">Defensible Credibility</div>
            <h2 className="section-title">
              Built around the metrics that <span>actually matter.</span>
            </h2>
            <p className="section-desc" style={{margin: '0 auto'}}>
              We don't hide behind vanity figures or generic statistics. Our work is anchored to the six core numbers that determine food business profitability.
            </p>
          </div>

          {/* Metric Tags Cloud */}
          <div className={styles.metricsPillCloud}>
            {metricTags.map((tag) => (
              <div key={tag} className={styles.metricPill}>
                <span className={styles.metricPillDot} />
                <span>{tag}</span>
              </div>
            ))}
          </div>

          {/* Case Teasers */}
          <div className={styles.caseTeaserGrid}>
            {clientResults.map((c, i) => (
              <div key={i} className={styles.caseTeaserCard}>
                <span className={styles.caseClientBadge}>{c.badge}</span>
                <h3 className={styles.caseTeaserTitle}>{c.title}</h3>
                <p className={styles.caseTeaserDesc}>{c.desc}</p>
                <Link href="/resources#cases" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#af431d', fontSize: '0.86rem', fontWeight: '600', marginTop: '16px'}}>
                  View Case Study →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 08: FINAL CTA ─── */}
      <section className={styles.finalCtaSection}>
        <div className="container">
          <div className={styles.ctaContainer}>
            <div className={styles.ctaPill}>Find Your Second Mile</div>
            <h2 className={styles.ctaHeading}>
              Let's find your <span>second mile.</span>
            </h2>
            <p className={styles.ctaSubhead}>
              30 minutes. Your business. No sales pitch.
            </p>
            <p className={styles.ctaText}>
              Let our team review your online-ordering dynamics, benchmark your current menu performance, and highlight the exact growth opportunities you are leaving behind.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn-primary">
                Find My Growth Opportunities →
              </Link>
              <Link href="/what-we-do" className="btn-outline">
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
