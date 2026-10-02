import { chromium } from 'playwright';

const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  args: ['--no-sandbox'],
});

for (const [name, width, height] of [['desktop', 1440, 1000], ['desktop-1100', 1100, 850], ['mobile', 390, 844], ['mobile-375', 375, 812]]) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: `qa-${name}.png` });
  const dimensions = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, viewport: innerWidth, title: document.title }));
  console.log(name, dimensions, errors);
  if (width > 800) {
    const header = await page.evaluate(() => {
      const rect = selector => document.querySelector(selector).getBoundingClientRect();
      const brand = rect('.brand');
      const nav = rect('.desktop-nav');
      const cta = rect('.header-book');
      return { brandRight: brand.right, navLeft: nav.left, navRight: nav.right, ctaLeft: cta.left, ctaVisible: getComputedStyle(document.querySelector('.header-book')).display !== 'none' };
    });
    console.log('header spacing', header);
    if (header.navLeft < header.brandRight + 8 || (header.ctaVisible && header.navRight > header.ctaLeft - 8)) throw new Error(`Header overlap at ${width}px`);
  }
  await page.close();
}

const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const galleryDesktop = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await galleryDesktop.goto('http://127.0.0.1:4173/gallery', { waitUntil: 'networkidle' });
for (const tile of await galleryDesktop.locator('.gallery-item').all()) await tile.scrollIntoViewIfNeeded();
await galleryDesktop.waitForLoadState('networkidle');
await galleryDesktop.locator('.gallery-filters').scrollIntoViewIfNeeded();
await galleryDesktop.screenshot({ path: 'qa-gallery-desktop.png' });
await galleryDesktop.locator('.gallery-grid').screenshot({ path: 'qa-gallery-grid.png' });
console.log('gallery total images', await galleryDesktop.locator('.gallery-item').count());
await galleryDesktop.close();
const routes = ['/', '/about', '/services', '/services/hair', '/services/beauty', '/services/makeup', '/services/bridal', '/services/mens-grooming', '/services/hair-treatments', '/gallery', '/reviews', '/booking', '/contact'];
for (const route of routes) {
  await page.goto(`http://127.0.0.1:4173${route}`, { waitUntil: 'networkidle' });
  const result = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, viewport: innerWidth, heading: document.querySelector('main h1')?.innerText }));
  console.log(route, result);
  if (result.width > result.viewport) throw new Error(`Horizontal overflow on ${route}`);
}
await page.goto('http://127.0.0.1:4173/gallery', { waitUntil: 'networkidle' });
await page.locator('.gallery-grid').scrollIntoViewIfNeeded();
await page.screenshot({ path: 'qa-gallery-mobile.png' });
await page.getByRole('button', { name: 'Bridal', exact: true }).click();
console.log('bridal filtered items', await page.locator('.gallery-item').count());
await page.locator('.gallery-item').first().click();
console.log('image modal visible', await page.locator('.image-modal').isVisible());
await page.keyboard.press('Escape');
await page.locator('.reels-grid').scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
console.log('reel playing', await page.locator('.reel-card video').first().evaluate(v => !v.paused && v.readyState >= 2));
await page.screenshot({ path: 'qa-reels-mobile.png' });
await page.goto('http://127.0.0.1:4173/booking', { waitUntil: 'networkidle' });
await page.screenshot({ path: 'qa-booking-mobile.png' });
await page.locator('[name="service"]').selectOption({ label: 'Hair' });
await page.locator('[name="date"]').fill('2026-10-10');
await page.locator('[name="time"]').fill('11:00');
await page.locator('[name="name"]').fill('Demo Visitor');
await page.locator('[name="phone"]').fill('9876543210');
page.on('popup', popup => popup.close().catch(() => {}));
await page.getByRole('button', { name: 'Continue on WhatsApp' }).click();
await page.waitForURL('**/booking/success');
console.log('booking success', await page.locator('.success-card h1').innerText(), 'WhatsApp link', await page.locator('.success-actions a[href^="https://wa.me/"]').count());
await page.close();

await browser.close();
