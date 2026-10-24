'use client';

import { useState } from 'react';
import styles from './contact.module.css';

const steps = [
  ['Call', 'Thirty minutes, free. We look at your numbers together.'],
  ['Quote', 'A flat price in writing within two working days.'],
  ['Start', 'Work begins within a week or two of you saying yes.'],
];

const details = [
  {
    label: 'Email',
    value: 'info@secondmiles.in',
    href: 'mailto:info@secondmiles.in',
    tone: 'ember',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 6 10-6" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 7694096021',
    href: 'tel:+917694096021',
    tone: 'basil',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z" />
      </svg>
    ),
  },
  {
    label: 'Office',
    value: 'G-37 Balaji Tower, near Christian Eminent School, Indore, M.P.',
    href: null,
    tone: 'sky',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const topics = [
  'My menu — what should I sell more of?',
  'My prices — am I charging the right amount?',
  'My ad spend — is it working?',
  'My profit — where is it going?',
  'The weekly Pass — ongoing help',
  'Not sure yet — just want a chat',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    phone: '',
    sites: '',
    topic: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="kicker">Say hello</span>
          <h1 className="h-xl">
            Thirty minutes.<br />
            Your numbers. <span className="mark">No pitch.</span>
          </h1>
          <p className="lead">
            Tell us roughly what is bothering you. We will come back within one
            working day with a time and a couple of questions — nothing else.
          </p>
        </div>
      </section>

      <section className="section band-cream band-dots">
        <div className="container">
          <div className={styles.grid}>
            {/* ---- left column ---- */}
            <aside className={styles.side}>
              <div className={styles.block}>
                <h2 className="h-md">How this goes</h2>
                <ol className={styles.steps}>
                  {steps.map(([t, d], i) => (
                    <li key={t}>
                      <span className={styles.stepNum}>{i + 1}</span>
                      <div>
                        <strong>{t}</strong>
                        <p>{d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className={styles.cards}>
                {details.map((d) => {
                  const inner = (
                    <>
                      <span className={`${styles.icon} ${styles[d.tone]}`}>{d.icon}</span>
                      <span>
                        <em>{d.label}</em>
                        <strong>{d.value}</strong>
                      </span>
                    </>
                  );
                  return d.href ? (
                    <a key={d.label} href={d.href} className={styles.card}>
                      {inner}
                    </a>
                  ) : (
                    <div key={d.label} className={styles.card}>
                      {inner}
                    </div>
                  );
                })}
              </div>

              <div className={styles.promise}>
                <strong>What we won&apos;t do</strong>
                <ul>
                  <li>Put you on a mailing list</li>
                  <li>Pass your details to anyone</li>
                  <li>Chase you for months afterwards</li>
                </ul>
              </div>
            </aside>

            {/* ---- form ---- */}
            <div className={styles.formWrap}>
              {sent ? (
                <div className={styles.done}>
                  <div className={styles.doneTick}>
                    <svg width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2.6" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="h-md">Got it — thank you.</h2>
                  <p>
                    We read every one of these ourselves. Expect a reply within
                    one working day, from a real person.
                  </p>
                  <button className="btn" onClick={() => setSent(false)}>
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className={styles.form}>
                  <div className={styles.formHead}>
                    <span className={styles.formTag}>Free growth check</span>
                    <h2 className="h-md">Tell us about your place</h2>
                  </div>

                  <div className={styles.two}>
                    <Field label="Your name" required>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={update}
                        placeholder="Alex Kaur"
                        className={styles.input}
                      />
                    </Field>
                    <Field label="Email" required>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={update}
                        placeholder="alex@yourplace.com"
                        className={styles.input}
                      />
                    </Field>
                  </div>

                  <div className={styles.two}>
                    <Field label="Business name">
                      <input
                        name="business"
                        value={form.business}
                        onChange={update}
                        placeholder="Your Place"
                        className={styles.input}
                      />
                    </Field>
                    <Field label="Phone">
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={update}
                        placeholder="+91 99999 99999"
                        className={styles.input}
                      />
                    </Field>
                  </div>

                  <Field label="How many sites?">
                    <div className={styles.chips}>
                      {['1', '2–5', '6–20', '20+'].map((s) => (
                        <label
                          key={s}
                          className={`${styles.chip} ${form.sites === s ? styles.chipOn : ''}`}
                        >
                          <input
                            type="radio"
                            name="sites"
                            value={s}
                            checked={form.sites === s}
                            onChange={update}
                          />
                          {s}
                        </label>
                      ))}
                    </div>
                  </Field>

                  <Field label="What is bothering you most?">
                    <select
                      name="topic"
                      value={form.topic}
                      onChange={update}
                      className={styles.input}
                    >
                      <option value="">Pick one…</option>
                      {topics.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Anything else we should know?" required>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={update}
                      placeholder="A couple of lines is plenty. Which platforms you use, what changed recently, what you wish you knew."
                      className={styles.input}
                    />
                  </Field>

                  <button type="submit" className={`btn btn-primary ${styles.submit}`}>
                    Send it over
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <p className={styles.fine}>
                    We reply within one working day. Your details stay with us.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>
        {label}
        {required && <i>*</i>}
      </span>
      {children}
    </label>
  );
}
