# Design System — Nguyen Thanh Tam Portfolio

## Design System Configuration

### Colors
- **Background**: `#060818` (Deep Midnight Blue)
- **Primary Text**: `rgba(255, 255, 255, 0.95)` (High contrast readability)
- **Muted Text**: `rgba(255, 255, 255, 0.55)` (Soft readability)
- **Accents**:
  - Blue: `#3b82f6` (System, Cloud)
  - Purple: `#8b5cf6` (Intelligence, AI)
  - Green: `#10b981` (Success, Live Demo)
  - Orange: `#f97316` (Attention, Transitions)
- **Glassmorphism Base**:
  - Background: `rgba(255, 255, 255, 0.03)`
  - Border: `rgba(255, 255, 255, 0.07)`
  - Hover Border: `rgba(59, 130, 246, 0.3)`

### Typography
- **Display Font (Headings)**: `Be Vietnam Pro` (sans-serif, bold/extra-bold weights, perfect Vietnamese diacritics support)
- **Text Font (Body)**: `Manrope` (sans-serif, highly legible, clean and modern body typeface with great Vietnamese support)
- **Hierarchy**:
  - `h1`: `clamp(2.5rem, 6vw, 4.5rem)`, bold, solid white.
  - `h2`: `2rem`, bold.
  - `h3`: `1rem`, semi-bold, uppercase letter-spacing.
  - `body`: `14px` or `15px`, line-height `1.6`.

### Layout & Spacing
- **Container**: Max width `1100px`, centered.
- **Section Padding**: `100px 40px` (desktop), `80px 20px` (mobile).
- **Cards**: Flat single-layer rounded glassmorphism cards. *Anti-pattern: Do not nest cards inside cards.*

### Motion
- **Transitions**: `all 0.25s cubic-bezier(0.4, 0, 0.2, 1)`.
- **Easing**: Custom cubic-bezier for smooth reveal and hover. Avoid elastic/bounce animations.
