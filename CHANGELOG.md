# What Was Wrong → What Was Fixed

A record of issues found on the live shrejalimpex.com and how this redesign addresses each one.

| # | Original site | This redesign |
|---|---|---|
| 1 | Built on a free, generic Colorlib Bootstrap template — identical to hundreds of other small-business sites. | Custom design system: bespoke color palette (saffron/sindoor/paddy-green, not a stock theme), Fraunces + Manrope + JetBrains Mono type pairing, custom SVG grain motif used as a signature element throughout. |
| 2 | Hero image was an unrelated stock photo — filename literally translates to "the danger of adulterated rice" (`003370200_1501227685-Bahaya-Beras-Oplosan-Bagi-Tubuh.jpg`). | Hero replaced with an animated, brand-owned SVG grain-field illustration — no stock photography, no risk of an embarrassing filename or irrelevant image. |
| 3 | Inconsistent brand name: footer says "Shejal Impex," everywhere else says "Shrejal Impex." | Name is consistent site-wide: "Shrejal Impex Pvt. Ltd." everywhere, including the footer. |
| 4 | No real product photography for any of the 6 brands — brand names were just text links with no product page. | Every brand has a dedicated section on `brands.html` with real variant names (Gauri Tibar, Gauri Premium, Saira Banu's Sella range, etc.), pulled from the actual product listing pages. |
| 5 | Zero trust signals — no certifications, no company history, no real numbers about the operation. | Surfaced concrete facts already true of the business but never shown: 1,55,000 sq ft plant, 600 MT/day production, 20,000 MT storage, 50+ years procurement experience, founding year (1960), installed machinery list (Bühler "Z Series," Turbo Air de-stoners, etc.). |
| 6 | Testimonials existed but were buried on the About page in broken, unstructured English with no visual design. | Testimonials promoted onto the homepage and About page as designed cards, lightly cleaned up for grammar while keeping the original names and sentiment. |
| 7 | Navigation was thin — "Brands" only expanded to 2 sub-items despite 6 brand names appearing elsewhere in the footer. | Brands is a first-class page with all 6 brands, anchor-linked from the nav, homepage, and footer. |
| 8 | No mobile-first design consideration; old Bootstrap-era responsiveness. | Fully responsive from 390px mobile up, with a slide-in mobile nav, fluid type scale (`clamp()`), and a tested layout at both desktop and mobile widths. |
| 9 | Static, no motion — the site felt lifeless for a food/heritage brand. | Scroll-reveal animations, animated stat counters, a floating grain-field hero, hover states on every interactive element, and `prefers-reduced-motion` respected for accessibility. |
| 10 | Enquiry/Contact were just anchor links on the homepage with no real form. | Dedicated `contact.html` with a structured enquiry form (name, company, phone, email, product interest, message) that routes to `enquiry@gauririce.com`. |
| 11 | Vision page was a single sentence with a random stock image. | Vision page keeps the original line intact but adds four supporting "pillars" grounded in facts already on the old site (quality process, nationwide reach, zero-defect processing, procurement legacy) — nothing invented, just organized. |
| 12 | No distribution/reach information despite serving 13+ states. | State-by-state distribution shown as a chip cloud on the homepage. |

## Honest caveats
- Product images are custom SVG sack illustrations with brand monograms, not real photography — the old site's photos weren't reusable at production quality, and stock photos caused problem #2 above. Swap in real photography when available.
- The enquiry form has no backend yet (see README) — it's a `mailto:` fallback suitable for a pitch preview, not a production form.
- Some brand descriptions (e.g. for Zara, ST, Era) are reasonable marketing copy written to fill a real content gap — the original site never described these brands individually, only listed product photos under each name.
