import { useState } from 'react';
import content from './content.js';

const initial = { name: '', email: '', message: '' };

export default function Contact() {
  const { contact } = content;
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: 'idle', text: '' }); // idle | sending | success | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'sending', text: '' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Could not send your message.');
      setStatus({ type: 'success', text: data.message });
      setForm(initial);
    } catch (err) {
      setStatus({ type: 'error', text: err.message });
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="wrap two-col">
        <div>
          <h2>{contact.headline}</h2>
          <p>{contact.text}</p>
          <dl className="details">
            {contact.details.map((d) => (
              <div key={d.label}>
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <form onSubmit={onSubmit} noValidate>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" value={form.name} onChange={onChange} autoComplete="name" required />

          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" value={form.email} onChange={onChange} autoComplete="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={form.message} onChange={onChange} required />

          <button className="btn" type="submit" disabled={status.type === 'sending'}>
            {status.type === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          <p className={`status ${status.type}`} role="status" aria-live="polite">{status.text}</p>
        </form>
      </div>
    </section>
  );
}
