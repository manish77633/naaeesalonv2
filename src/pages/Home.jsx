import React from 'react';
import { ArrowRight, Clock3, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ButtonLink, CTASection, ReelsSection, SectionHeading, ServiceGrid } from '../components.jsx';
import { images, mapsHref } from '../data.js';

export default function Home() {
  return <main>
    <section className="home-hero" style={{ '--hero-image': `url("${images.hero}")` }}>
      <div className="hero-content container"><span className="eyebrow eyebrow-light">Uplooks · Unisex Saloon · Jaipur</span><h1>Your style.<br/><em>Our expertise.</em></h1><p>Premium hair, beauty, makeup and grooming experiences designed around you.</p><div className="hero-actions"><ButtonLink to="/booking" light>Book appointment</ButtonLink><ButtonLink to="/services" outline>Explore services</ButtonLink></div><a className="hero-rating" href={mapsHref} target="_blank" rel="noreferrer" aria-label="View Uplooks on Google Maps"><span className="hero-rating-stars" aria-hidden="true">★★★★★</span><span><strong>5.0</strong> Google rating</span><ArrowRight size={13}/></a></div>
      <div className="hero-side-note">Look good. Feel great.</div>
    </section>
    <div className="trust-strip"><div className="container trust-inner"><a className="rating-stat" href={mapsHref} target="_blank" rel="noreferrer"><span className="rating-stars" aria-hidden="true">★★★★★</span><strong>5.0</strong><span>Google rating*</span></a><div><Users size={18}/><strong>300+</strong><span>Happy customers*</span></div><div><Clock3 size={18}/><strong>9 AM – 10:30 PM</strong><span>Open daily</span></div><a href="/contact"><MapPin size={18}/><strong>Jaipur</strong><span>Visit Uplooks</span></a></div><p className="trust-note">*Rating and customer figure supplied for the design; verify live values before publication.</p></div>
    <section className="section-pad home-services"><div className="container"><SectionHeading eyebrow="What we do" title="Our services" description="A complete beauty and grooming experience, from everyday styling to special occasions." action={<Link className="text-link" to="/services">View all services <ArrowRight size={16}/></Link>}/><ServiceGrid /></div></section>
    <section className="editorial-split container section-pad"><div className="editorial-image"><img src={images.interior} alt="Warm and elegant Uplooks salon interior" loading="lazy"/><span className="image-caption">A space made for you · Jaipur</span></div><div className="editorial-content"><span className="eyebrow">The Uplooks experience</span><h2>More than<br/><em>a salon.</em></h2><p>At Uplooks, we bring together thoughtful care, modern techniques and a relaxing space to help you look and feel your best.</p><p>Every visit is personal. Every detail is considered.</p><ButtonLink to="/about">Discover Uplooks</ButtonLink></div></section>
    <section className="results-section section-pad"><div className="container"><SectionHeading eyebrow="Our gallery" title="Real looks. Beautiful moments." description="An editorial glimpse of hair, bridal and grooming styles from the Uplooks gallery." action={<Link className="text-link" to="/gallery">Explore gallery <ArrowRight size={16}/></Link>}/><div className="results-grid"><Link to="/gallery" className="result result-large"><img src="/media/gallery/bridal-red.webp" alt="Bridal makeup look" style={{ objectPosition: 'center 20%' }} loading="lazy"/><span>Bridal beauty <ArrowRight size={16}/></span></Link><Link to="/gallery" className="result"><img src="/media/gallery/mens-styling.webp" alt="Men’s grooming look" style={{ objectPosition: 'center 24%' }} loading="lazy"/><span>Men's grooming <ArrowRight size={16}/></span></Link><Link to="/gallery" className="result"><img src="/media/gallery/layered-hair.webp" alt="Layered hair styling" style={{ objectPosition: 'center 44%' }} loading="lazy"/><span>Hair & beauty <ArrowRight size={16}/></span></Link></div></div></section>
    <ReelsSection compact />
    <CTASection />
  </main>;
}
