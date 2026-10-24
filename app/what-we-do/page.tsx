import Link from 'next/link';
import styles from './whatwedo.module.css';

const services = [
  {
    id: 'menu',
    n: '01',
    tone: 'ember',
    area: 'Menu',
    q: 'What should you sell more of?',
    line: 'A handful of dishes pay for the whole kitchen.',
    body: 'Most menus grew one dish at a time and nobody ever took anything away. The result is a long list where a few items carry everything and the rest slow the kitchen down. We work out what each dish really earns you, then rebuild the menu around the ones that pay.',
    does: [
      'Rank every dish by what it actually earns, not what it sells',
      'Build combos people want, from food you already prep',
      'Cut or hide the items that only add waiting time',
      'Check the kitchen can cope before anything goes live',
    ],
  },
  {
    id: 'pricing',
    n: '02',
    tone: 'saffron',
    area: 'Pricing',
    q: 'Are your prices right?',
    line: 'Price is the fastest change you can make. Also the easiest to get wrong.',
    body: 'Some of your prices have not moved in two years. Others crept up and quietly cost you orders. There is a point on every item where people stop saying yes. We find that point for each dish, on each platform, and set the price just under it.',
    does: [
      'Find the price where people stop ordering, item by item',
      'Set different prices per platform, so commission stops eating you',
      'Price add-ons and extras properly — that is free margin',
      'Work out which discounts pay for themselves and which do not',
    ],
  },
  {
    id: 'visibility',
    n: '03',
    tone: 'sky',
    area: 'Ads & visibility',
    q: 'Is your ad spend doing anything?',
    line: 'Platforms will always tell you to spend more.',
    body: 'Sponsored slots and deep discounts bring orders. The question nobody asks is how many of those orders would have come anyway. We separate the orders you bought from the orders you already had, and move the money to where it genuinely adds something.',
    does: [
      'Test whether paid orders are actually new orders',
      'Improve how you rank without paying for it',
      'Build up direct ordering so you keep the whole bill',
      'Push back on commission with numbers, not hope',
    ],
  },
  {
    id: 'conversion',
    n: '04',
    tone: 'plum',
    area: 'Conversion',
    q: 'Why do people look but not order?',
    line: 'Getting seen is easy. Getting chosen is the hard part.',
    body: 'Thousands of people open your page every week. A small share of them order. The reason is usually something small and fixable — a photo that does not sell the dish, a confusing options screen, a delivery fee that shows up too late. We find the exact step they leave at.',
    does: [
      'Follow the drop-off from first look to paid order',
      'Rewrite dish names and descriptions so they sell',
      'Brief the photos that make people hungry',
      'Clear the friction at checkout — fees, minimums, options',
    ],
  },
  {
    id: 'profitability',
    n: '05',
    tone: 'basil',
    area: 'Profit',
    q: 'Which orders actually make you money?',
    line: 'Big revenue and thin profit live happily side by side.',
    body: 'A busy Friday feels like a good Friday. But after commission, packaging, refunds and the promo you were running, some of those orders earned you almost nothing. We work out the real profit on each order type so you know what to chase and what to stop.',
    does: [
      'Show real profit per order, after everything is taken out',
      'Catch refunds, chargebacks and errors that quietly add up',
      'Put a real cost on packaging and delivery',
      'Point you at the hours and channels worth staffing for',
    ],
  },
  {
    id: 'growth',
    n: '06',
    tone: 'ink',
    area: 'Next steps',
    q: 'What do we do on Monday?',
    line: 'Numbers without a next step are just noise.',
    body: 'Every week you get the Pass: what moved, what needs watching, and the two or three things to do about it each with a figure attached. Short enough to read standing up. Then we check whether it worked and adjust.',
    does: [
      'A weekly note with what changed and what to do',
      'An alert when margin or conversion starts slipping',
      'A record of every change and what it was worth',
      'A real person to call, who has no deal with the platforms',
    ],
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="kicker">What we fix</span>
          <h1 className="h-xl">
            Six questions<br />
            worth <span className="mark">real money.</span>
          </h1>
          <p className="lead">
            No frameworks, no maturity models. These are the six places a food
            business loses money online and what we actually do about each
            one.
          </p>
          <div className="page-head-actions">
            <Link href="/contact" className="btn btn-primary">
              Book a free growth check <Arrow />
            </Link>
            <Link href="/solutions" className="btn btn-ghost">
              See how we package it
            </Link>
          </div>
        </div>
      </section>

      <nav className={styles.jump} aria-label="Jump to a section">
        <div className="container">
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={`${styles.jumpLink} ${styles[s.tone]}`}>
                  <span>{s.n}</span> {s.area}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="section band-cream band-dots">
        <div className="container">
          <div className={styles.list}>
            {services.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className={`${styles.row} ${i % 2 === 1 ? styles.flip : ''}`}
              >
                <div className={styles.copy}>
                  <div className={styles.tagRow}>
                    <span className={`${styles.num} ${styles[s.tone]}`}>{s.n}</span>
                    <span className={styles.area}>{s.area}</span>
                  </div>
                  <h2 className="h-md">{s.q}</h2>
                  <p className={`${styles.line} ${styles[s.tone]}`}>{s.line}</p>
                  <p className={styles.body}>{s.body}</p>
                  <Link href="/contact" className="link-arrow">
                    Talk to us about this <Arrow />
                  </Link>
                </div>

                <div className={`${styles.card} ${styles[s.tone]}`}>
                  <div className={styles.cardHead}>What we actually do</div>
                  <ul>
                    {s.does.map((d) => (
                      <li key={d}>
                        <span className={styles.check}>
                          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                            <path
                              d="M3 8.5L6.2 11.5L13 4.8"
                              stroke="currentColor"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight band-ink">
        <div className="container">
          <div className={styles.end}>
            <div>
              <span className="kicker on-dark">Not sure where to start?</span>
              <h2 className="h-md">
                Most kitchens start with <span className="mark mark-ember mark-light">menu and pricing.</span>
              </h2>
              <p className="lead on-dark" style={{ marginTop: 14 }}>
                They are the quickest to change and the quickest to show up in
                the bank. We will tell you on the first call which one is worth
                more to you.
              </p>
            </div>
            <Link href="/contact" className="btn btn-saffron">
              Book the free check <Arrow />
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
