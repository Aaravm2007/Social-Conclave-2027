# Floral details throughout the landing page

Asset: `public/images/hero/floral-page-bloom.webp` (900 × 600, transparent WebP).

Created with the built-in image generation tool, using the existing floral hero as the reference. Prompt: isolate one photoreal lavender-white bloom with a dark plum centre, finely ribbed translucent petals, a short green stem, and delicate trailing petals flowing left; transparent background; preserve natural colour and texture; no text, scenery, duplicate flowers, or background rectangle.

The reusable, decorative `FloralAccent` component frames the experience heading and final registration invitation. Stems continue past the right and left viewport edges respectively, with reserved space to protect the copy and controls. The experience bloom can extend above its section into the preceding section, so its upper petals are visible as it enters the viewport. Horizontal clipping occurs at the page edge rather than at each section. The agenda gallery and original hero are retained.

A softly staggered 11–12-second breathing animation runs only near the viewport, and is disabled for reduced-motion preferences. The decorative images have empty alt text, are hidden from assistive technology, do not receive pointer events, share one cached asset, and load lazily.

Validation: production build and lint pass; desktop and 390px mobile layouts inspected; no mobile horizontal overflow; asset loaded at its intended dimensions; offscreen animations confirmed paused; production asset smoke check passes.

The programme day selector echoes the navigation with a capsule outline and a sliding, rounded selected-day indicator. Mouse, touch, and existing arrow/Home/End keyboard navigation remain supported; the indicator transition is disabled for reduced-motion preferences.

The reading scale uses 17px desktop and 16px mobile body copy, clearer labels and metadata, less compressed headings, and larger controls and footer text. Long copy uses comfortable line lengths and leading. The agenda card typography is increased without changing its artwork, order, or balanced grid.
