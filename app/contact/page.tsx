'use client';
import { useState } from 'react';
import styles from './contact.module.css';

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email Us',
    value: 'info@secondmiles.in',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
    label: 'Call Us',
    value: '+917694096021',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Find Us',
    value: 'G-37 Balaji Tower, near christain Eminent School, Indore, M.P.',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '', service: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section className="page-hero" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(175,67,29,0.08) 0%, transparent 60%)', paddingBottom: '60px' }}>
        <div className="container">
          <div className="tag" style={{ marginBottom: '20px' }}>Get in Touch</div>
          <h1>Let's start the<br /><span className="green">conversation.</span></h1>
          <p>Tell us a bit about your business and what you're trying to achieve. We'll get back to you within one working day.</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section style={{ padding: '60px 0 100px' }}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Info */}
            <div className={styles.infoCol}>
              <div className={styles.infoSection}>
                <h2 className={styles.infoTitle}>How we work together</h2>
                <div className={styles.infoSteps}>
                  {[
                    { n: '1', t: 'Discovery Call', d: 'A free 30-minute call to understand your situation.' },
                    { n: '2', t: 'Proposal', d: 'We send a tailored proposal within 48 hours.' },
                    { n: '3', t: 'Kickoff', d: 'Project starts within 1–2 weeks of sign-off.' },
                  ].map(step => (
                    <div key={step.n} className={styles.infoStep}>
                      <div className={styles.stepN}>{step.n}</div>
                      <div>
                        <div className={styles.stepT}>{step.t}</div>
                        <div className={styles.stepD}>{step.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.contactCards}>
                {contactInfo.map((c, i) => (
                  <div key={i} className={styles.contactCard}>
                    <div className="icon-wrap" style={{ width: '44px', height: '44px' }}>{c.icon}</div>
                    <div>
                      <div className={styles.contactLabel}>{c.label}</div>
                      <div className={styles.contactValue}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className={styles.formCol}>
              {sent ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>
                    <svg width="40" height="40" fill="none" stroke="#af431d" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3>Message received!</h3>
                  <p>We'll be in touch within one working day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form} id="contact-form">
                  <div className="grid-2" style={{ gap: '16px' }}>
                    <div className={styles.field}>
                      <label htmlFor="contact-name" className={styles.label}>Your Name *</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your Name"
                        className={styles.input}
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="contact-email" className={styles.label}>Email Address *</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="@gmail.com"
                        className={styles.input}
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid-2" style={{ gap: '16px' }}>
                    <div className={styles.field}>
                      <label htmlFor="contact-company" className={styles.label}>Business Name</label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        placeholder="Company Name"
                        className={styles.input}
                        value={form.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="contact-phone" className={styles.label}>Phone Number</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 9999999999"
                        className={styles.input}
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-service" className={styles.label}>What can we help with?</label>
                    <select
                      id="contact-service"
                      name="service"
                      className={styles.select}
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      <option>Menu & Range Optimisation</option>
                      <option>Pricing Intelligence</option>
                      <option>Channel Strategy</option>
                      <option>Performance Dashboards</option>
                      <option>Not sure yet — I need advice</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-message" className={styles.label}>Tell us about your business *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your current challenges, goals, and what you're hoping to achieve with SecondMiles..."
                      className={styles.textarea}
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
