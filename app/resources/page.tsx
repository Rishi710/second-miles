import Link from 'next/link';
import styles from './resources.module.css';

const articles = [
  {
    tone: 'ember',
    topic: 'Menu',
    title: 'Your delivery menu is too long. Here is how to prove it.',
    blurb:
      'Across the kitchens we look at, longer menus almost always convert worse. Too much choice makes people close the app. A simple way to work out what to cut.',
    read: '5 min',
  },
  {
    tone: 'saffron',
    topic: 'Pricing',
    title: 'What a 20% discount really costs you',
    blurb:
      'Discounts look free because the platform shows you the extra orders. They never show you the orders you would have got anyway. The arithmetic, with real numbers.',
    read: '6 min',
  },
  {
    tone: 'sky',
    topic: 'Channels',
    title: 'Platform or direct? The honest answer is both.',
    blurb:
      'Apps bring you people who have never heard of you. Direct keeps the money. Where to draw the line, and how to move regulars across without losing them.',
    read: '7 min',
  },
  {
    tone: 'basil',
    topic: 'Profit',
    title: 'Why your busiest night might be your worst one',
    blurb:
      'Take out commission, packaging, the promo and the two refunds, and a packed Friday can earn less than a quiet Tuesday. How to check yours.',
    read: '5 min',
  },
  {
    tone: 'plum',
    topic: 'Conversion',
    title: 'Six photos that are costing you orders',
    blurb:
      'People buy the picture, not the dish. The most common photo mistakes on delivery apps, and what to shoot instead — no studio needed.',
    read: '4 min',
  },
  {
    tone: 'ink',
    topic: 'Operations',
    title: 'The Monday list: how to act on your numbers in 20 minutes',
    blurb:
      'A simple weekly routine any manager can run without software. What to look at, in what order, and what to safely ignore.',
    read: '6 min',
  },
];

const cases = [
  {
    tone: 'ember',
    figure: '+23%',
    metric: 'bigger average order',
    who: 'Casual dining group · 35 sites',
    problem:
      'A 140-item delivery menu that had never been cut. Baskets were small and the kitchen was slow at peak.',
    did: 'Ranked every dish by real profit, cut 40 of them, and built six combos out of prep that was already happening.',
    out: 'Baskets up almost a quarter. Ticket times down. Nobody had to learn a new dish.',
  },
  {
    tone: 'basil',
    figure: '−18%',
    metric: 'less lost to commission',
    who: 'Regional fast-casual brand',
    problem:
      'Heavy promo spend on two platforms, with no way of knowing whether it was buying anything.',
    did: 'Tested which promos brought genuinely new orders, dropped the rest, and gave regulars a reason to order direct.',
    out: 'Same order count, noticeably more money kept per order.',
  },
  {
    tone: 'sky',
    figure: '+31%',
    metric: 'more views turning into orders',
    who: 'Independent pizza & burger group',
    problem:
      'Plenty of people looking at the page between 7 and 9pm. Far too few of them ordering.',
    did: 'New photos for the top 20 items, rewritten descriptions, and a much simpler add-ons screen.',
    out: 'The evening drop-off went away. Same traffic, a third more orders.',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="kicker">Reading & results</span>
          <h1 className="h-xl">
            Useful things,<br />
            <span className="mark">plainly put.</span>
          </h1>
          <p className="lead">
            Short pieces on menus, prices and platform economics — the same
            thinking we use on client work. Plus what actually changed for
            three kitchens.
          </p>
        </div>
      </section>

      {/* articles */}
      <section className="section band-cream band-dots" id="insights">
        <div className="container">
          <div className={styles.head}>
            <div>
              <span className="kicker">The reading room</span>
              <h2 className="h-lg">Worth ten minutes</h2>
            </div>
            <p className="lead">
              No gated PDFs, no &ldquo;book a demo to continue&rdquo;. Read it,
              use it, argue with it.
            </p>
          </div>

          <div className={styles.grid}>
            {articles.map((a) => (
              <article key={a.title} className={`${styles.article} ${styles[a.tone]} pop-hover`}>
                <div className={styles.articleTop}>
                  <span className={styles.topic}>{a.topic}</span>
                  <span className={styles.read}>{a.read}</span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.blurb}</p>
                <Link href="/contact" className={styles.articleLink}>
                  Ask us about this <Arrow />
                </Link>
              </article>
            ))}
          </div>

          <p className={styles.note}>
            Writing in progress — want one of these early? <Link href="/contact">Drop us a line.</Link>
          </p>
        </div>
      </section>

      {/* cases */}
      <section className="section band-paper" id="cases">
        <div className="container">
          <div className="center-col" style={{ marginBottom: 46 }}>
            <span className="kicker">Real results</span>
            <h2 className="h-lg">
              Three kitchens, <span className="mark mark-basil mark-light">three fixes</span>
            </h2>
            <p className="lead" style={{ marginTop: 16 }}>
              Names withheld because the numbers are theirs. The work is
              described exactly as it happened.
            </p>
          </div>

          <div className={styles.cases}>
            {cases.map((c) => (
              <article key={c.figure} className={`${styles.case} ${styles[c.tone]}`}>
                <div className={styles.caseFig}>
                  <strong>{c.figure}</strong>
                  <span>{c.metric}</span>
                </div>

                <div className={styles.caseBody}>
                  <div className={styles.caseWho}>{c.who}</div>
                  <dl>
                    <div>
                      <dt>The problem</dt>
                      <dd>{c.problem}</dd>
                    </div>
                    <div>
                      <dt>What we did</dt>
                      <dd>{c.did}</dd>
                    </div>
                    <div>
                      <dt>What happened</dt>
                      <dd>{c.out}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight band-ink">
        <div className="container">
          <div className={styles.cta}>
            <div>
              <h2 className="h-md">Want your numbers in this list?</h2>
              <p className="lead on-dark" style={{ marginTop: 12 }}>
                Start with the free half hour. We will tell you straight away
                whether there is anything here worth chasing.
              </p>
            </div>
            <Link href="/contact" className="btn btn-saffron">
              Book a free check <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Arrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
