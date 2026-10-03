# Salon site configurations

Responsive multi-page website based on the supplied Uplooks design reference. NAAEE SALON is the default client for this repository. The original Uplooks data remains in `src/clients/uplooks.js`.

## Run locally

```bash
npm install
npm run dev
```

`npm run build` creates the production site in `dist/`. Hosting must serve `index.html` for all page routes.

To build the unchanged Uplooks configuration, run `npm run build:uplooks`. Vercel uses the default NAAEE configuration and the SPA rewrite in `vercel.json`.

NAAEE currently uses a text logo placeholder and illustrative salon images and demo reels. Replace these with approved NAAEE assets when available. The appointment flow opens WhatsApp at the supplied phone number; confirm that this number accepts WhatsApp messages before relying on online booking.

## Uplooks media notes

## Replace demo media

- Site images and the supplied logo live in `public/media/`.
- Replace `hero-v2.webp`, `hero-mobile.webp`, `beauty.webp`, `bridal.webp`, `mens.webp`, and `interior.webp` with approved Uplooks photographs of the same names.
- Replace `reel-beauty.mp4`, `reel-mens.mp4`, and `reel-bridal.mp4` with real portrait videos. Their poster images and labels are listed in `src/data.js`.
- The current reels are short motion previews made from illustrative photos. They autoplay muted and loop while visible.
- The gallery now contains 14 distinct user-supplied photos in `public/media/gallery/`; two duplicate attachments were omitted. The salon interior tile is still illustrative. Add verified reviews to the reviews page when available.
- The site currently displays the salon-provided 5.0 Google rating and the reference's 300+ customer figure. Public directories show different rating figures; verify the live Google listing and customer figure before publishing.

## Booking

The form prepares a WhatsApp message to the supplied salon number. The visitor must send that message in WhatsApp; the success page makes this clear and provides a second send link. There is no booking server or automatic appointment confirmation.

## Image creation

Illustrative salon images were made using the built-in image generation tool with prompts for: a unisex editorial hero, a separate mobile hero, an Indian bridal portrait, a salon interior, a men's grooming portrait, and a beauty portrait. The revised `hero-v2.webp` prompt placed both models on the right and reserved the dark left half for heading and buttons. All prompts used the reference's warm ivory, espresso, and bronze editorial direction and excluded logos and text. The supplied logo was used unchanged.
