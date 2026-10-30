# Website image enhancement

Sixteen low-resolution assets were enhanced using the built-in image generation tool: nine past-guest portraits, five agenda artworks, the event booklet photo, and Social Impact. The larger supplied NMIMS, Academic Impact, Social Conclave wordmark and favicon were retained at their existing high resolution. Flowers remain removed from the page.

Final website assets are in `public/images/enhanced/`. Originals remain in `public/images/`.

- Portraits: 512 px and 1024 px WebP variants (originals were 189–257 px).
- Agenda artwork: 800 px and 1600 px WebP variants.
- Event image: 960 px and 1920 px WebP variants (original was 720 px).
- Social Impact: transparent 1024 px PNG (original was 158 px). Original transparent padding and display footprint are retained.

The page uses `srcSet`, `sizes`, explicit dimensions, lazy loading, and asynchronous decoding for the photos. The browser selects the appropriate resolution for the screen. Generative restoration estimates fine detail from the supplied images; the original files remain available for comparison.

The exact prompts and final saved paths are recorded in `image-enhancement-manifest.json`. Dimensions are recorded in `image-enhancement-report.json`.
