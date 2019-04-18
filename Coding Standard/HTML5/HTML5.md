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
    - [Close empty HTML tags](#close-empty-html-tags)
    - [Use lowercase attribute names](#use-lowercase-attribute-names)
    - [Enclose attribute values in quotes](#enclose-attribute-values-in-quotes)
    - [Indent your tags (PLEASE)](#indent-your-tags-please)
    - [Avoid long lines](#avoid-long-lines)
  - [Semantic HTML](#semantic-html)
    - [What is semantic markup](#what-is-semantic-markup)
    - [`<section>`](#section)
    - [`<article>`](#article)
    - [`<header>`](#header)
    - [`<footer>`](#footer)
    - [`<nav>`](#nav)
    - [`<aside>`](#aside)
    - [`<figure>` & `<figcaption>`](#figure--figcaption)
    - [Why use semantic tags](#why-use-semantic-tags)
  - [Maintainable HTML](#maintainable-html)
    - [What is maintainable HTML](#what-is-maintainable-html)
    - [Structure projects carefully](#structure-projects-carefully)
    - [Include all necessary pages](#include-all-necessary-pages)
    - [Store images in web-friendly formats](#store-images-in-web-friendly-formats)
    - [Use comments](#use-comments)
    - [Use understandable names for classes and IDs](#use-understandable-names-for-classes-and-ids)
    - [Link CSS at the top of `<head>` tag](#link-css-at-the-top-of-head-tag)
    - [Link JS at the bottom of `<body>` tag](#link-js-at-the-bottom-of-body-tag)

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
__NOTE__: If you are using Visual Studio Code, use extensions like [Prettier](https://prettier.io/). These extensions auto format your markup.

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
## Semantic HTML
### What is semantic markup 
The purpose of most web pages is to convey a message. This message can not be conveyed if the page is not getting enough attention by sub-optimal search engine optimization. This is where Semantic HTML comes in to the picture.

> Semantic
> relating to meaning in language or logic.

Semantic HTML extends the core functionality of web markup. It allows the author to covey the _meaning_ of certain parts rather than just the _presentation_. HTML5.2 standard has introduced certain tags that tell what parts of markup are doing and how they should affect the indexing of a web page based on a query. You should use these tags in conjunction with presentational tags to achieve the mot out of a web page. These tags are:

### `<section>`
Defines a section in the document 
```html
<section>
  <h1>WWF</h1>
  <p>The World Wide Fund for Nature (WWF) is....</p>
</section>
```

### `<article>`
Defines independent self contained content
```html
<article>
  <h1>What Does WWF Do?</h1>
  <p>WWF's mission is to stop the degradation of our planet's natural environment,
  and build a future in which humans live in harmony with nature.</p>
</article>
```

### `<header>`
Defines the header section of the document
```html
<article>
  <header>
    <h1>What Does WWF Do?</h1>
    <p>WWF's mission:</p>
  </header>
  <p>WWF's mission is to stop the degradation of our planet's natural environment,
  and build a future in which humans live in harmony with nature.</p>
</article>
```

### `<footer>`
Defines the footer section of the document
```html
<footer>
  <p>Posted by: Hege Refsnes</p>
  <p>Contact information: <a href="mailto:someone@example.com">
  someone@example.com</a>.</p>
</footer>
```

### `<nav>`
Defines a set of navigation links
```html
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>
```

### `<aside>`
Defines some content aside from the content it is placed in (like a sidebar).
```html
<p>My family and I visited The Epcot center this summer.</p>

<aside>
  <h4>Epcot Center</h4>
  <p>The Epcot Center is a theme park in Disney World, Florida.</p>
</aside>
```


### `<figure>` & `<figcaption>`
Defines a figure and its caption
```html
<figure>
  <img src="pic_trulli.jpg" alt="Trulli">
  <figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>
</figure>
```

### Why use semantic tags
With HTML4, developers used their own id/class names to style elements: header, top, bottom, footer, menu, navigation, main, container, content, article, sidebar, topnav, etc. This made it impossible for search engines to identify the correct web page content. With the semantic HTML5 elements (`<header>`, `<footer>`, `<nav>`, `<section>`, `<article>`), this will become easier.

> According to the W3C, a Semantic Web: "Allows data to be shared and reused across applications, enterprises, and communities."

## Maintainable HTML

### What is maintainable HTML
We rarely find software or service that never requires updating, moving or converting. These tasks are usually carried out by human beings and they often have to work with things built by other human beings. If the person who worked previously writes markup lacking in quality, organizational structure and uniformity, it leads to difficulty in maintainance, unnecessary delays and potentially, loss of money and business.

All of this can be avoided if we simply follow a set of guidleines and also constantly maintain said guidelines. This leads to predictibility and overall developer happiness while maintaining and updating web markup authored by someone else.

Keep the following points handly while working with HTML projects to optimize maintainability.

### Structure projects carefully
### Include all necessary pages
### Store images in web-friendly formats
### Use comments
### Use understandable names for classes and IDs
### Link CSS at the top of `<head>` tag
### Link JS at the bottom of `<body>` tag