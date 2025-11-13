# Services Page - Visual Design Reference

## 🎨 Color Palette

### Primary Colors
- **Primary Red**: `#EE2B46` - Used for CTAs, active states, badges
- **Secondary Dark Blue**: `#132F38` - Used for headings, hover states
- **White**: `#FFFFFF` - Card backgrounds, text on colored buttons

### Text Colors
- **Headings**: `var(--secondary)` - Dark Blue
- **Body Text**: Gray-700 (#374151)
- **Muted Text**: Gray-500 (#6B7280)
- **Rating Stars**: Yellow-500 (#EAB308)

### Border Colors
- **Default**: Gray-200 (#E5E7EB)
- **Hover**: Primary Red
- **Active**: Primary Red

---

## 📐 Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│                    CONTAINER (responsive padding)        │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │              HERO SECTION                          │ │
│  │  ┌──────────────────┐  ┌──────────────────┐      │ │
│  │  │ Text Content     │  │ Lottie Animation │      │ │
│  │  │ - Title          │  │                  │      │ │
│  │  │ - Description    │  │                  │      │ │
│  │  │ - CTA Buttons    │  │                  │      │ │
│  │  └──────────────────┘  └──────────────────┘      │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │              SERVICES SECTION                      │ │
│  │                                                    │ │
│  │  Our Services                                      │ │
│  │  ━━━━━━ (gradient line)                          │ │
│  │                                                    │ │
│  │  ┌─────────────────────────────────────────────┐ │ │
│  │  │     FILTER CAROUSEL                         │ │ │
│  │  │  ◄ [All] [Web Dev] [Mobile] [UI/UX] ... ►  │ │ │
│  │  └─────────────────────────────────────────────┘ │ │
│  │                                                    │ │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────┐│ │
│  │  │ Service  │ │ Service  │ │ Service  │ │ ...  ││ │
│  │  │  Card 1  │ │  Card 2  │ │  Card 3  │ │      ││ │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────┘│ │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────┐│ │
│  │  │ Service  │ │ Service  │ │ Service  │ │ ...  ││ │
│  │  │  Card 4  │ │  Card 5  │ │  Card 6  │ │      ││ │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────┘│ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 Hero Section Details

### Desktop Layout (md+)
```
┌──────────────────────────────────────────────────────┐
│  Left Side (50%)        │  Right Side (50%)          │
│  ┌──────────────────┐   │  ┌──────────────────┐     │
│  │ [25+] Professional│   │  │                  │     │
│  │ Services Available│   │  │    Lottie        │     │
│  │                  │   │  │   Animation      │     │
│  │ Description text  │   │  │                  │     │
│  │ ...              │   │  │                  │     │
│  │                  │   │  │                  │     │
│  │ [Contact Now]    │   │  │                  │     │
│  │ → Hire us now    │   │  │                  │     │
│  └──────────────────┘   │  └──────────────────┘     │
└──────────────────────────────────────────────────────┘
```

### Mobile Layout (< md)
```
┌──────────────────────┐
│  ┌──────────────────┐│
│  │ [25+] Professional││
│  │ Services Available││
│  │                  ││
│  │ Description...   ││
│  │                  ││
│  │ [Contact Now]    ││
│  │ → Hire us now    ││
│  └──────────────────┘│
│                      │
│  ┌──────────────────┐│
│  │                  ││
│  │  Lottie Animation││
│  │                  ││
│  └──────────────────┘│
└──────────────────────┘
```

---

## 🎫 Service Card Anatomy

```
┌─────────────────────────────────────┐
│ ┌─────────────────────────────────┐ │
│ │      Service Image (h-52)       │ │
│ │                                 │ │
│ │  ┌──────────┐                  │ │
│ │  │ Category │ (badge top-left) │ │
│ │  └──────────┘                  │ │
│ └─────────────────────────────────┘ │
│                                     │
│  Service Title                      │
│  (2 lines max, ellipsis)           │
│                                     │
│  ⭐ 4.8 (123)      🕒 5 Days       │
│                                     │
│  ─────────────────────────────────  │
│                                     │
│  Starting at         [View Details]│
│  $299                              │
└─────────────────────────────────────┘
```

### Card Specifications
- **Width**: Responsive (1-4 columns)
- **Border**: 1px solid gray-200
- **Border Radius**: 12px (rounded-xl)
- **Hover Effects**:
  - Border → Primary color
  - Shadow → Elevated (xl)
  - Image → Scale 1.1x
  - Duration → 300ms

---

## 🎠 Filter Carousel Structure

```
┌──────────────────────────────────────────────────────┐
│  ◄  [All] [Web Development] [Mobile] [UI/UX]... ►   │
│      └─────────────────────────────────────┘         │
│           Scrollable Container                       │
│           (horizontal overflow-x)                    │
└──────────────────────────────────────────────────────┘
```

### Filter Button States

#### Inactive
```
┌─────────────────┐
│ Web Development │ ← White bg, gray text, gray border
└─────────────────┘
```

#### Active
```
┌─────────────────┐
│ Web Development │ ← Red bg, white text, no border
└─────────────────┘  Scale: 1.05x
```

#### Hover (inactive)
```
┌─────────────────┐
│ Web Development │ ← White bg, red text, red border
└─────────────────┘
```

---

## 📏 Spacing Scale

### Section Spacing
- Hero to Services: `20` units (80px)
- Services Title to Filters: `12` units (48px)
- Filters to Cards Grid: `12` units (48px)

### Card Grid Gaps
- Between cards: `6` units (24px)
- Responsive grid columns:
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3 columns
  - Large: 4 columns

### Card Internal Spacing
- Image height: `52` units (208px)
- Content padding: `5` units (20px)
- Element gaps: `3` units (12px)

---

## 🎭 Hover & Interaction States

### Card Hover
```css
Before:                    After:
┌─────────────┐           ┌─────────────┐
│   [Image]   │    →      │   [Image]   │ (scaled 1.1x)
│             │           │             │
│   Content   │           │   Content   │
└─────────────┘           └─────────────┘
Border: gray              Border: red
Shadow: none              Shadow: xl
```

### Button Hover
```css
Primary Button:
Before:           After:
[Contact Now]  →  [Contact Now]
bg: red           bg: dark blue

Secondary Button:
Before:           After:
[View Details] →  [View Details]
bg: red           bg: dark blue
```

### Filter Button Hover
```css
Before:           After:
┌──────────┐     ┌──────────┐
│   All    │  →  │   All    │
└──────────┘     └──────────┘
Border: gray      Border: red
Text: gray        Text: red
Scale: 1.0        Scale: 1.0
```

---

## 📱 Responsive Breakpoints

### Mobile (< 640px)
- Single column layout
- Filter arrows hidden
- Touch-friendly buttons (min 44px)
- Stacked hero elements

### Tablet (640px - 1024px)
- 2 column service grid
- Side-by-side hero
- Filter arrows visible
- Medium padding

### Desktop (1024px - 1280px)
- 3 column service grid
- Full hero layout
- All interactive elements
- Standard padding

### Large Desktop (> 1280px)
- 4 column service grid
- Spacious layout
- Larger typography
- Maximum padding

---

## 🎨 Typography Scale

### Headings
```
Hero Title:
  Mobile:  text-4xl (36px)
  Desktop: text-4xl (36px)
  2XL:     text-6xl (60px)
  Weight:  semibold (600)
  Font:    Poppins

Section Title:
  Mobile:  text-3xl (30px)
  Tablet:  text-4xl (36px)
  Desktop: text-5xl (48px)
  Weight:  bold (700)
  Font:    Raleway

Card Title:
  Size:    text-base (16px)
  Weight:  semibold (600)
  Font:    Lato
  Lines:   max 2 (line-clamp-2)
```

### Body Text
```
Hero Description:
  Size:    text-xs (12px)
  2XL:     text-sm (14px)
  Weight:  regular (400)
  Font:    Lato
  Color:   gray-700

Card Price:
  Size:    text-xl (20px)
  Weight:  bold (700)
  Font:    Lato
  Color:   secondary (dark blue)

Card Info:
  Size:    text-sm (14px) or text-xs (12px)
  Weight:  regular (400)
  Font:    Lato
  Color:   gray-500 to gray-700
```

---

## 🎯 Interactive Elements

### Buttons
```
Primary CTA:
  Padding:  px-7 py-3 (28px x 12px)
  Radius:   rounded-md (6px)
  Font:     text-sm semibold
  
Filter Button:
  Padding:  px-6 py-2.5 (24px x 10px)
  Radius:   rounded-full (pill)
  Font:     text-sm medium
  
Card Button:
  Padding:  px-4 py-2.5 (16px x 10px)
  Radius:   rounded-lg (8px)
  Font:     text-xs semibold
```

### Links
```
Standard Link:
  Color:    inherit
  Hover:    text-primary
  Duration: 200ms
  
Card Link:
  Display:  block
  Hover:    text-primary
  Duration: 200ms
```

---

## 🖼️ Image Handling

### Service Card Images
```javascript
Display:
  Width:     100% (fill)
  Height:    208px (h-52)
  Fit:       cover
  Position:  relative
  
Fallback:
  Source:    /img/no_image.jpg
  Condition: !service_images || length === 0
  
Optimization:
  Component: Next/Image
  Lazy:      true
  Sizes:     Responsive
```

### Category Badge Overlay
```
Position:  absolute top-3 left-3
Style:     bg-primary text-white
           px-3 py-1 rounded-full
Size:      text-xs font-semibold
```

---

## ⚡ Animation Details

### Image Zoom (Card Hover)
```css
Transform: scale(1.1)
Duration:  500ms
Easing:    ease-out
```

### Card Shadow Transition
```css
Property:  shadow
From:      none
To:        xl (large shadow)
Duration:  300ms
```

### Filter Button Scale
```css
Transform: scale(1.05)
Duration:  200ms
Active:    when selected
```

### Carousel Scroll
```css
Behavior:  smooth
Amount:    200px
Direction: left/right
Triggered: Arrow button clicks
```

---

## 🎪 Loading States

### Spinner Animation
```
┌──────────────┐
│              │
│      ●       │ ← Rotating border (animate-spin)
│              │    Color: Primary red
└──────────────┘    Size: h-12 w-12 (48px)
```

Display conditions:
- On initial page load
- While fetching services
- While fetching categories

---

## 📐 Grid System

### Service Cards Grid
```css
Grid Template:
  grid-cols-1           /* Mobile */
  sm:grid-cols-2        /* Tablet */
  lg:grid-cols-3        /* Desktop */
  xl:grid-cols-4        /* Large Desktop */

Gap:
  gap-6 (24px)

Container:
  w-full
  responsive padding
```

### Container Widths
```
Mobile:    100% (padding: 16px)
sm:        640px (padding: 24px)
md:        768px (padding: 24px)
lg:        1024px (padding: 32px)
xl:        1280px (padding: 32px)
2xl:       1536px (padding: 32px)
```

---

## 🎨 Gradient Elements

### Title Underline
```css
Width:      96px (w-24)
Height:     4px (h-1)
Colors:     from-primary to-secondary
Radius:     rounded-full
Position:   Below title (mt-3)
```

Visual:
```
Our Services
━━━━━━━━━━
 (gradient red → blue)
```

---

## 🔤 Font Families

### Primary Fonts
1. **Raleway** - Section titles, headings
2. **Poppins** - Hero text, UI elements
3. **Lato** - Body text, descriptions, card content

### Import Sources
```css
@import url('google-fonts/raleway');
@import url('google-fonts/poppins');
@import url('google-fonts/lato');
```

---

## 📊 Content Guidelines

### Service Card Content
- **Title**: 2-3 words, max 2 lines
- **Price**: Clear, prominent
- **Rating**: Star icon + number
- **Delivery**: Days with icon
- **Category**: Single word/short phrase

### Hero Content
- **Title**: 2-3 lines max
- **Description**: 2-3 sentences
- **CTAs**: 1-2 buttons max

---

This visual reference guide helps maintain consistency across the services page design.
