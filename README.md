# Oberon Design Tokens Guidelines

Design tokens are design decisions, represented as data, that ensure systematically unified and cohesive product experiences.

## Conventions

Our design tokens are categorized into three types.

### Option tokens

Raw values for that can be applied to syntax and component tokens, think: colors, sizing units, font families, border radiuses, animation curves, etc.

##### **naming convention**:

[value-type].[option].[sub-option?]

##### **examples**:

color.blue.100, font-family.sans-serif, sizing.10

---

### Syntax tokens

Tokens with a purpose, think: cta color, body text color, etc. values are option tokens. We can define two types of syntax tokens, simplified and granular. simplified are common syntax options that are often used. simplified token can be used in granual tokens.

##### **naming convention**:

simplified -> "syntax.[category].[option?].[device?].[state?]"  
granular -> "syntax.[value-type].[category].[device?].[state?].[application]"

##### **examples**:

simplified -> syntax.primary-color.default  
granular -> syntax.color.action.enabled.background

---

### Component tokens (optional)

Specific tokens that are applied to components, think: button background color, button foreground color, card border radius, etc.

##### **naming convention**:

[component].[variant?].[state?].[application]

##### **examples**:

button.cta.enabled.background-color
button.border-radius

## Themes

Design tokens lend themselves to being themed. In the cases we need theming create a "brand" or "theme" directory with brands or themes. In these themes we use the same structure as our global tokens.
