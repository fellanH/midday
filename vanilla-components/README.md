# 🎨 Vanilla JavaScript Component Library

A collection of beautifully crafted components converted from React to vanilla JavaScript, HTML, and CSS. Perfect for projects that need lightweight, framework-free components with modern design and functionality.

## 📁 Project Structure

```
vanilla-components/
├── index.html                      # Main navigation and showcase page
├── README.md                       # Documentation (this file)
├── dashboard/                      # Dashboard-specific components
│   ├── dashboard-overview.html     # Complete dashboard with stats and charts
│   └── bank-account.html          # Bank account management component
├── ui/                            # Reusable UI components
│   ├── button.html                # Button component with variants
│   └── card.html                  # Card container component
└── shared/                        # Utility components
    └── format-amount.html         # Currency formatting utility
```

## 🚀 Getting Started

### Quick Preview
1. Open `index.html` in your web browser
2. Browse the component showcase
3. Click on any component card to view it in detail

### Using Components in Your Project
1. Open any component HTML file
2. Copy the HTML structure, CSS styles, and JavaScript code
3. Integrate into your project and customize as needed

## 📊 Dashboard Components

### Dashboard Overview
**File:** `dashboard/dashboard-overview.html`
**Features:**
- Animated statistics cards with hover effects
- Gradient account cards with balance display
- Recent activity feed with categorized transactions
- Quick action buttons for common tasks
- Responsive grid layout
- Real-time stat updates simulation

**Use Cases:**
- Financial dashboard homepage
- Analytics overview page
- Admin panel summary

### Bank Account Component
**File:** `dashboard/bank-account.html`
**Features:**
- Add, edit, and delete bank accounts
- Modal dialogs for forms
- Dropdown menus with actions
- Toggle switches for enable/disable
- Form validation and loading states
- Confirmation dialogs for destructive actions

**Use Cases:**
- Account management interfaces
- Financial application settings
- User profile management

## 🎨 UI Components

### Button Component
**File:** `ui/button.html`
**Features:**
- Multiple variants: default, destructive, outline, secondary, ghost, link
- Various sizes: small, default, large, icon
- Loading states with spinner animations
- Disabled states
- Interactive demo with real-time code generation
- Ripple effects on click

**Available Classes:**
```css
.btn                    /* Base button class */
.btn-default           /* Primary blue button */
.btn-destructive       /* Red danger button */
.btn-outline           /* Transparent with border */
.btn-secondary         /* Gray secondary button */
.btn-ghost             /* Transparent background */
.btn-link              /* Text-style link button */
.btn-sm                /* Small size */
.btn-default-size      /* Default size */
.btn-lg                /* Large size */
.btn-icon              /* Icon-only button */
.btn-loading           /* Loading state with spinner */
```

### Card Component
**File:** `ui/card.html`
**Features:**
- Flexible header, content, and footer sections
- Multiple variants: default, elevated, flat, outlined
- Dashboard-style examples with stats and progress bars
- User profile cards with avatars
- Project status cards with badges
- Interactive demo for customization

**Available Classes:**
```css
.card                  /* Base card class */
.card-elevated         /* Enhanced shadow */
.card-flat             /* No borders or shadows */
.card-outlined         /* Prominent border */
.card-header           /* Header section */
.card-title            /* Title styling */
.card-description      /* Description text */
.card-content          /* Main content area */
.card-footer           /* Footer section */
```

## 🔧 Shared Components

### Format Amount Component
**File:** `shared/format-amount.html`
**Features:**
- International currency formatting
- Multiple currency support (USD, EUR, GBP, JPY, SEK)
- Locale-specific formatting (en-US, en-GB, sv-SE, de-DE, fr-FR, ja-JP)
- Configurable decimal places
- Positive/negative amount styling
- Interactive demo with live examples

**JavaScript Usage:**
```javascript
function formatAmount({
    locale = 'en-US',
    amount,
    currency,
    maximumFractionDigits = 2,
    minimumFractionDigits = 2
}) {
    try {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
            maximumFractionDigits,
            minimumFractionDigits
        }).format(amount);
    } catch (error) {
        return `${currency} ${amount.toFixed(maximumFractionDigits)}`;
    }
}

// Example usage
const formatted = formatAmount({
    amount: 1234.56,
    currency: 'USD',
    locale: 'en-US'
}); // Returns: "$1,234.56"
```

## 🎯 Key Features

### ✨ Zero Dependencies
- Pure HTML, CSS, and JavaScript
- No external libraries or frameworks required
- No build process needed

### 📱 Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions

### 🎨 Modern UI/UX
- Clean, professional design
- Smooth animations and transitions
- Consistent spacing and typography
- Accessible color schemes

### ⚡ Performance Optimized
- Lightweight code
- Efficient DOM manipulation
- CSS-based animations
- Minimal JavaScript footprint

### 🔧 Highly Customizable
- Well-organized CSS classes
- Easy-to-modify color schemes
- Configurable animations
- Modular component structure

## 🛠 Customization Guide

### Color Scheme
The components use a consistent color palette that can be easily customized:

```css
/* Primary Colors */
--primary: #3b82f6;           /* Blue */
--primary-hover: #2563eb;     /* Darker blue */

/* Status Colors */
--success: #16a34a;           /* Green */
--warning: #d97706;           /* Orange */
--error: #dc2626;             /* Red */

/* Neutral Colors */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;
```

### Typography
```css
/* Font Family */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Monospace for numbers */
font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
```

### Spacing
The components use a consistent spacing scale:
- `4px` - Extra small spacing
- `8px` - Small spacing
- `12px` - Medium spacing
- `16px` - Default spacing
- `20px` - Large spacing
- `24px` - Extra large spacing
- `32px` - Section spacing
- `40px` - Page spacing

## 🔄 Converting from React

These components were originally React components and have been carefully converted to vanilla JavaScript while maintaining:

- **Component structure** - Similar organization and hierarchy
- **State management** - Using vanilla JavaScript variables and functions
- **Event handling** - DOM event listeners instead of React event handlers
- **Styling** - CSS classes equivalent to the original styling
- **Functionality** - All interactive features preserved

### Conversion Notes:
- React hooks → JavaScript variables and functions
- JSX → HTML with template literals for dynamic content
- Props → Function parameters or data attributes
- Component state → JavaScript objects and arrays
- React event handlers → DOM event listeners

## 📖 Best Practices

### HTML Structure
- Use semantic HTML elements
- Maintain accessible markup
- Include proper ARIA attributes for interactive elements

### CSS Organization
- Keep styles modular and component-specific
- Use consistent naming conventions
- Group related styles together
- Include comments for complex styling

### JavaScript Patterns
- Use modern ES6+ features
- Implement proper error handling
- Add loading states for async operations
- Clean up event listeners when necessary

### Performance
- Minimize DOM queries by caching elements
- Use CSS for animations when possible
- Implement debouncing for frequent events
- Optimize images and assets

## 🌐 Browser Support

These components work in all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Required Features:
- ES6 Classes and Arrow Functions
- CSS Grid and Flexbox
- CSS Custom Properties (Variables)
- Intersection Observer API (for animations)

## 🤝 Contributing

Feel free to:
- Report bugs or issues
- Suggest new components
- Improve existing components
- Add more examples and use cases

## 📄 License

This component library is open source and available under the MIT License.

---

**Happy Coding!** 🚀

Built with ❤️ using vanilla JavaScript, HTML, and CSS.