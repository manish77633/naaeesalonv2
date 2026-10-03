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
  { id: 'hair', image: images.hero, category: 'Hair', title: 'Illustrative hair image', shape: 'feature', position: 'center', illustrative: true },
  { id: 'styling', image: '/media/gallery/mens-styling.webp', category: 'Hair', title: 'Illustrative hair styling image', shape: 'tall', position: 'center 24%', illustrative: true },
  { id: 'layered-hair', image: '/media/gallery/layered-hair.webp', category: 'Hair', title: 'Illustrative hair image', shape: 'tall', position: 'center 47%', illustrative: true },
  { id: 'hair-portrait', image: '/media/gallery/hair-portrait.webp', category: 'Beauty', title: 'Illustrative beauty image', shape: 'tall', position: 'center 20%', illustrative: true },
  { id: 'glossy-hair', image: '/media/gallery/glossy-hair.webp', category: 'Hair', title: 'Illustrative hair image', shape: 'tall', position: 'center 48%', illustrative: true },
  { id: 'long-hair-styling', image: '/media/gallery/long-hair-styling.webp', category: 'Hair', title: 'Illustrative hair styling image', shape: 'tall', position: 'center 28%', illustrative: true },
  { id: 'occasion-makeup', image: '/media/gallery/occasion-makeup.webp', category: 'Beauty', title: 'Illustrative beauty image', shape: 'tall', position: 'center 28%', illustrative: true },
  { id: 'bridal-red', image: '/media/gallery/bridal-red.webp', category: 'Beauty', title: 'Illustrative beauty image', shape: 'feature', position: 'center 22%', illustrative: true },
  { id: 'bridal-yellow', image: '/media/gallery/bridal-yellow.webp', category: 'Beauty', title: 'Illustrative beauty image', shape: 'tall', position: 'center 25%', illustrative: true },
  { id: 'bridal-profile', image: '/media/gallery/bridal-profile.webp', category: 'Beauty', title: 'Illustrative beauty image', shape: 'square', position: 'center', illustrative: true },
  { id: 'bridal-detail', image: '/media/gallery/bridal-detail.webp', category: 'Beauty', title: 'Illustrative beauty image', shape: 'square', position: 'center', illustrative: true },
  { id: 'bridal-seated', image: '/media/gallery/bridal-seated.webp', category: 'Beauty', title: 'Illustrative beauty image', shape: 'square', position: 'center', illustrative: true },
  { id: 'bridal-hairstyle', image: '/media/gallery/bridal-hairstyle.webp', category: 'Hair', title: 'Illustrative hair image', shape: 'square', position: 'center', illustrative: true },
  { id: 'mens-hair-side', image: '/media/gallery/mens-hair-side.webp', category: 'Hair', title: 'Illustrative hair image', shape: 'tall', position: 'center 42%', illustrative: true },
  { id: 'mens-portrait', image: '/media/gallery/mens-portrait.webp', category: 'Hair', title: 'Illustrative hair image', shape: 'tall', position: 'center 28%', illustrative: true },
  { id: 'salon-space', image: images.interior, category: 'Salon', title: 'Illustrative salon space', shape: 'wide', position: 'center 55%', illustrative: true },
];

export const reels = [
  { poster: images.beauty, src: '/media/reel-beauty.mp4', title: 'Beauty preview', label: 'Demo reel' },
  { poster: images.hero, src: '/media/reel-mens.mp4', title: 'Hair preview', label: 'Demo reel' },
  { poster: images.interior, src: '/media/reel-bridal.mp4', title: 'Salon preview', label: 'Demo reel' },
];
