import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ButtonLink, CTASection, PageHero, ReelsSection, SectionHeading, ServiceGrid } from '../components.jsx';
import { images, services } from '../data.js';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  if (!service) return <main className="container not-found"><h1>Service not found.</h1><ButtonLink to="/services">View services</ButtonLink></main>;
  const bridal = slug === 'bridal';
  const related = services.filter(s => s.slug !== slug).slice(0, 3);
  return <main>
    <PageHero image={service.image} eyebrow="Uplooks services" title={bridal ? <>Bridal <em>beauty</em></> : <>{service.title.split(' ')[0]} <em>{service.title.split(' ').slice(1).join(' ') || 'services'}</em></>} subtitle={bridal ? 'Your day. Your look.' : service.intro} className={'hero-detail hero-' + slug}><ButtonLink to="/booking" light>{bridal ? 'Book consultation' : 'Book appointment'}</ButtonLink></PageHero>
    <section className="section-pad container"><div className="intro-layout"><div><span className="eyebrow">{service.title} at Uplooks</span><h2>{bridal ? <>For your most<br/><em>beautiful moments.</em></> : <>Your look,<br/><em>your way.</em></>}</h2></div><div><p>{service.intro} Our team takes time to understand your preferences and create an experience around you.</p><p>Choose the service that suits your plans, or visit us for a conversation about the look you have in mind.</p><ButtonLink to="/booking">Plan your visit</ButtonLink></div></div></section>
    <section className="section-pad soft-section"><div className="container"><SectionHeading eyebrow="Explore the details" title={bridal ? 'Bridal services' : 'Our services'} description={bridal ? 'From your first consultation to the final look.' : 'Thoughtful care, from start to finish.'}/><div className="detail-services">{service.featured.map((item,i) => <Link key={item} to="/booking"><span>0{i+1}</span><h3>{item}</h3><ArrowRight size={18}/></Link>)}</div></div></section>
    <section className="editorial-split container section-pad"><div className="editorial-image"><img src={bridal ? images.bridal : slug === 'mens-grooming' ? images.mens : images.interior} alt={'Illustrative ' + service.title + ' imagery'} loading="lazy"/></div><div className="editorial-content"><span className="eyebrow">The experience</span><h2>{bridal ? <>A look for<br/><em>your story.</em></> : <>Feel good.<br/><em>Look great.</em></>}</h2><p>{bridal ? 'Your bridal look should feel unmistakably yours. Explore makeup, hair and pre-bridal care in a relaxed consultation.' : 'Enjoy attentive service in a warm, inviting space. We focus on the little details that make each visit feel yours.'}</p><ButtonLink to="/booking">Book appointment</ButtonLink></div></section>
    <section className="section-pad container"><SectionHeading eyebrow="Inspiration" title={bridal ? 'Bridal looks' : 'Looks we love'} description="Illustrative imagery; original Uplooks work can be added here." action={<Link className="text-link" to="/gallery">View gallery <ArrowRight size={16}/></Link>}/><div className="inspiration-grid"><img src={service.image} alt={'Illustrative ' + service.title + ' look'} loading="lazy"/><img src={bridal ? images.beauty : images.mens} alt="Illustrative salon look" loading="lazy"/><img src={images.interior} alt="Illustrative salon interior" loading="lazy"/></div></section>
    <ReelsSection compact/>
    <section className="section-pad container"><SectionHeading eyebrow="More to explore" title="You may also love"/><ServiceGrid items={related}/></section>
    <CTASection title={bridal ? 'Book your bridal consultation.' : 'Book your appointment.'} text={bridal ? 'Tell us about your day. We’ll help shape your look.' : 'Your next look starts here.'}/>
  </main>;
}
