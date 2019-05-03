# Mckinley & Rice CSS Style Guide

A comprehensive guide to using the Block--Element__Modifier (BEM) model to write __clean__, __scalable__ and __semantic__ CSS.

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

## A quick intro to the BEM CSS paradigm 

The Block, Element, Modifier model, more than a CSS paradigm, is a UI paradigm. It is a way in which you can easily interpret and compartmentalize a UI. 
It divides the UI into Blocks (Headers, Navs, Articles, Footers etc.) then declares Elements (Buttons, Inputs etc.) contained within these Blocks and finally
assigns Modifiers(dark, outlined, disabled etc.) to these elements.

## An example 

![Button modifiers](http://getbem.com/assets/github_buttons.jpg "Button modifiers")

The above image shows 3 buttons that can be used in 3 different contexts:`

1. A normal button for a generic call to action
2. A success button to denote positive/successful calls to action (eg. create account, complete payment)
3. A danger button to denote negative/dangerous calls to action (eg. delete account, unsubscribe)

Assuming all these buttons are placed in Block named "navbar", BEM model will make the markup and styling look somewhat like whats shown below:

__HTML__
```html
<button class="navbar__button">
	Normal button
</button>
<button class="navbar__button button--success">
	Success button
</button>
<button class="navbar__button button--danger">
	Danger button
</button>
```

__CSS__
```css
.navbar__button {
	display: inline-block;
	border-radius: 3px;
	padding: 7px 12px;
	border: 1px solid #D5D5D5;
	background-image: linear-gradient(#EEE, #DDD);
	font: 700 13px/18px Helvetica, arial;
}
.button--success {
	color: #FFF;
	background: #569E3D linear-gradient(#79D858, #569E3D) repeat-x;
	border-color: #4A993E;
}
.button--danger {
	color: #900;
}
```