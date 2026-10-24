import Link from 'next/link';
import Image from 'next/image';
import styles from './about.module.css';

const beliefs = [
  {
    tone: 'ember',
    title: 'We work for you, not the platforms',
    text: 'We take no commission, no referral fee and no software kickback. If a platform is selling you something you do not need, we will say so in writing.',
  },
  {
    tone: 'saffron',
    title: 'Every answer comes with a number',
    text: 'If we cannot tell you roughly what a change is worth in rupees, it does not go in the report. Ideas are cheap. Sized ideas are useful.',
  },
  {
    tone: 'sky',
    title: 'Short beats thorough',
    text: 'Nobody in a kitchen reads 40 pages. You get a page. The working underneath is always there if you want it, but you should not need it.',
  },
  {
    tone: 'basil',
    title: 'We have done the job',
    text: 'Our team has written menus, set prices and run sites. We know what a kitchen can actually deliver on a Saturday night, and we plan around it.',
  },
  {
    tone: 'plum',
    title: 'Boring wins',
    text: 'Most growth comes from a dozen small, unglamorous fixes done properly — not one big idea. We are happy being the people who do the dozen.',
  },
  {
    tone: 'ink',
    title: 'We tell you when to stop',
    text: 'If there is nothing left worth finding, we will say that too. Long contracts that do nothing are not a business we want.',
  },
];

const team = [
  {
    initials: 'DD',
    name: 'Deepak Singh Dagur',
    role: 'Founder',
    bio: '15 years in food and hospitality, including strategy work at Deliveroo. Has built the analytics and growth side of food-tech businesses and multi-site operators.',
    tone: 'ember',
  },
  {
    initials: 'RS',
    name: 'Rishi Sharma',
    role: 'Co-founder',
    bio: '18 years running the commercial side of restaurants. Knows menu profit, platform economics and what it takes to grow a brand without breaking the kitchen.',
    tone: 'basil',
  },
];

const numbers = [
  { k: 'Revenue', v: 'what comes in' },
  { k: 'Orders', v: 'how many' },
  { k: 'Basket', v: 'how big' },
  { k: 'Conversion', v: 'who says yes' },
  { k: 'Visibility', v: 'who sees you' },
  { k: 'Profit', v: 'what you keep' },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="kicker">About us</span>
          <h1 className="h-xl">
            The first answer<br />
            is rarely the <span className="mark">good one.</span>
          </h1>
          <p className="lead">
            Anyone can tell you sales were down. We are the people who go and
            find out why, and what it is worth fixing. That extra bit of
            distance is where the name comes from.
          </p>
        </div>
      </section>

      {/* story */}
      <section className="section band-cream band-dots">
        <div className="container">
          <div className={styles.story}>
            <div className={styles.storyCopy}>
              <span className="kicker">Why we started</span>
              <h2 className="h-lg">
                Everyone had reports.<br />
                <span className="swish">Nobody had answers.</span>
              </h2>
              <p>
                We spent years inside restaurants and delivery platforms,
                watching good operators drown in dashboards. Four apps, five
                exports, and still no straight answer to the only question that
                matters: what should I change this week?
              </p>
              <p>
                So we built the thing we always wanted. Someone independent who
                reads all the numbers, works out what they mean for your
                profit, and writes it down in a way a busy manager can act on
                before service.
              </p>
              <p>
                No platform pays us. No software company pays us. You do — and
                only for as long as we are finding you more than we cost.
              </p>

              <div className={styles.quote}>
                <span className={styles.quoteMark}>&ldquo;</span>
                <p>We don&apos;t just report on performance. We argue with it.</p>
                <span className={styles.quoteBy}>— How we start every project</span>
              </div>
            </div>

            <aside className={styles.storySide}>
              <div className={styles.photo}>
                <Image
                  src="/hero-road.jpg"
                  alt="A long open road at dusk"
                  width={620}
                  height={700}
                  className={styles.photoImg}
                />
              </div>
              <div className={styles.photoNote}>
                <strong>Second miles</strong>
                <span>
                  The first mile is the report everybody already has. The second
                  is the bit where it turns into money.
                </span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* the six numbers */}
      <section className="section-tight band-saffron">
        <div className="container">
          <div className={styles.numbersWrap}>
            <h2 className="h-md" style={{ maxWidth: '16ch' }}>
              Six numbers run a food business.
            </h2>
            <div className={styles.numbers}>
              {numbers.map((n) => (
                <div key={n.k} className={styles.numberCard}>
                  <strong>{n.k}</strong>
                  <span>{n.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* beliefs */}
      <section className="section band-paper">
        <div className="container">
          <div className="center-col" style={{ marginBottom: 46 }}>
            <span className="kicker">What we believe</span>
            <h2 className="h-lg">Six rules we don&apos;t break</h2>
          </div>

          <div className={styles.beliefGrid}>
            {beliefs.map((b) => (
              <div key={b.title} className={`${styles.belief} ${styles[b.tone]} pop-hover`}>
                <span className={styles.beliefBar} />
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* team */}
      <section className="section band-peach">
        <div className="container">
          <div className="center-col" style={{ marginBottom: 44 }}>
            <span className="kicker">Who you deal with</span>
            <h2 className="h-lg">
              Two people who have <span className="mark mark-basil mark-light">run kitchens</span>
            </h2>
            <p className="lead" style={{ marginTop: 16 }}>
              You get the founders on the call. Not a junior with a template.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {team.map((m) => (
              <article key={m.name} className={`${styles.member} ${styles[m.tone]}`}>
                <div className={styles.avatar}>{m.initials}</div>
                <h3>{m.name}</h3>
                <div className={styles.role}>{m.role}</div>
                <div className="perf" />
                <p>{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="section-tight band-ink">
        <div className="container">
          <div className={styles.cta}>
            <div>
              <h2 className="h-md">Come and test us on your own numbers.</h2>
              <p className="lead on-dark" style={{ marginTop: 12 }}>
                Thirty minutes, free, and you keep whatever we find.
              </p>
            </div>
            <Link href="/contact" className="btn btn-saffron">
              Book a free check
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
