# Mckinley & Rice React Style Guide

A comprehensive list of rules to follow when developing user interfaces using React/React Native.

_This guide is heavily influenced by eslint guidelines._

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)


## Table of Contents

  1. [Rules to live by](#rules-to-live-by)
     1. [Include only on component in one JSX file](#include-onle-one-component-in-one-jsx-file)


## Rules to live by

As React developers, we'll explore some rules that we HAVE to abide by at all costs.

> Why? Because writing good and maintainable code from the beggining will save us time and unplanned headaches.

### Include only one component in one JSX file

> Why? To avoid confusing exports and non-mainatainable files.

```js
// bad
// Foo.jsx
import React, { Component } from "react"

class Foo extends React.Component {
  ...
}

class Bar extends React.Components {
  ...
}

// good 
// Foo.jsx
import React, { Component } from "react"

class Foo extends React.Component {
  ...
}
```
