# CSS Structure

CSS (Cascading Style Sheets) consists of various components that together define the styling rules for HTML elements.

## 🌲 1. Selector

A selector in CSS is used to target HTML elements to which styles will be applied. Selectors can target elements based on their tag names, class names, IDs, attributes, or their relationship with other elements. For example:

```css
/* Selects all <p> elements */
p {
  color: blue;
}

/* Selects elements with class 'btn' */
.btn {
  background-color: green;
}
```

## 🌲 2. Declaration

A declaration in CSS consists of a property and a value, separated by a colon, and terminated by a semicolon. It defines the specific style or behavior that will be applied to the selected element(s). For example:

```css
/* Declaration with property 'color' and value 'red' */
p {
  color: red;
}
```

## 🌲 3. Comment

Comments in CSS are used to add notes or descriptions within the stylesheet. They are ignored by the browser and serve as documentation for developers. Comments can be single-line or multi-line and are enclosed within `/* */`. For example:

```css
/* This is a single-line comment */

/*
  This is a multi-line comment.
  It can span multiple lines.
*/
```

## 🌲 4. Property

A property in CSS is an attribute of an HTML element that can be styled. It defines the aspect of the element that will be modified, such as its color, size, font, or positioning. For example:

```css
/* Property 'font-size' with value '20px' */
p {
  font-size: 20px;
}
```

## 🌲 5. Value

A value in CSS is the specific setting or data assigned to a property. It determines how the property will be applied to the selected element(s). Values can be numerical, color codes, keywords, or other data types depending on the property being used. For example:

```css
/* Property 'background-color' with value 'yellow' */
.btn {
  background-color: yellow;
}
```

Understanding these components is crucial for writing effective CSS rules to style HTML elements effectively.
