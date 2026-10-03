import * as uplooks from './clients/uplooks.js';
import * as naaee from './clients/naaee.js';

const uplooksClient = {
  id: 'uplooks',
  name: 'Uplooks Unisex Saloon',
  category: 'Unisex Saloon',
  phone: uplooks.phone,
  phoneHref: uplooks.phoneHref,
  whatsappNumber: '918529591122',
  address: uplooks.address,
  mapsHref: uplooks.mapsHref,
  rating: '5.0',
  reviews: '300+',
  hours: '9:00 AM – 10:30 PM',
  hoursShort: '9 AM – 10:30 PM',
  maxBookingTime: '22:30',
  logo: '/media/uplooks-logo.png',
  locationShort: 'Mansarovar, Jaipur',
  seoTitle: 'Uplooks Unisex Saloon | Jaipur',
  seoDescription: 'Uplooks Unisex Saloon, Jaipur. Premium hair, beauty, bridal and grooming experiences designed around you.',
};

export const isNaaee = import.meta.env.VITE_SALON_CLIENT !== 'uplooks';
const selected = isNaaee ? naaee : uplooks;
export const client = isNaaee ? naaee.client : uplooksClient;
export const phone = client.phone;
export const phoneHref = client.phoneHref;
export const address = client.address;
export const mapsHref = client.mapsHref;
export const images = selected.images;
export const services = selected.services;
export const gallery = selected.gallery;
export const reels = selected.reels;
