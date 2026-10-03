import React from 'react';
import { CTASection, PageHero, SectionHeading, ServiceGrid } from '../components.jsx';
import { images, isNaaee } from '../data.js';

export default function Services() { return <main><PageHero image={images.mens} eyebrow={isNaaee ? 'Explore NAAEE SALON' : 'Explore Uplooks'} title={<>Our <em>services</em></>} subtitle={isNaaee ? 'Hair, nail and beauty service categories.' : 'Everything you need to look and feel your best.'} className="hero-services"/><section className="section-pad container"><SectionHeading eyebrow="Made for you" title="Find your next look" description={isNaaee ? 'Ask the salon about hair, nail and beauty appointments.' : 'From a fresh cut to your most special celebration, discover care for every side of you.'}/><ServiceGrid /></section><CTASection /></main>; }
