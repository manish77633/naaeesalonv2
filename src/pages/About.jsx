import React from 'react';
import { ArrowRight, Heart, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ButtonLink, CTASection, PageHero, QuickFeatures, SectionHeading } from '../components.jsx';
import { images } from '../data.js';

export default function About() { return <main>
  <PageHero image={images.beauty} eyebrow="Our story" title={<>About <em>Uplooks</em></>} subtitle="Beauty meets confidence." className="hero-about"/>
  <section className="section-pad container"><div className="intro-layout"><div><span className="eyebrow">Welcome to Uplooks</span><h2>A place to feel<br/><em>your best.</em></h2></div><div><p>Uplooks Unisex Saloon is a welcoming space in Jaipur for hair, beauty, makeup and grooming. We believe great service begins by listening to you, understanding your style and giving every detail the care it deserves.</p><p>Whether you are coming in for everyday self care or getting ready for a special moment, we want your time here to feel easy, personal and memorable.</p></div></div><QuickFeatures/></section>
  <section className="editorial-split container section-pad"><div className="editorial-image"><img src={images.interior} alt="Illustrative premium salon interior" loading="lazy"/></div><div className="editorial-content"><span className="eyebrow">Our philosophy</span><h2>Care in<br/><em>every detail.</em></h2><p>Our approach is simple: understand what makes you feel confident, then create a look that is truly yours. Thoughtful consultation, a calm environment and attentive service shape every visit.</p><ButtonLink to="/services">Explore services</ButtonLink></div></section>
  <section className="section-pad soft-section"><div className="container"><SectionHeading eyebrow="Why choose us" title="The Uplooks way" center/><div className="principles"><div><Heart/><h3>Personalised care</h3><p>Looks and experiences tailored to you.</p></div><div><ShieldCheck/><h3>Hygiene & safety</h3><p>A clean, comfortable environment.</p></div><div><Sparkles/><h3>Professional service</h3><p>Careful work and considered details.</p></div><div><Users/><h3>Customer satisfaction</h3><p>Your comfort is at the heart of each visit.</p></div></div></div></section>
  <section className="section-pad container"><SectionHeading eyebrow="Our space" title="Step inside" description="A little calm in the middle of a busy day." action={<Link className="text-link" to="/contact">Find us <ArrowRight size={16}/></Link>}/><img className="full-editorial-image" src={images.interior} alt="Illustrative Uplooks salon environment" loading="lazy"/></section>
  <CTASection />
</main>; }
