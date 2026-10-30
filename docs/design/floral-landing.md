# Floral landing page

The hero uses the floral cobalt composition from https://socialconclave.org/, supplied by the user as the design reference. Background and Social Conclave / UN Academic Impact logos were obtained from the rendered reference page and saved as local assets under `public/images/hero/floral-*`. The NMIMS logo uses the existing transparent `public/images/logos/nmims-transparent.png`, rendered white for contrast on blue. Optimised copies preserve the supplied artwork; no new generated imagery is used for this version.

The title, event details, links, and navigation are live HTML. The remaining landing page sections retain their existing content.

## Motion

The reference's `bgDrift` animation was inspected in the browser. Its 25-second ease-in-out cycle moves from scale 1.06 to 1.09 with a small diagonal drift, returning seamlessly to its starting point. The local `floral-breathe` animation follows those values. Only the decorative background moves. The animation pauses when the hero is offscreen and is disabled for `prefers-reduced-motion: reduce`.

## Validation

Production build, production smoke check, desktop and mobile layouts, registration and agenda anchor links, loaded hero assets, and running animation were checked. All hero content remains separate from the background image.

## Section handoff and navigation

The former lime ticker now continues the cobalt hero. A 160px blue-to-cream gradient (120px on mobile) bridges into the partner section, followed by lighter editorial spacing. Content reveals once with a short opacity/vertical transition; reduced-motion preferences show everything without animation.

The floating navigation samples its actual screen position and follows the surface underneath, including the gradient. It updates text contrast and the document's theme-color metadata as the page moves between blue, cream, and dark green sections. Browser tab/chrome tinting depends on the browser's support and user settings. Its position and surface colour transitions are eased; native scrolling and anchor links remain intact.
