import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, CalendarDays, ChevronDown, Clock3, MapPin, Menu, Phone, Play, Scissors, Sparkles, X } from 'lucide-react';
import { address, images, mapsHref, phone, phoneHref, reels, services } from './data.js';

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const names = { '/': 'Home', '/about': 'About', '/services': 'Services', '/gallery': 'Gallery', '/reviews': 'Customer Stories', '/booking': 'Book Appointment', '/booking/success': 'Appointment Request', '/contact': 'Contact' };
    const service = services.find(s => pathname === `/services/${s.slug}`);
    document.title = `${names[pathname] || service?.title || 'Uplooks'} | Uplooks Unisex Saloon, Jaipur`;
  }, [pathname]);
  return null;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => { document.body.classList.toggle('menu-open', open); return () => document.body.classList.remove('menu-open'); }, [open]);
  const nav = [ ['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/services/bridal', 'Bridal'], ['/gallery', 'Gallery'], ['/reviews', 'Reviews'], ['/contact', 'Contact'] ];
  return <>
    <div className="topbar"><span><MapPin size={12} /> Mansarovar, Jaipur</span><span><Clock3 size={12} /> Open daily · 9 AM – 10:30 PM</span><a href={phoneHref}><Phone size={12} /> {phone}</a></div>
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Uplooks home"><img src="/media/uplooks-logo.png" alt="Uplooks Unisex Saloon" /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.map(([href, label]) => href === '/services' ? <div className="nav-dropdown" key={href}><NavLink to={href}>Services <ChevronDown size={12} /></NavLink><div className="dropdown-menu">{services.map(s => <Link key={s.slug} to={'/services/' + s.slug}>{s.title}</Link>)}</div></div> : <NavLink key={href} to={href}>{label}</NavLink>)}
      </nav>
      <Link className="button button-dark header-book" to="/booking">Book appointment <ArrowRight size={14} /></Link>
      <button className="menu-toggle" type="button" onClick={() => setOpen(v => !v)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </header>
    <div className={'mobile-menu ' + (open ? 'is-open' : '')} aria-hidden={!open} inert={!open}>
      <nav aria-label="Mobile navigation">{nav.map(([href,label]) => <NavLink key={href} to={href}>{label}<ArrowRight size={17} /></NavLink>)}</nav>
      <Link className="button button-dark" to="/booking">Book appointment <ArrowRight size={16} /></Link>
      <a className="mobile-call" href={phoneHref}><Phone size={16} /> Call {phone}</a>
    </div>
  </>;
}

export function Footer() {
  return <footer className="footer">
    <div className="footer-main container">
      <div className="footer-brand"><img src="/media/uplooks-logo.png" alt="Uplooks Unisex Saloon" /><p>Look good. Feel great.</p></div>
      <div><span className="eyebrow">Explore</span><Link to="/about">About us</Link><Link to="/services">Services</Link><Link to="/gallery">Gallery</Link><Link to="/reviews">Customer stories</Link></div>
      <div><span className="eyebrow">Visit us</span><p>{address}</p><a href={mapsHref} target="_blank" rel="noreferrer">Get directions <ArrowRight size={13} /></a></div>
      <div><span className="eyebrow">Let's talk</span><a href={phoneHref}>{phone}</a><p>Every day<br />9:00 AM – 10:30 PM</p><Link className="footer-book" to="/booking">Book an appointment <ArrowRight size={13} /></Link></div>
    </div>
    <div className="footer-bottom container"><span>© {new Date().getFullYear()} Uplooks Unisex Saloon</span><span>Made for your next look.</span></div>
  </footer>;
}

export function MobileActionBar() { return <div className="mobile-action-bar"><a href={phoneHref}><Phone size={19}/><span>Call</span></a><Link to="/booking"><CalendarDays size={19}/><span>Book</span></Link><a href={mapsHref} target="_blank" rel="noreferrer"><MapPin size={19}/><span>Directions</span></a></div>; }

export function ButtonLink({ to, children, light = false, outline = false, className = '' }) { return <Link className={'button ' + (outline ? 'button-outline' : light ? 'button-light' : 'button-dark') + ' ' + className} to={to}>{children}<ArrowRight size={15}/></Link>; }

export function PageHero({ image, eyebrow, title, subtitle, children, className = '' }) { return <section className={'page-hero ' + className} style={{ '--hero-image': `url("${image}")` }}><div className="page-hero-inner container"><span className="eyebrow eyebrow-light">{eyebrow}</span><h1>{title}</h1>{subtitle && <p>{subtitle}</p>}{children}</div></section>; }

export function SectionHeading({ eyebrow, title, description, action, center = false }) { return <div className={'section-heading ' + (center ? 'center' : '')}><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>{action && <div className="section-action">{action}</div>}</div>; }

export function ServiceCard({ service }) { return <Link to={'/services/' + service.slug} className="service-card"><div className="service-image"><img src={service.image} alt={service.title + ' at Uplooks'} loading="lazy" /></div><div className="service-card-copy"><div><h3>{service.title}</h3><p>{service.short}</p></div><span>Explore <ArrowRight size={14} /></span></div></Link>; }

export function ServiceGrid({ items = services }) { return <div className="service-grid">{items.map(s => <ServiceCard service={s} key={s.slug}/>)}</div>; }

export function CTASection({ title = 'Book your appointment.', text = 'Your next look starts here.' }) { return <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow eyebrow-light">A little time for you</span><h2>{title}</h2><p>{text}</p></div><div className="cta-actions"><ButtonLink to="/booking" light>Book appointment</ButtonLink><a href={phoneHref}>Call {phone} <ArrowRight size={14}/></a></div></div></section>; }

export function ReelsSection({ compact = false }) {
  const [active, setActive] = useState(null);
  const refs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting && !active) video.play().catch(() => {});
      else video.pause();
    }), { threshold: .45 });
    refs.current.forEach(v => v && observer.observe(v));
    return () => observer.disconnect();
  }, [active]);
  useEffect(() => { const onKey = e => e.key === 'Escape' && setActive(null); window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); }, []);
  return <section className={'reels-section section-pad ' + (compact ? 'compact' : '')}><div className="container"><SectionHeading eyebrow="In motion" title="The Uplooks edit" description="A glimpse of the looks and moments we love. Demo reels shown until salon videos are added." /><div className="reels-grid">{reels.map((reel,i) => <button className="reel-card" type="button" key={reel.title} onClick={() => setActive(reel)} aria-label={'Play ' + reel.title}><video ref={el => refs.current[i] = el} src={reel.src} poster={reel.poster} muted loop playsInline preload="metadata" /><span className="reel-top">{reel.label}</span><span className="reel-play"><Play size={19} fill="currentColor" /></span><span className="reel-title">{reel.title}<ArrowRight size={15}/></span></button>)}</div></div>
    {active && <div className="media-modal" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)}><button className="modal-close" onClick={() => setActive(null)} aria-label="Close video"><X/></button><video key={active.src} src={active.src} poster={active.poster} autoPlay controls playsInline onClick={e => e.stopPropagation()}/><p>{active.title} · Demo reel</p></div>}
  </section>;
}

export function QuickFeatures() { return <div className="quick-features"><div><Scissors size={21}/><span>Personalised care</span></div><div><Sparkles size={21}/><span>Thoughtful service</span></div><div><Clock3 size={21}/><span>Time for you</span></div></div>; }
