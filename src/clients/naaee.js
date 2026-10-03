export const client = {
  id: 'naaee',
  name: 'NAAEE SALON',
  category: 'Beauty Salon / Nail Salon / Hairdresser',
  phone: '+91 91664 89227',
  phoneHref: 'tel:+919166489227',
  whatsappNumber: '919166489227',
  address: 'Sector 150, C-2, Shipra Path, Mansarovar, Jaipur, Rajasthan 302020',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=NAAEE+SALON+Sector+150+C-2+Shipra+Path+Mansarovar+Jaipur+Rajasthan+302020',
  rating: '4.9',
  reviews: '141+',
  hours: '9:00 AM – 9:00 PM',
  hoursShort: '9 AM – 9 PM',
  maxBookingTime: '21:00',
  logo: '/media/naaee-logo.svg',
  locationShort: 'Mansarovar, Jaipur',
  seoTitle: 'NAAEE SALON | Jaipur',
  seoDescription: 'NAAEE SALON in Mansarovar, Jaipur. Hair, nail and beauty services. Open daily, 9:00 AM to 9:00 PM. Call +91 91664 89227.',
};

export const images = {
  hero: '/media/hero-v2.webp',
  bridal: '/media/beauty.webp',
  interior: '/media/interior.webp',
  mens: '/media/hero.webp',
  beauty: '/media/beauty.webp',
};

export const services = [
  { slug: 'hair', title: 'Hair Services', short: 'Hair care', image: images.hero, intro: 'Explore hair services at NAAEE SALON.', featured: ['Hair Services', 'Haircut / Hair Styling'] },
  { slug: 'haircut-styling', title: 'Haircut / Hair Styling', short: 'Cuts and styling', image: images.beauty, intro: 'Explore haircut and hair styling options.', featured: ['Haircut', 'Hair Styling'] },
  { slug: 'nails', title: 'Nail Services', short: 'Nail care', image: images.beauty, intro: 'Explore nail services at NAAEE SALON.', featured: ['Nail Services', 'Manicure', 'Pedicure'] },
  { slug: 'manicure', title: 'Manicure', short: 'Nail care', image: images.beauty, intro: 'Ask about manicure appointments.', featured: ['Manicure'] },
  { slug: 'pedicure', title: 'Pedicure', short: 'Nail care', image: images.interior, intro: 'Ask about pedicure appointments.', featured: ['Pedicure'] },
  { slug: 'beauty', title: 'Beauty Services', short: 'Beauty care', image: images.beauty, intro: 'Explore beauty services at NAAEE SALON.', featured: ['Beauty Services'] },
];

export const gallery = [
  { id: 'hair', image: images.hero, category: 'Hair', title: 'Hair services', shape: 'feature', position: 'center', illustrative: true },
  { id: 'styling', image: images.beauty, category: 'Hair', title: 'Hair styling', shape: 'tall', position: 'center', illustrative: true },
  { id: 'nails', image: images.beauty, category: 'Nails', title: 'Nail services', shape: 'tall', position: 'center', illustrative: true },
  { id: 'beauty', image: images.beauty, category: 'Beauty', title: 'Beauty services', shape: 'tall', position: 'center', illustrative: true },
  { id: 'manicure', image: images.interior, category: 'Nails', title: 'Manicure', shape: 'tall', position: 'center', illustrative: true },
  { id: 'salon', image: images.interior, category: 'Salon', title: 'Illustrative salon space', shape: 'wide', position: 'center', illustrative: true },
];

export const reels = [
  { poster: images.beauty, src: '/media/reel-beauty.mp4', title: 'Beauty preview', label: 'Demo reel' },
  { poster: images.hero, src: '/media/reel-mens.mp4', title: 'Hair preview', label: 'Demo reel' },
  { poster: images.interior, src: '/media/reel-bridal.mp4', title: 'Salon preview', label: 'Demo reel' },
];
