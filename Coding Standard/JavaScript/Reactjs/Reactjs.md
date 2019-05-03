# Mckinley & Rice React Style Guide

A comprehensive list of rules to follow when developing user interfaces using React/React Native.

_This guide is heavily influenced by eslint guidelines._

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)


## Table of Contents

  1. [Rules to live by](#rules-to-live-by)
     1. [Include only on component in one JSX file](#include-only-one-component-in-one-jsx-file)
     2. [Inherit from React.Component when component contains state/refs](#inherit-from-reactcomponent-when-component-contains-staterefs)
     3. [Use functional component when component has no state/refs](#use-functional-component-when-component-has-no-staterefs)
     4. [Use JSX extension for component files](#use-jsx-extension-for-component-files)
     5. [Keep file name and component name consistent](#keep-file-name-and-component-name-consistent)
     6. [Always use double quotes (` " `) for JSX attributes but single quotes (` ' `) for other JS](#always-use-double-quotes--for-jsx-attributes-but-single-quotes--for-other-js)
     7. [Omit the value of a prop when explicitly true](#omit-the-value-of-a-prop-when-explicitly-true)
     8. [Bind event hanlders in class constructors rather than using arrow functions](#bind-event-hanlders-in-class-constructors-rather-than-using-arrow-functions)
  2. [Component File Entity Order](#component-file-entity-order)
  3. [Directory Structure](#directory-structure)


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

### Inherit from React.Component when component contains state/refs

```js
// good
import React, { Component } from "react"

class Foo extends React.Component {
  ...
}
```

### Use functional component when component has no state/refs

> Avoid using functional name inference and use normal functions.

```js
// bad 
const Foo = ({prop}) => {
  ...
}
// good
function Foo({prop}) {
  ...
}
```

### Use JSX extension for component files

> Why? To make it easier to comprehend which files are React component files.

### Keep file name and component name consistent

Use PascalCase for naming files and components defined in them.

```js
// bad
// Foo.jsx

class FooComponent extends React.Component {
  ...
}

// good
// Foo.jsx

class Foo extends React.Component {
  ...
}
```

However use camelCase to instantiate a component.

```js
// bad
const CardLight = <CardLight />

// good
const cardLight = <CardLight />
```

### Always use double quotes (` " `) for JSX attributes but single quotes (` ' `) for other JS

> Why? Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.

```js
// bad
<Foo bar='baz'/>

// bad
<Foo style={{left:"20px"}} />

// good
<Foo bar="baz"/>

//good
<Foo style={{left:'20px'}} />
```

### Omit the value of a prop when explicitly true

> Why? Improves readability and looks more declarative.

```js
// bad
<Foo visible={true}/>

//good
<Foo visible>
```

### Bind event hanlders in class constructors rather than using arrow functions

> Why? A bind call in the render path creates a brand new function on every single render while arrow functions affect the performance negatively

```js
// bad
class extends React.Component {
  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv.bind(this)} />;
  }
}

// very bad
class extends React.Component {
  onClickDiv = () => {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv} />
  }
}

// good
class extends React.Component {
  constructor(props) {
    super(props);

    this.onClickDiv = this.onClickDiv.bind(this);
  }

  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv} />;
  }
}
```

## Component File Entity Order

When writing a React component, follow the following entity order.

```js
// PropTypes

const propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
};

// DefaultProps

const defaultProps = {
  text: 'Hello World',
};

class extends React.Component {
  // static methods (optional)
  
  static foo(){
    ...
  }

  // constructor

  constructor(props) {
    ...
  }

  // === lifecycle
  // componentDidMount
  // componentWillReceiveProps
  // shouldComponentUpdate
  // componentWillUpdate
  // componentDidUpdate
  // componentWillUnmount
  // === lifecycle
  
  // event handlers

  function onClick(){
    ...
  }

  // optional render methods

  function renderClock(){
    return (
      <div>
        <Clock/>
      </div>
    )
  }

  // render

  render(){
    ...
  }
}
```

## Right method for API call in component.
  All API call should be placed in componentDidMount instead of componentWillMount.
  ```
  //Bad
  
  componentWillMount(){
    // API call
  }
  
  
  //Good
  componentDidMount(){
    // API call
  }
  ```
## Directory Structure

Follow the following directory structure in your React apps.

```
AppName
  |-index.js
  |-app.js
  |-package.json
  |-Containers
    |-Foo.jsx
  |-Components
    |-Bar.jsx
  |-Redux
    |-Reducers
      |-reducerOne.js
      |-reducerTwo.js
    |-Actions
      |-actionsOne.js
      |-actionsTwo.js
```

> Containers are components with state
===
> Components are representational components
