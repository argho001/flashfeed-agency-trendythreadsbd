# Design System Specification: Industrial-Luxury Editorial

## 1. Overview & Creative North Star

### Creative North Star: "The Global Atelier"
This design system is a bridge between the raw, industrial power of B2B garment manufacturing and the refined, high-end world of international fashion editorial. It moves away from the "template-heavy" look of standard industrial portals, instead adopting the persona of a digital curator. 

The experience is defined by **Intentional Asymmetry** and **Tonal Depth**. We break the traditional rigid grid by using oversized typography, overlapping image containers, and dramatic "breathing room" (generous whitespace). This system should feel like a premium physical lookbook—authoritative, minimalist, and deeply trustworthy.

---

## 2. Colors

The palette is anchored in deep, atmospheric tones contrasted by warm, organic neutrals and a signature gold accent that evokes craftsmanship.

### Palette Strategy
- **Dominant Background (`surface` / `#091421`):** A deep, nocturnal navy that provides an expensive, high-contrast backdrop for photography and gold accents.
- **Warm Off-White (`on-surface-variant` / `#d0c5b2`):** Used for primary text and subtle surfaces to avoid the harshness of pure white, leaning into a "premium paper" feel.
- **The Golden Thread (`primary` / `#e5c363` & `primary-container` / `#c8a84b`):** This is our accent. It must be used sparingly—for calls to action, active states, and key highlights—to maintain its perceived value.

### Layout Principles
- **The "No-Line" Rule:** 1px solid borders are strictly prohibited for defining sections. Structure must be created through background color shifts. For example, a `surface-container-low` section should transition directly into a `surface` section to define a boundary.
- **Surface Hierarchy & Nesting:** Treat the UI as layers of fine material. 
    - Use `surface-container-lowest` (#040f1b) for background utility areas.
    - Use `surface-container-highest` (#2b3544) for prominent "lifted" cards.
- **The Glass & Gradient Rule:** For floating navigation or modal overlays, use a semi-transparent `surface` color with a 20px backdrop-blur. Apply a subtle linear gradient to main CTAs (transitioning from `primary` to `primary-container`) to provide a metallic, tactile "soul."

---

## 3. Typography

The typography strategy relies on the tension between a high-fashion serif and a precision-engineered sans-serif.

### Typeface Roles
- **Headlines (Newsreader):** This serif choice communicates heritage and editorial authority. Use **Display-LG** and **Display-MD** for hero sections with tight letter-spacing (-0.02em) to create a "magisterial" look.
- **Body & Functional (Manrope):** A modern, geometric sans-serif that ensures clarity in B2B logistics and technical garment specs.

### Hierarchy Scale
- **Display-LG (3.5rem):** Reserved for hero titles and impactful editorial statements.
- **Headline-SM (1.5rem):** Used for section headers, always paired with generous top-padding.
- **Label-MD (0.75rem):** Used for technical data points (e.g., fabric weight, lead times), often set in All Caps with 0.1em letter spacing for an "industrial tag" aesthetic.

---

## 4. Elevation & Depth

We move beyond "Material" shadows toward a more atmospheric, organic sense of depth.

- **The Layering Principle:** Depth is primarily achieved through tonal shifts (e.g., placing a `surface-container-high` card on a `surface` background). This creates a soft "lift" without visual noise.
- **Ambient Shadows:** Where a floating effect is mandatory (e.g., a "Request Quote" modal), use a high-dispersion shadow: 
    - `Box-shadow: 0 20px 40px rgba(4, 15, 27, 0.4);`
    - The shadow color must be a dark tint of the background navy, never a generic grey.
- **The "Ghost Border" Fallback:** If a container requires a boundary (e.g., image frames), use the `outline-variant` token at 15% opacity. It should be felt, not seen.
- **Glassmorphism:** Use for persistent headers. 
    - `Background: rgba(9, 20, 33, 0.8); backdrop-filter: blur(12px);`

---

## 5. Components

### Buttons
- **Primary:** Filled `primary` (#e5c363) with `on-primary` (#3d2f00) text. Sharp `sm` (0.125rem) corners to maintain an industrial feel.
- **Secondary:** Transparent background with a `Ghost Border` and `primary` text.
- **Hover States:** Instead of a simple color change, use a slight horizontal scale (e.g., +4px width) to create a "sophisticated growth" effect.

### Input Fields
- **Style:** Minimalist. No background fill; only a bottom `outline-variant` line (1px). 
- **States:** On focus, the bottom line transitions to `primary` gold with a subtle 2px glow.

### Cards & Lists
- **Rule:** **No Divider Lines.** Separate list items using `body-lg` spacing (1rem) and subtle background-color alternates (Zebra striping using `surface` and `surface-container-low`).
- **Editorial Cards:** Images should have a slight `xl` (0.75rem) corner radius, while text containers remain sharp. This contrast creates a "framed photo" look.

### Additional Bespoke Components
- **The "Process Stepper":** Use ultra-fine 0.5px `primary` lines to connect production stages, mirroring the precision of garment stitching.
- **Texture Overlays:** Use a very faint grain texture (PNG overlay at 3% opacity) on all `surface` containers to mimic the tactile feel of luxury fabric.

---

## 6. Do’s and Don’ts

### Do
- **Use "White Space" as a Luxury:** Give elements twice as much room as you think they need.
- **Embrace Asymmetry:** Align text to the left while placing images off-center to create a dynamic, editorial flow.
- **Use High-Quality Imagery:** The system relies on "Factory-Chic" photography—high-contrast shots of machinery, fabric textures, and finished garments.

### Don’t
- **Don’t Use Default Shadows:** Never use the standard CSS `box-shadow: 0 2px 4px rgba(0,0,0,0.5)`. It destroys the premium feel.
- **Don’t Use Fully Opaque Borders:** Avoid "boxing in" content. Let the layout breathe.
- **Don’t Mix Multiple Serifs:** Stick strictly to the defined scale. Over-styling headings leads to a "cluttered" look rather than a "curated" one.
- **Don’t Use Pure Black:** Ensure all "dark" surfaces are the specific Navy `surface` token to maintain tonal warmth.