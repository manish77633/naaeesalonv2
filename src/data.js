export const phone = '+91 85295 91122';
export const phoneHref = 'tel:+918529591122';
export const address = 'Front Of Balaji Paradise, Muhana Mandi Rd, near Kesar Nagar Chauraha, Kalyanpura, Mansarovar, Jaipur, Rajasthan 302020';
export const mapsHref = 'https://www.google.com/maps/search/?api=1&query=Uplooks+Unisex+Saloon+Mansarovar+Jaipur';

export const images = {
  hero: '/media/hero-v2.webp',
  bridal: '/media/bridal.webp',
  interior: '/media/interior.webp',
  mens: '/media/mens.webp',
  beauty: '/media/beauty.webp',
};

export const services = [
  { slug: 'hair', title: 'Hair', short: 'Cuts, colour & styling', image: images.beauty, intro: 'Hair that feels entirely yours.', featured: ['Haircut', 'Hair Styling', 'Hair Colour', 'Hair Wash', 'Hair Treatments', 'Blow Dry'] },
  { slug: 'beauty', title: 'Beauty', short: 'Care for every day', image: images.beauty, intro: 'Considered care for your everyday glow.', featured: ['Facials', 'Clean-up', 'Skin Care', 'Threading', 'Waxing', 'Manicure & Pedicure'] },
  { slug: 'makeup', title: 'Makeup', short: 'Looks worth remembering', image: images.bridal, intro: 'Makeup that looks and feels like you.', featured: ['Occasion Makeup', 'Party Makeup', 'Eye Makeup', 'Makeup Consultation'] },
  { slug: 'bridal', title: 'Bridal', short: 'Your day, your look', image: images.bridal, intro: 'Every detail, beautifully considered.', featured: ['Bridal Makeup', 'Bridal Hair', 'Pre-Bridal Beauty', 'Bridal Consultation'] },
  { slug: 'mens-grooming', title: "Men’s Grooming", short: 'A sharper kind of care', image: images.mens, intro: 'Modern grooming, made personal.', featured: ['Haircut', 'Hair Styling', 'Beard Grooming', 'Men’s Facials', 'Hair Care'] },
  { slug: 'hair-treatments', title: 'Hair Treatments', short: 'Restore & refresh', image: images.interior, intro: 'Care that goes beyond the finish.', featured: ['Hair Spa', 'Scalp Care', 'Repair Treatments', 'Consultation'] },
];

export const gallery = [
  { id: 'bridal-red', image: '/media/gallery/bridal-red.webp', category: 'Bridal', title: 'The bridal edit', shape: 'feature', position: 'center 22%' },
  { id: 'mens-styling', image: '/media/gallery/mens-styling.webp', category: 'Men', title: 'The finishing touch', shape: 'tall', position: 'center 24%' },
  { id: 'layered-hair', image: '/media/gallery/layered-hair.webp', category: 'Hair', title: 'Layers in motion', shape: 'tall', position: 'center 47%' },
  { id: 'occasion-makeup', image: '/media/gallery/occasion-makeup.webp', category: 'Makeup', title: 'A look for the occasion', shape: 'tall', position: 'center 28%' },
  { id: 'mens-hair-side', image: '/media/gallery/mens-hair-side.webp', category: 'Men', title: 'Men’s hair styling', shape: 'tall', position: 'center 42%' },
  { id: 'bridal-yellow', image: '/media/gallery/bridal-yellow.webp', category: 'Bridal', title: 'A golden bridal look', shape: 'tall', position: 'center 25%' },
  { id: 'hair-portrait', image: '/media/gallery/hair-portrait.webp', category: 'Beauty', title: 'A fresh new look', shape: 'tall', position: 'center 20%' },
  { id: 'glossy-hair', image: '/media/gallery/glossy-hair.webp', category: 'Hair', title: 'Gloss and shine', shape: 'tall', position: 'center 48%' },
  { id: 'mens-portrait', image: '/media/gallery/mens-portrait.webp', category: 'Men', title: 'A groomed finish', shape: 'tall', position: 'center 28%' },
  { id: 'long-hair-styling', image: '/media/gallery/long-hair-styling.webp', category: 'Hair', title: 'Long hair styling', shape: 'tall', position: 'center 28%' },
  { id: 'salon-space', image: images.interior, category: 'Salon', title: 'The salon space', shape: 'wide', position: 'center 55%', illustrative: true },
  { id: 'bridal-profile', image: '/media/gallery/bridal-profile.webp', category: 'Bridal', title: 'Bridal profile', shape: 'square', position: 'center' },
  { id: 'bridal-detail', image: '/media/gallery/bridal-detail.webp', category: 'Bridal', title: 'Bridal details', shape: 'square', position: 'center' },
  { id: 'bridal-seated', image: '/media/gallery/bridal-seated.webp', category: 'Bridal', title: 'The celebration look', shape: 'square', position: 'center' },
  { id: 'bridal-hairstyle', image: '/media/gallery/bridal-hairstyle.webp', category: 'Hair', title: 'Occasion hair', shape: 'square', position: 'center' },
];

export const reels = [
  { poster: images.beauty, src: '/media/reel-beauty.mp4', title: 'The beauty edit', label: 'Demo reel' },
  { poster: images.mens, src: '/media/reel-mens.mp4', title: 'The grooming edit', label: 'Demo reel' },
  { poster: images.bridal, src: '/media/reel-bridal.mp4', title: 'The bridal edit', label: 'Demo reel' },
];
