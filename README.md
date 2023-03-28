## Oberon Design Token Guidelines

Welcome to the Oberon Design Token Guidelines repository! Here you will find a comprehensive guide on how to use design tokens in your projects. Design tokens are an essential tool for creating consistent designs across multiple platforms and devices. They are reusable, single-purpose design assets that store visual design attributes such as color, typography, spacing, and more.

This repository provides a starting point for developers and designers who want to implement design tokens in their projects. We have defined different types of design tokens and provided a naming convention that makes it easy to identify and use them. Additionally, we have included instructions on how to use design tokens in code and in Figma, using Tokens Studio.

## Types of tokens

### Brand Tokens

Brand Tokens are design tokens that define the visual elements that represent a brand, such as colors, typographic styles, and spacing units. Unlike other design tokens, Brand Tokens are not tied to a specific theme or use case. This means that these tokens can _not_ be referenced in code but can only be used by referencing them in application or component tokens.

**Naming convention:**

```
brand.[type].[variant?].[measurement?]
```

**Examples:**

```
brand.color.primary.10
brand.unit.10
brand.font-family.sans-serif
```

### Application Tokens

Application Tokens are design tokens that are specific to an application and can be used in code. These tokens define application-specific styles, such as syntactic colors (such as action, background, and border colors), border widths, sizing and spacing units, media queries, border radii, and more.

Unlike Brand Tokens, Application Tokens are available in all themes and can be used throghout code and design. However, new tokens cannot be defined in themes outside of the base theme, ensuring that the application's design remains consistent and predictable across the application and it's themes. If new tokens are necessary add them to base theme as well.

By defining Application Tokens, designers and developers can create a consistent visual language for the application that can be easily maintained and updated. These tokens can be used to create reusable components and styles, reducing duplication and ensuring that the application's design remains consistent across different screens and touchpoints.

**Naming convention:**

```
[type].[application?].[variant?].[**]
```

**Examples:**

```
color.brand.primary.default
font-weight.m
spacing.scale.1
```

### Component Tokens

Component Tokens are a type of design token that describes the visual appearance and behavior of specific components such as buttons, inputs, cards, etc.

Component tokens typically use composite styles per elemennt.

**Naming convention:**

```
component.[component type].[variant?].[state?].[element?]
```

**Examples:**

```
component.button.solid.enabled.body
component.checkbox.enabled.body
component.title.m
```

### Theming Chakra UI components using Component Tokens

With the component tokens provided in the repository, designers and developers can use pre-defined design tokens that are composed of multiple lower-level tokens to style Chakra UI components.

Note that not all Chakra UI components have pre-defined examples in the repository as this is still work in progress. However, you can still use composite tokens to style these components by defining your own Component Tokens that are composed of lower-level design tokens.

Overall, using composite tokens to automatically map styles to Chakra UI components can help streamline the styling process and ensure consistency across an application's design system.

## File structure

The recommended file structure is as follows:

-   📁 tokens
    -   📁 brand
        -   📄 color
        -   📄 font-family
        -   📄 font-weight
        -   📄 line-height
        -   📄 typescale
        -   📄 units
        -   ...etc
    -   📁 application
        -   📄 border-width
        -   📄 color
        -   📄 font-weight
        -   📄 line-height
        -   📄 media-query
        -   📄 radius
        -   📄 sizing
        -   📄 spacing
        -   ...etc
    -   📁 component
        -   📄 body
        -   📄 button
        -   📄 checkbox
        -   📄 input
        -   📄 link
        -   📄 radio
        -   📄 switch
        -   📄 title
        -   ...etc
