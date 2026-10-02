import React from 'react';
import { CTASection, PageHero, SectionHeading, ServiceGrid } from '../components.jsx';
import { images } from '../data.js';

export default function Services() { return <main><PageHero image={images.mens} eyebrow="Explore Uplooks" title={<>Our <em>services</em></>} subtitle="Everything you need to look and feel your best." className="hero-services"/><section className="section-pad container"><SectionHeading eyebrow="Made for you" title="Find your next look" description="From a fresh cut to your most special celebration, discover care for every side of you."/><ServiceGrid /></section><CTASection /></main>; }
