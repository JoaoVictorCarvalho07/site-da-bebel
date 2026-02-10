# Adaptive Text Color System

## Overview

Your site now has a comprehensive system for automatically adjusting text color based on background brightness. This ensures text is always readable, whether it's on light or dark backgrounds.

## Three Approaches Available

### 1. CSS Utility Classes (Recommended for Most Cases)

The simplest approach. Use these pre-built CSS classes:

#### `text-on-light` - For light backgrounds
```jsx
<div className="bg-white p-6 text-on-light">
  <h1>Título em fundo claro</h1>
  <p>Texto escuro com sombra clara</p>
</div>
```

#### `text-on-dark` - For dark backgrounds
```jsx
<div className="bg-black p-6 text-on-dark">
  <h1>Título em fundo escuro</h1>
  <p>Texto branco com sombra escura</p>
</div>
```

#### `text-shadow-contrast` - Add contrast shadow to any text
```jsx
<h1 className="text-white text-shadow-contrast">
  Texto com sombra de contraste
</h1>
```

---

### 2. ContrastText Components (For Dynamic Colors)

Use React components when background color/image is dynamic:

#### `<ContrastText>` - Generic wrapper
```jsx
<div className="bg-gradient-to-r from-blue-900 to-blue-600 p-6">
  <ContrastText className="text-lg">
    Este texto se adapta automaticamente
  </ContrastText>
</div>
```

#### `<ContrastHeading>` - For headings (h1-h6)
```jsx
<div className="bg-purple-800 p-6">
  <ContrastHeading level={1} className="text-3xl font-bold">
    Título que se adapta
  </ContrastHeading>
  <ContrastText>Parágrafo adaptativo</ContrastText>
</div>
```

---

### 3. Programmatic Detection (For Custom Logic)

Use the contrast utility functions directly:

```jsx
import { getContrastTextColor, isDarkBackground } from '@/lib/contrast';

// Get the appropriate text color class
const textColor = getContrastTextColor('rgb(0, 0, 0)');
// Returns: 'text-white' | 'text-black'

// Check if background is dark
const isDark = isDarkBackground('#1F3A34');
// Returns: boolean
```

---

## Real-World Examples

### Hero Section with Image
```jsx
<div
  className="relative h-96 p-8"
  style={{
    backgroundImage: 'url(/image.jpg)',
    backgroundSize: 'cover',
  }}
>
  {/* Dark overlay ensures text readability */}
  <div className="absolute inset-0 bg-black/40" />
  
  <div className="relative z-10">
    <h1 className="text-on-dark text-4xl font-bold">
      Título sobre imagem
    </h1>
    <p className="text-on-dark mt-4">
      Descrição do projeto
    </p>
  </div>
</div>
```

### Card Grid with Variable Backgrounds
```jsx
{cards.map(card => (
  <div
    key={card.id}
    className="p-6 rounded-lg"
    style={{ backgroundColor: card.color }}
  >
    <ContrastHeading level={2} className="text-2xl font-bold">
      {card.title}
    </ContrastHeading>
    <ContrastText className="mt-2">
      {card.description}
    </ContrastText>
  </div>
))}
```

### Navigation Bar (Already Implemented)
The NavBar component automatically detects background color as you scroll:

```jsx
// src/components/NavBar.tsx already handles this:
// - Detects background at navbar position
// - Changes text from white → black or black → white
// - Smooth transition during scroll
```

---

## Best Practices

### ✅ DO
- Use `text-on-light` and `text-on-dark` for solid color backgrounds
- Use `ContrastText` components for gradient or image backgrounds
- Always add an overlay (dark or light) over images for text
- Test on both light and dark sections of your site
- Use CSS shadows to enhance contrast on busy backgrounds

### ❌ DON'T
- Mix light text with light backgrounds
- Use white text on yellow or light green without shadows
- Assume all backgrounds are either fully light or fully dark
- Forget to test text readability on your actual images

---

## Customization

### Adjust Text Shadow
Edit `src/index.css`:

```css
.text-on-dark {
  @apply text-white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5); /* Adjust shadow */
}

.text-on-light {
  @apply text-black;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.5);
}
```

### Change Luminance Threshold
Edit `src/lib/contrast.ts`:

```typescript
// Current: 0.5 (50% brightness)
// Lower = more backgrounds treated as "dark"
// Higher = more backgrounds treated as "light"
return luminance < 0.5 ? 'text-white' : 'text-black';
```

---

## File Structure

```
src/
├── lib/
│   └── contrast.ts          # Color detection utilities
├── hooks/
│   └── useContrastText.ts   # React hook for dynamic colors
├── components/
│   ├── ContrastText.tsx     # React components
│   ├── ContrastGuide.tsx    # Documentation component
│   └── NavBar.tsx           # Already using adaptive colors
└── index.css                # CSS utility classes
```

---

## Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge - Full support
- **Color parsing**: Supports hex, RGB, HSL formats
- **Accessibility**: Uses WCAG luminance calculations for accurate detection

---

## Performance Notes

- `ContrastText` components use refs and DOM queries - minimal overhead
- CSS classes (`text-on-light`, `text-on-dark`) - zero runtime cost
- NavBar detection runs only on scroll - optimized with passive listener
- No external libraries required

---

## Example Implementation

See `src/components/ContrastGuide.tsx` for a live demo with all approaches.

To view the guide:
1. Add to your App.tsx routes
2. Navigate to the page
3. See all examples with light and dark backgrounds
