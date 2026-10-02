import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTASection, PageHero, ReelsSection, SectionHeading } from '../components.jsx';
import { images, mapsHref } from '../data.js';

export default function Reviews() { return <main><PageHero image={images.beauty} eyebrow="Customer stories" title={<>Real people.<br/><em>Real results.</em></>} subtitle="The best stories are told by the people who lived them." className="hero-reviews"/>
  <div className="reviews-rating-band"><div className="container reviews-rating-inner"><div><span className="eyebrow">The word around Jaipur</span><strong>5.0</strong><span className="reviews-stars" aria-hidden="true">★★★★★</span><span className="reviews-rating-caption">Google rating*</span></div><a className="text-link" href={mapsHref} target="_blank" rel="noreferrer">Explore Google reviews <ArrowRight size={16}/></a></div></div>
  <section className="section-pad container"><div className="intro-layout"><div><span className="eyebrow">From our community</span><h2>Every look has<br/><em>a story.</em></h2></div><div><p>We would love to share genuine customer experiences here. Verified reviews, before and after photos, and customer videos can be added when provided by Uplooks.</p><p className="content-note">Customer review content coming soon. The photographs on this page are illustrative.</p><Link className="text-link" to="/gallery">Explore the gallery <ArrowRight size={16}/></Link></div></div></section>
  <section className="section-pad soft-section"><div className="container"><SectionHeading eyebrow="Customer moments" title="Looks worth sharing" description="A preview of how real customer photos and transformation stories will appear."/><div className="results-grid"><div className="result result-large"><img src={images.bridal} alt="Illustrative bridal look" loading="lazy"/><span>Bridal moments</span></div><div className="result"><img src={images.mens} alt="Illustrative men's look" loading="lazy"/><span>Grooming moments</span></div><div className="result"><img src={images.beauty} alt="Illustrative beauty look" loading="lazy"/><span>Beauty moments</span></div></div></div></section>
  <ReelsSection compact/><p className="rating-disclosure">*Rating supplied by Uplooks; confirm the live Google listing before publication.</p><CTASection />
</main>; }
