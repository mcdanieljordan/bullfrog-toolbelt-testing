# BullFrog Toolbelt Design System

BullFrog Toolbelt is a free teacher-tools directory website — a single place teachers go to find vetted, free classroom tech tools by subject and grade. This design system was built from a brand brief given directly by the user (no existing codebase or Figma file): a logo image upload, a slogan, six brand colors, a type pairing, and a card-shape direction. There is no other source of truth to sync against; if the brand evolves, update the tokens and re-derive.

## Index

- `styles.css` — root stylesheet, imports everything under `tokens/`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radius-shadow.css`, `textures.css`.
- `assets/logo/` — the lily-pad mark, full source image and cropped versions.
- `components/` — `buttons/Button`, `tags/Tag`, `cards/ToolCard`, `forms/Input`, `navigation/NavBar`.
- `ui_kits/directory/` — the directory homepage, composed from the components above.
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand mark, shape, texture) shown in the Design System tab.
- `SKILL.md` — portable skill file for using this system in Claude Code.

## Content fundamentals

- **Voice**: warm, plain, teacher-to-teacher. Short sentences. No corporate jargon, no growth-hacking language ("leverage", "seamless", "solutions").
- **Tone examples**: "One Link to Rule Them All" (the slogan — playful, a little tongue-in-cheek, never twee). "Built by teachers, for teachers." "Free, teacher-vetted tools."
- **Person**: mostly addresses "you" as the teacher when instructional ("Search 400+ free teacher tools..."); otherwise a plain third-person catalog voice for tool descriptions.
- **Casing**: sentence case for body copy and buttons ("Visit Tool" is the one exception, treated as a fixed CTA label); headings use sentence case, not title case.
- **Emoji**: none in UI chrome or copy. The only "mascot" is the lily-pad mark — no frog or animal imagery, and no emoji standing in for one.
- **Numbers**: used sparingly and only when concrete and true to the product ("400+ tools"), never invented stats.

## Visual foundations

- **Colors**: mist (#F1F6EF) is the only page background; ink (#20291F) is the only body text color. Lily green is the primary action color (buttons, links, active states). Pond deep green is reserved for the header/footer-weight dark surfaces — it should read as a distinct "band," not tint every card. Sun yellow is a highlight only: badges ("New"/"Free"), the header CTA, and focus rings — never body text at small sizes (contrast is tuned for icons/large text, not paragraphs). Mud brown is a quiet secondary accent (secondary buttons, muted taxonomy) — used deliberately less often than the other three.
- **Type**: Baloo 2 for all headings — rounded, bold, friendly, never used below `--text-xl`. Inter for everything else: body copy, buttons, form fields, nav links. Never mix — headings are never in Inter, body copy is never in Baloo 2.
- **Spacing**: 4px base scale (`--space-1` … `--space-9`). Generous section padding (`--space-7`/`--space-8`); tight internal card padding (`--space-3`/`--space-5`).
- **Shape — the lily-pad notch**: every card, image frame, and icon tile uses an asymmetric corner radius (`28px 28px 28px 6px` at card scale, `14px 14px 14px 4px` at icon-tile scale) — three corners generously rounded, one corner squared off. This reads as a leaf notch without any SVG clip-path, so it renders identically everywhere. Buttons and inputs stay full pill (`--radius-pill`) — the notch is a *card* signature, not applied to every shape.
- **Backgrounds**: flat color only, no gradients. The ripple texture (`.ripple-bg` / `.ripple-bg-dark` in `tokens/textures.css`) is a very low-contrast repeating concentric-ring pattern for hero/section backgrounds — used at most once or twice per page, never behind body text, never at full opacity.
- **Imagery**: none in this initial system beyond the logo mark — no stock photography direction has been given yet. If/when product screenshots or teacher photos are added, treat them the same restrained way as the ripple texture: supporting, not decorative-heavy.
- **Elevation**: `--shadow-sm` at rest, `--shadow-md`/`--shadow-lg` on hover/focus — soft and low-contrast, tuned to the mist background, never a hard drop shadow.
- **Motion**: subtle only. Cards lift 3px and deepen their shadow on hover (`--duration-normal`, `--ease-standard`). Buttons scale to 0.97 on press. No bounce, no spring overshoot — calm, not playful-bouncy.
- **Hover/press/focus states**: hover = one ramp step darker (buttons) or a soft tint (secondary/ghost buttons, filter tags); press = scale-down 0.97; focus-visible = a 2px sun-yellow ring, offset from the mist/dark background — never the browser default blue.
- **Borders**: 1–2px, always `var(--color-border)` (a soft sage-neutral), never black.
- **Transparency/blur**: not used. Everything is opaque flat color — keeps the "calm, uncluttered" brief honest.

## Iconography

No icon set was provided. Emoji glyphs are used as lightweight placeholder icons in the ToolCard/category examples (🎮 📌 🎥 etc.) — swap these for a real icon set (recommend a rounded-style set like Phosphor "duotone" or Lucide at a heavier stroke, to match Baloo 2's roundedness) once the product has one. No SVGs were hand-drawn for this system.

## Logo

- `assets/logo/lilypad-mark-full.jpg` — the uploaded source image (lily pad mark on its pond-deep background, with the concentric ripple rings).
- `assets/logo/lilypad-mark.png` — tightly cropped 512×512 mark, still on its dark ripple background — use this as the primary lockup mark (nav bar, favicon, cover).
- `assets/logo/lilypad-mark-64.png` — small/favicon-scale version.

There is no separate "icon-only, transparent background" cutout of just the leaf shape — the mark was supplied as a flat image with its dark background baked in, not as vector/layered source, so isolating the leaf alone isn't possible without redrawing it (which this system deliberately avoids). If a transparent cutout is needed, ask the brand owner for the layered/vector source.

## Caveats / ask

- No codebase, Figma file, or existing site was provided — every token, component, and the one UI kit screen were derived from the brief above, not from a real product. Treat this as v1.
- The component set (Button, Tag, ToolCard, Input, NavBar) is sized to what a directory homepage needs, not a full inventory — flag anything else you need (filters/dropdowns, pagination, a tool detail page, a submission form) and it can be added.
- Icons are emoji placeholders — swap for a real icon set when one is chosen.
- The "lily-pad notch" shape is expressed as an asymmetric border-radius rather than a literal leaf-vein cut, for cross-browser reliability. If you want the sharper literal notch cut into the corner, that needs a clip-path pass and a visual review — happy to build it as a v2 if the flatter asymmetric-radius version doesn't feel distinctive enough.
