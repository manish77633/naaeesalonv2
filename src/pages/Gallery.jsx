import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { CTASection, PageHero, ReelsSection, SectionHeading } from '../components.jsx';
import { gallery, images, isNaaee } from '../data.js';

const filters = isNaaee ? ['All', 'Hair', 'Nails', 'Beauty', 'Salon'] : ['All', 'Hair', 'Beauty', 'Makeup', 'Bridal', 'Men', 'Salon'];
export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);
  const visible = gallery.filter(item => filter === 'All' || item.category === filter);
  useEffect(() => { const onKey = e => e.key === 'Escape' && setActive(null); window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); }, []);
  return <main><PageHero image={images.interior} eyebrow={isNaaee ? 'The NAAEE SALON gallery' : 'The Uplooks gallery'} title={<>A little <em>inspiration.</em></>} subtitle={isNaaee ? 'Illustrative images until salon photos are available.' : 'Looks, details and moments to make your own.'} className="hero-gallery"/>
    <section className="section-pad container"><SectionHeading eyebrow="Explore the gallery" title="The art of looking good" description={isNaaee ? 'Hair, nail and beauty categories shown with illustrative images.' : 'Hair, makeup, bridal and grooming moments from the Uplooks gallery.'}/><div className="gallery-filters" role="group" aria-label="Gallery filters">{filters.map(f => <button key={f} type="button" className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>)}</div><div className={'gallery-grid ' + (filter === 'All' ? '' : 'is-filtered')}>{visible.map(item => <button key={item.id} className={'gallery-item ' + item.shape} type="button" onClick={() => setActive(item)}><img src={item.image} alt={item.title} style={{ objectPosition: item.position }} loading="lazy"/><span><small>{item.category}</small>{item.title}</span></button>)}</div></section>
    <ReelsSection />
    <CTASection />
    {active && <div className="media-modal image-modal" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)}><button className="modal-close" onClick={() => setActive(null)} aria-label="Close image"><X/></button><img src={active.image} alt={active.title} onClick={e => e.stopPropagation()}/><p>{active.title}{active.illustrative ? ' · Illustrative image' : ''}</p></div>}
  </main>;
}
