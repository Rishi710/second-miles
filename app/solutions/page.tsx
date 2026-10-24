import Link from 'next/link';
import styles from './solutions.module.css';

const packages = [
  {
    id: 'menu',
    tone: 'ember',
    flag: 'Most people start here',
    name: 'Menu Rebuild',
    shape: 'One-off · 3 to 4 weeks',
    pitch:
      'We go through your whole online menu, work out what each dish really earns, and hand back a shorter, sharper list built around the ones that pay.',
    gets: [
      'Every dish ranked by real profit, not sales',
      'New combos built from prep you already do',
      'A cut list, with the reason for each cut',
      'Photo and description brief for the top sellers',
      'A kitchen sanity check before anything goes live',
      'A follow-up 90 days later to see what it was worth',
    ],
    featured: true,
  },
  {
    id: 'pricing',
    tone: 'saffron',
    flag: 'Quickest payback',
    name: 'Pricing Check',
    shape: 'One-off · 2 weeks',
    pitch:
      'The fastest money on this page. We find the price point where people stop ordering, item by item and platform by platform, and set you just under it.',
    gets: [
      'Price ceiling for each item, on each platform',
      'What the shops near you charge for the same thing',
      'Add-on and extras pricing, usually the easiest win',
      'Which discounts earn their keep and which to kill',
    ],
    featured: false,
  },
  {
    id: 'channel',
    tone: 'sky',
    flag: 'Stop the bleed',
    name: 'Ads & Channel Review',
    shape: 'One-off or ongoing',
    pitch:
      'We separate the orders you paid for from the orders you were always going to get, then move the budget where it actually changes the number.',
    gets: [
      'An honest read on whether your ad spend works',
      'How to rank better without paying for it',
      'A plan to move regulars to direct ordering',
      'Commission negotiation backed by your own figures',
    ],
    featured: false,
  },
  {
    id: 'dashboards',
    tone: 'basil',
    flag: 'Ongoing',
    name: 'The Weekly Pass',
    shape: 'Monthly · rolling, cancel anytime',
    pitch:
      'A short note every week: what moved, what needs watching, and the two or three things to do about it. Plus a person to call who is on your side.',
    gets: [
      'The weekly Pass, written for a busy manager',
      'Alerts when margin or conversion starts slipping',
      'A running log of changes and what each was worth',
      'A monthly call with one of the founders',
      'Nothing owed to any platform. Ever.',
    ],
    featured: false,
  },
];

const faqs = [
  {
    q: 'How are you different from an agency?',
    a: 'Agencies usually make money when you spend more on ads. We don’t sell ads, software or placement, so we have no reason to tell you to spend. We get paid by you, for finding money you already had.',
  },
  {
    q: 'What do you need from us to start?',
    a: 'Read-only access to your delivery platform accounts and, if you have one, your till. That is it. Nothing changes in the kitchen and nobody has to fill in a spreadsheet for us.',
  },
  {
    q: 'We only have one site. Is that too small?',
    a: 'No. Single sites often have the most to gain, because nobody has ever sat down and looked properly. The work is the same, just quicker.',
  },
  {
    q: 'How soon do we see something?',
    a: 'You get findings on the first call, for free. Paid work usually produces its first changes within two weeks, and most clients can see the difference in the month after that.',
  },
  {
    q: 'What does it cost?',
    a: 'It depends on how many sites and platforms you run. We quote a flat fee after the first call, in writing, with no retainer trap. If we cannot see enough upside to cover it, we will tell you.',
  },
  {
    q: 'Do we have to sign a long contract?',
    a: 'No. One-off work is one-off. The Weekly Pass is monthly and you can stop whenever you like.',
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="kicker">How we help</span>
          <h1 className="h-xl">
            Pick a problem.<br />
            We&apos;ll <span className="mark">go and get it.</span>
          </h1>
          <p className="lead">
            Four ways to work with us. Three are short jobs with a clear end.
            One keeps going for as long as it is earning its keep.
          </p>
          <div className="page-head-actions">
            <Link href="/contact" className="btn btn-primary">
              Book a free check <Arrow />
            </Link>
            <a href="#faq" className="btn btn-ghost">
              Read the questions first
            </a>
          </div>
        </div>
      </section>

      <section className="section band-cream band-dots">
        <div className="container">
          <div className={styles.grid}>
            {packages.map((p) => (
              <article
                key={p.id}
                id={p.id}
                className={`${styles.card} ${styles[p.tone]} ${p.featured ? styles.featured : ''}`}
              >
                <span className={styles.flag}>{p.flag}</span>
                <h2 className={styles.name}>{p.name}</h2>
                <div className={styles.shape}>{p.shape}</div>
                <p className={styles.pitch}>{p.pitch}</p>

                <div className="perf" />

                <div className={styles.getsHead}>What you get</div>
                <ul className={styles.gets}>
                  {p.gets.map((g) => (
                    <li key={g}>
                      <span className={styles.dot} />
                      {g}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`btn ${p.featured ? 'btn-primary' : ''} ${styles.cardBtn}`}
                >
                  Talk about this <Arrow />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* what it's like */}
      <section className="section-tight band-ink">
        <div className="container">
          <div className={styles.flow}>
            <div className={styles.flowCopy}>
              <span className="kicker on-dark">What it&apos;s like</span>
              <h2 className="h-md">Four steps from hello to money.</h2>
            </div>
            <ol className={styles.flowSteps}>
              {[
                ['Call', 'Thirty free minutes. We look at your numbers together and tell you what stands out.'],
                ['Quote', 'A flat price and a scope, in writing, within two days. No retainer trap.'],
                ['Work', 'We do the digging. You carry on cooking. We come back with a short list.'],
                ['Check', 'We measure whether the changes worked, and say so either way.'],
              ].map(([t, d], i) => (
                <li key={t}>
                  <span className={styles.flowNum}>{i + 1}</span>
                  <div>
                    <strong>{t}</strong>
                    <p>{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="section band-paper" id="faq">
        <div className="container">
          <div className={styles.faqWrap}>
            <div className={styles.faqSide}>
              <span className="kicker">Questions</span>
              <h2 className="h-lg">
                Things people<br />ask us first
              </h2>
              <p className="lead" style={{ marginTop: 16 }}>
                Still stuck on something? Ask us directly — we answer the
                awkward ones too.
              </p>
              <Link href="/contact" className="btn btn-saffron" style={{ marginTop: 24 }}>
                Ask a question <Arrow />
              </Link>
            </div>

            <div className={styles.faqList}>
              {faqs.map((f, i) => (
                <details key={f.q} className={styles.faq} open={i === 0}>
                  <summary>
                    <span>{f.q}</span>
                    <span className={styles.faqIcon} aria-hidden="true" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight band-saffron">
        <div className="container">
          <div className={styles.endCta}>
            <h2 className="h-md" style={{ maxWidth: '18ch' }}>
              Not sure which one you need?
            </h2>
            <p>
              Neither are most people on the first call. Tell us what is
              bothering you and we will point at the right one — even if it is
              the cheapest.
            </p>
            <Link href="/contact" className="btn btn-ink">
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
