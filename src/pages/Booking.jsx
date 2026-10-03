import React, { useState } from 'react';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ButtonLink } from '../components.jsx';
import { client, images, isNaaee, phone, phoneHref, services } from '../data.js';

function whatsappHref(form) {
  const message = `Hello ${isNaaee ? 'NAAEE SALON' : 'Uplooks'}, I would like to request an appointment.\n\nService: ${form.service}\nDate: ${form.date}\nTime: ${form.time}\nName: ${form.name}\nPhone: ${form.phone}${form.message ? `\nMessage: ${form.message}` : ''}`;
  return `https://wa.me/${client.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function Booking() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ service: '', date: '', time: '', name: '', phone: '', message: '' });
  const update = e => setForm(v => ({ ...v, [e.target.name]: e.target.value }));
  const today = new Date().toISOString().slice(0, 10);
  function submit(e) {
    e.preventDefault();
    sessionStorage.setItem(`${client.id}-booking`, JSON.stringify(form));
    window.open(whatsappHref(form), '_blank', 'noopener,noreferrer');
    navigate('/booking/success');
  }
  return <main><section className="booking-hero" style={{ '--hero-image': `url("${images.interior}")` }}><div className="container"><span className="eyebrow eyebrow-light">Your time at {isNaaee ? 'NAAEE SALON' : 'Uplooks'}</span><h1>Book your <em>appointment.</em></h1><p>Choose your service and preferred time.</p></div></section>
    <section className="booking-section section-pad"><div className="container booking-layout"><div className="booking-form-wrap"><div className="booking-heading"><span className="eyebrow">Appointment request</span><h2>Let's plan your visit.</h2><p>Just a few details and you're one step closer to your next look.</p></div><form onSubmit={submit} className="booking-form"><label className="full">Service<select name="service" value={form.service} onChange={update} required><option value="">Choose a service</option>{services.map(s => <option key={s.slug}>{s.title}</option>)}</select></label><label>Date<input name="date" type="date" min={today} value={form.date} onChange={update} required/></label><label>Preferred time<input name="time" type="time" min="09:00" max={client.maxBookingTime} value={form.time} onChange={update} required/></label><label className="full">Your name<input name="name" type="text" autoComplete="name" placeholder="Your full name" value={form.name} onChange={update} required/></label><label className="full">Phone number<input name="phone" type="tel" autoComplete="tel" inputMode="tel" pattern="[0-9+()\s-]{10,18}" placeholder="Your phone number" value={form.phone} onChange={update} required/></label><label className="full">Message <span>(optional)</span><textarea name="message" rows="3" placeholder="Anything you would like us to know?" value={form.message} onChange={update}/></label><button className="button button-dark full" type="submit">Continue on WhatsApp <ArrowRight size={16}/></button><p className="form-note full">Your request opens in WhatsApp. Please send the prepared message there so the salon receives it. Your appointment is confirmed only after {isNaaee ? 'NAAEE SALON' : 'Uplooks'} responds.</p></form></div>
      <aside className="booking-aside"><img src={images.interior} alt="Illustrative salon interior"/><div><span className="eyebrow">Prefer to call?</span><h3>We're here to help.</h3><p>Speak with the salon about your visit.</p><a className="button button-outline-dark" href={phoneHref}><Phone size={15}/> Call {phone}</a></div></aside></div></section>
  </main>;
}

export function BookingSuccess() {
  const stored = sessionStorage.getItem(`${client.id}-booking`);
  const data = stored ? JSON.parse(stored) : null;
  return <main className="success-page"><div className="success-card"><div className="success-icon"><Check size={28}/></div><span className="eyebrow">One last step</span><h1>Appointment request ready.</h1><p>{data ? `Thank you, ${data.name}.` : 'Thank you.'} Please send the prepared WhatsApp message to reach {isNaaee ? 'NAAEE SALON' : 'Uplooks'}. We'll contact you to confirm after receiving it.</p>{data && <div className="success-details"><div><span>Service</span><strong>{data.service}</strong></div><div><span>Date</span><strong>{data.date}</strong></div><div><span>Time</span><strong>{data.time}</strong></div><div><span>Phone</span><strong>{data.phone}</strong></div></div>}<div className="success-actions">{data && <a className="button button-dark" href={whatsappHref(data)} target="_blank" rel="noreferrer">Send via WhatsApp <ArrowRight size={15}/></a>}<ButtonLink to="/">Back to home</ButtonLink><a className="button button-outline-dark" href={phoneHref}>Call salon <Phone size={15}/></a></div></div></main>;
}
