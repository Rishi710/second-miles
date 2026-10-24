import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.css';

/* ---------------- data ---------------- */

const fixes = [
  {
    n: '01',
    tone: 'ember',
    area: 'Menu',
    q: 'What should you sell more of?',
    a: 'A few dishes pay for everything. The rest just add work. We find out which is which, then rebuild the menu around the winners.',
    href: '/what-we-do#menu',
  },
  {
    n: '02',
    tone: 'saffron',
    area: 'Pricing',
    q: 'Are your prices right?',
    a: 'Some items are too cheap. Some have crept too high and now lose orders. We test where each price should sit, by platform and by hour.',
    href: '/what-we-do#pricing',
  },
  {
    n: '03',
    tone: 'sky',
    area: 'Ads',
    q: 'Is your ad spend doing anything?',
    a: 'Platforms are happy to take your money. We check which orders you would have won anyway, and move the budget somewhere it works.',
    href: '/what-we-do#visibility',
  },
  {
    n: '04',
    tone: 'plum',
    area: 'Conversion',
    q: 'Why do people look but not order?',
    a: 'Thousands see your page. Only some order. We find the exact step where they drop off a photo, a price, a delivery fee and fix it.',
    href: '/what-we-do#conversion',
  },
  {
    n: '05',
    tone: 'basil',
    area: 'Profit',
    q: 'Which orders actually make money?',
    a: 'After commission, packaging and discounts, some orders earn you nothing. We show you the real number per order and where it leaks.',
    href: '/what-we-do#profitability',
  },
  {
    n: '06',
    tone: 'ink',
    area: 'Next steps',
    q: 'What do we do on Monday?',
    a: 'Every week you get a short list. Three or four moves, in order of what they are worth. No homework, no 60-slide deck.',
    href: '/what-we-do#growth',
  },
];

const steps = [
  {
    n: '1',
    title: 'We look',
    desc: 'We pull your numbers off every platform Zomato, Swiggy, Uber Eats, your own site and till into one place. Nothing changes in your kitchen.',
    tone: 'sky',
  },
  {
    n: '2',
    title: 'We find',
    desc: 'We spot what moved, what is quietly leaking money, and what is worth chasing first. Then we size it in rupees, not percentages.',
    tone: 'saffron',
  },
  {
    n: '3',
    title: 'You act',
    desc: 'You get a short, ranked list of changes with the reason behind each one. We stay on to check whether they actually worked.',
    tone: 'basil',
  },
];

const results = [
  {
    tone: 'ember',
    figure: '+23%',
    metric: 'bigger average order',
    who: 'Casual dining group, 35 sites',
    what: 'We rebuilt the delivery menu around six proven combos and dropped the clutter. Same kitchen, bigger baskets.',
  },
  {
    tone: 'basil',
    figure: '−18%',
    metric: 'less lost to commission',
    who: 'Regional fast-casual brand',
    what: 'We cut the promos that were paying for orders they already had, and moved regulars to direct ordering.',
  },
  {
    tone: 'sky',
    figure: '+31%',
    metric: 'more views turning into orders',
    who: 'Independent pizza & burger group',
    what: 'New photos, clearer descriptions, simpler add-ons. The 8pm drop-off disappeared.',
  },
];

const ticker = [
  'Menu',
  'Pricing',
  'Ads & visibility',
  'Conversion',
  'Commission',
  'Packaging cost',
  'Dayparts',
  'Repeat orders',
  'Basket size',
  'Real profit per order',
];

/* ---------------- page ---------------- */

export default function Home() {
  return (
    <>
      {/* ───────── 01 · HERO ───────── */}
      <section className={styles.hero}>
        <div className={`container container-wide ${styles.heroGrid}`}>
          <div className={`${styles.heroCopy} rise`}>
            <span className={styles.heroBadge}>
              <span className="live-dot" />
              Growth people for food businesses
            </span>

            <h1 className="h-xl">
              Find the money<br />
              hiding in your <span className="mark">menu.</span>
            </h1>

            <p className={`lead ${styles.heroLead}`}>
              You already have the data. Every platform sends you a report. What
              nobody sends you is the answer. That is our job — we read your
              numbers and tell you, in plain English, what to change this week.
            </p>

            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn btn-primary">
                Book a free growth check
                <Arrow />
              </Link>
              <Link href="#how" className="btn btn-ghost">
                See how it works
              </Link>
            </div>

            <ul className={styles.heroProof}>
              <li><Tick /> Free 30-minute first look</li>
              <li><Tick /> No platform kickbacks, ever</li>
              <li><Tick /> Plain answers, not dashboards</li>
            </ul>
          </div>

          {/* The pass — a kitchen docket of this week's answers */}
          <div className={`${styles.pass} rise rise-2`}>
            <div className={styles.passHead}>
              <span className={styles.passTitle}>THE PASS</span>
              <span className={styles.passWeek}>WEEK 42</span>
            </div>

            <div className={styles.passStats}>
              <Stat label="Revenue" value="+12.4%" tone="up" />
              <Stat label="Orders" value="+8.7%" tone="up" />
              <Stat label="Basket" value="+3.4%" tone="up" />
              <Stat label="Ad return" value="−6.2%" tone="down" />
            </div>

            <div className="perf" />

            <div className={styles.passNotes}>
              <PassNote tone="basil" tag="Working">
                <strong>Chicken combos are carrying lunch.</strong> They added
                ₹60 to the average ticket. Push them harder.
              </PassNote>
              <PassNote tone="ember" tag="Watch">
                <strong>Dinner orders are slipping.</strong> Same number of
                people looking between 7:30 and 9. Fewer buying.
              </PassNote>
              <PassNote tone="saffron" tag="Do this">
                <strong>Drop the ₹499 bundle to ₹449.</strong> It sits just above
                where people stop. Worth roughly ₹1.2 lakh a week.
              </PassNote>
            </div>

            <p className={styles.passFoot}>
              Example only — your Pass is built from your own numbers.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── ticker ───────── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            {ticker.map((t) => (
              <span key={t}>{t} ✦</span>
            ))}
          </span>
          <span>
            {ticker.map((t) => (
              <span key={`${t}-2`}>{t} ✦</span>
            ))}
          </span>
        </div>
      </div>

      {/* ───────── 02 · THE PROBLEM ───────── */}
      <section className="section band-cream band-dots">
        <div className="container">
          <div className={styles.probHead}>
            <div>
              <span className="kicker">The problem</span>
              <h2 className="h-lg">
                Reports everywhere.<br />
                <span className="swish">Answers nowhere.</span>
              </h2>
            </div>
            <p className="lead">
              Most owners open four dashboards before breakfast and still can&apos;t
              say what to change. The numbers describe yesterday. They never
              tell you what to do about it.
            </p>
          </div>

          <div className={styles.compare}>
            <div className={`${styles.compareCard} ${styles.compareBad}`}>
              <span className="chip">What you get now</span>
              <p className={styles.compareQuote}>
                &ldquo;Sales were down 4.2% on Platform A yesterday.&rdquo;
              </p>
              <p className={styles.compareNote}>
                True, and completely useless. Down why? Down where? Worth
                worrying about, or just a rainy Tuesday?
              </p>
            </div>

            <div className={styles.compareVs}>vs</div>

            <div className={`${styles.compareCard} ${styles.compareGood}`}>
              <span className="chip chip-basil">What we send</span>
              <p className={styles.compareQuote}>
                &ldquo;Dinner is down because the combo sits ₹50 above the price
                people stop at. Move it and you get about ₹1.2 lakh a week back.&rdquo;
              </p>
              <p className={styles.compareNote}>
                One sentence. One number. One thing to go and do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 03 · SIX THINGS WE FIX ───────── */}
      <section className="section band-paper" id="fix">
        <div className="container">
          <div className={styles.fixHead}>
            <div>
              <span className="kicker">What we fix</span>
              <h2 className="h-lg">
                Six questions.<br />Six places money goes missing.
              </h2>
            </div>
            <p className="lead">
              We don&apos;t do strategy decks. We work on the six things that
              decide whether a food business makes money online.
            </p>
          </div>

          <div className={styles.fixGrid}>
            {fixes.map((f) => (
              <Link
                key={f.n}
                href={f.href}
                className={`${styles.fixCard} ${styles[f.tone]} pop-hover`}
              >
                <div className={styles.fixTop}>
                  <span className={styles.fixNum}>{f.n}</span>
                  <span className={styles.fixArea}>{f.area}</span>
                </div>
                <h3 className={styles.fixQ}>{f.q}</h3>
                <p className={styles.fixA}>{f.a}</p>
                <span className={styles.fixLink}>
                  Read more <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 04 · HOW IT WORKS ───────── */}
      <section className="section band-ink" id="how">
        <div className="container">
          <div className="center-col">
            <span className="kicker on-dark">How it works</span>
            <h2 className="h-lg">
              Three steps. <span className="mark mark-ember mark-light">No faff.</span>
            </h2>
            <p className="lead on-dark" style={{ marginTop: 18 }}>
              From messy platform exports to a list you can act on before the
              lunch rush.
            </p>
          </div>

          <div className={styles.steps}>
            {steps.map((s, i) => (
              <div key={s.n} className={`${styles.step} ${styles[s.tone]}`}>
                <div className={styles.stepNum}>{s.n}</div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
                {i < steps.length - 1 && <span className={styles.stepLine} />}
              </div>
            ))}
          </div>

          <div className={styles.howFoot}>
            <p>
              Most clients make their first change within two weeks of the first
              call.
            </p>
            <Link href="/contact" className="btn btn-saffron">
              Start with a free check <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── 05 · WHY US ───────── */}
      <section className="section band-peach">
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyPhoto}>
              <Image
                src="/hero-road.jpg"
                alt="An open road at dusk — the second mile"
                width={760}
                height={560}
                className={styles.whyImg}
                priority={false}
              />
              <div className={styles.whyCaption}>
                <strong>Why &ldquo;SecondMiles&rdquo;?</strong>
                <span>
                  The first answer is usually the obvious one. The useful one is
                  a mile further on. We go and get it.
                </span>
              </div>
            </div>

            <div className={styles.whyCopy}>
              <span className="kicker">How we work</span>
              <h2 className="h-lg">
                We work for you.<br />
                <span className="swish">Nobody else.</span>
              </h2>

              <div className={styles.whyList}>
                <WhyItem tone="ember" title="No side deals">
                  We take nothing from delivery platforms or software sellers.
                  If an ad spend is wasting your money, we say so.
                </WhyItem>
                <WhyItem tone="basil" title="Money, not metrics">
                  Every recommendation comes with a number attached. If we
                  can&apos;t show you what it&apos;s worth, we don&apos;t send it.
                </WhyItem>
                <WhyItem tone="sky" title="Written for busy people">
                  Short notes a manager can read standing up. No jargon, no
                  dashboard logins to remember.
                </WhyItem>
                <WhyItem tone="plum" title="Run by operators">
                  Our team has built menus, set prices and run sites. We know
                  what the kitchen can actually do.
                </WhyItem>
              </div>

              <Link href="/about" className="link-arrow" style={{ marginTop: 26 }}>
                More about us <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 06 · RESULTS ───────── */}
      <section className="section band-paper">
        <div className="container">
          <div className="center-col" style={{ marginBottom: 46 }}>
            <span className="kicker">Real results</span>
            <h2 className="h-lg">
              What changed for <span className="mark mark-sky mark-light">other kitchens</span>
            </h2>
          </div>

          <div className={styles.resultGrid}>
            {results.map((r) => (
              <article key={r.figure} className={`${styles.resultCard} ${styles[r.tone]}`}>
                <div className={styles.resultFig}>{r.figure}</div>
                <div className={styles.resultMetric}>{r.metric}</div>
                <div className="perf" />
                <div className={styles.resultWho}>{r.who}</div>
                <p className={styles.resultWhat}>{r.what}</p>
              </article>
            ))}
          </div>

          <div className={styles.resultFoot}>
            <Link href="/resources#cases" className="link-arrow">
              See the full stories <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── 07 · CTA ───────── */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <span className={styles.ctaStamp}>Free · 30 min</span>
            <h2 className="h-lg">
              Let&apos;s find your <span className="mark">second mile.</span>
            </h2>
            <p className={styles.ctaLead}>
              Half an hour on your numbers. We&apos;ll point at the two or three
              things worth fixing first — whether or not you hire us.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className="btn btn-ink">
                Book the call <Arrow />
              </Link>
              <Link href="/solutions" className="btn">
                See what we offer
              </Link>
            </div>
            <p className={styles.ctaFine}>
              No sales script. No lock-in. Just a look at what your data is
              telling you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------- bits ---------------- */

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

function Tick() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8.5L6.2 11.5L13 4.8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: 'up' | 'down' }) {
  return (
    <div className={styles.stat}>
      <span className={styles.statLabel}>{label}</span>
      <span className={`${styles.statValue} ${tone === 'up' ? styles.up : styles.down}`}>
        {value}
      </span>
    </div>
  );
}

function PassNote({
  tone,
  tag,
  children,
}: {
  tone: string;
  tag: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${styles.note} ${styles[tone]}`}>
      <span className={styles.noteTag}>{tag}</span>
      <p>{children}</p>
    </div>
  );
}

function WhyItem({
  tone,
  title,
  children,
}: {
  tone: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.whyItem}>
      <span className={`${styles.whyBullet} ${styles[tone]}`} />
      <div>
        <h3 className={styles.whyTitle}>{title}</h3>
        <p className={styles.whyText}>{children}</p>
      </div>
    </div>
  );
}
