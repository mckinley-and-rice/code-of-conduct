# Mckinley & Rice HTML5 Style Guide

A guide to writing __clean__, __modular__, __semantic__ and __maintainable__ web markup

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

## Table of Contents

- [Mckinley & Rice HTML5 Style Guide](#mckinley--rice-html5-style-guide)
  - [Table of Contents](#table-of-contents)
- [Why follow an HTML style guide](#why-follow-an-html-style-guide)
  - [Clean HTML](#clean-html)
    - [Use lower-case element names](#use-lower-case-element-names)
    - [Close all HTML tags](#close-all-html-tags)
    - [Close all HTML tags](#close-all-html-tags-1)
    - [Close empty HTML tags](#close-empty-html-tags)
    - [Use lowercase attribute names](#use-lowercase-attribute-names)
    - [Enclose attribute values in quotes](#enclose-attribute-values-in-quotes)
    - [Indent your tags (PLEASE)](#indent-your-tags-please)
    - [Avoid long lines](#avoid-long-lines)
  - [Modular HTML](#modular-html)
  - [Semantic HTML](#semantic-html)
  - [Maintainable HTML](#maintainable-html)

# Why follow an HTML style guide

In software development teams (like ours), multiple people work on the same codebase. Especially when it comes to web markup. We need a system to streamline the process of writing good HTML makrup so that we can avoid a lot of pitfalls that can arise due to inconsistent standards followed by different people. These pitfalls include:

- Unstructured tags that lead to organizational problems and overall team frustration
- Overriden class and id names leading to inconsitencies in CSS and unexpected bugs
- Unsemantic tags leading to poor SEO optimization and faulty device specific rendering
- Inconsistent way of referencing tag hierarchy leading to dificulty in referencing 
- Unstructured and ugly CSS due to unstructured and ugly markup

## Clean HTML

Clean markup is a fundamental requirement in front end teams. Websites grow in size, complexity of structure and a list of dependencies. If your HTML5 code is not clean and organized, you are ensuring future frustration. Keep these points in mind while writing HTML5 code to ensure cleanliness. 

### Use lower-case element names
Good
```html
<div>
  <p>Hello World</p>
</div>
```

Bad
```html
<DIV>
  <P>Hello World</P>
</DIV>
```

Very Bad
```html
<div>
  <P>Hello World</p>
</DIV>
```

### Close all HTML tags
Good
```html
  <p>Hello World</p>
```

Bad
```html
<p>Hello World
```

### Close all HTML tags
Good
```html
  <p>Hello World</p>
```

Bad
```html
<p>Hello World
```
### Close empty HTML tags
Good
```html
  <img src="https://image.com/image.png"/>
```

Bad
```html
<img src="https://image.com/image.png">
```

### Use lowercase attribute names
Good
```html
  <div class="header">
    ...
  </div>
```

Bad
```html
  <div CLASS="header">
    ...
  </div>
```

### Enclose attribute values in quotes
Good
```html
  <div class="header">
    ...
  </div>
```

Bad
```html
  <div class=header>
    ...
  </div>
```

### Indent your tags (PLEASE)
Use one tab space for each level of markup

Good
```html
  <div class="header">
    <h1>WEBSITE.COM</h1>
  </div>
```

Bad
```html
  <div CLASS="header">
  <h1>WEBSITE.COM</h1>
  </div>
```

Very Bad
```html
  <div CLASS="header">
<h1>WEBSITE.COM</h1>
    </div>
```
__NOTE__: If you are using Visual Studio Code, use extensions like Prettier. These extensions auto format your markup.

### Avoid long lines
Good
```html
  <div class="body">
    <p>
      
    </p>
  </div>
```

Bad
```html
  <div class=header>
    ...
  </div>
```
## Modular HTML
## Semantic HTML
## Maintainable HTML