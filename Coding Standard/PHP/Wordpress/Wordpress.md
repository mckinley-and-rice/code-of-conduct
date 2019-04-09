## What are WordPress coding standards?

WordPress coding standards refer to a set of rules for WordPress developers.
According to WordPress core development Blog, following four (mentioned below) WordPress coding standards ensures seamless development, avoids errors, and makes it easy to manage, contribute, and develop the WordPress platform.

## Why have coding standards?

Coding standards help avoid common coding errors, improve the readability of code, and simplify modification. They ensure that files within the project appear as if they were created by a single person.

Following the standards means anyone will be able to understand a section of code and modify it, if needed, without regard to when it was written or by whom.
If you are planning to contribute to WordPress core, you need to familiarize yourself with these standards, as any code you submit will need to comply with them. 

Coding standards for languages used in WordPress :- 

    1. WordPress HTML Coding Standards.
    2. WordPress PHP Coding Standards
    3. WordPress CSS Coding Standards.
    4. WordPress JavaScript Coding Standards.

#### 1. WordPress HTML Coding Standards.

(A) Indentation:
 Your HTML code should contain a proper indentation. For example, using Tabs instead of Spaces helps you structure your HTML code. It also improves code readability.

(B) Single or Double quotes: HTML code snippets should have proper quotes for attributes. When using attributes with values, you must enclose values within single or double quotes.
(C) Attributes and Tags: Always write HTML attributes and tags in lowercase. It makes a difference for machine interpretation. You can also take care of the human readability.
(D) Close elements properly: Close all HTML tags properly. Also, take care of the spaces in self-closing tags.
(E) Write well-markup HTML pages: To ensure your page validation, use W3C Validator for the purpose.


Reference:- 
[https://wpcrib.com/wordpress-coding-standards/](https://wpcrib.com/wordpress-coding-standards/)
[https://make.wordpress.org/core/handbook/best-practices/coding-standards/html/](https://make.wordpress.org/core/handbook/best-practices/coding-standards/html/)
[https://www.hongkiat.com/blog/wordpress-coding-standard/](https://www.hongkiat.com/blog/wordpress-coding-standard/)



#### 2. WordPress CSS Coding Standards.
(1) Structure your style sheet properly: Like other languages, WordPress coding standards instruct writing clean CSS structures.

Correct
(setq markdown-xhtml-header-content
      "<style type='text/css'>
#selector {
background: #fff;
color: #000;
}
</style>")

Incorrect
(setq markdown-xhtml-header-content
      "<style type='text/css'>
#selector {
color: #000;
}
#selector { background: #fff; color: #000; }
</style>")

(2) Don’t repeat properties: Along with properties, use short words for attributes.

Correct
(setq markdown-xhtml-header-content
      "<style type='text/css'>
background: #fff;
</style>")
Incorrect
(setq markdown-xhtml-header-content
      "<style type='text/css'>
background: #FFFFFF;
</style>")
(3) Enter values correctly: Carefully enter values. Take care of the space and semicolons.


(4) Best practices: Remove the old code structure before you attempt to add new for solving a problem.


#### JavaScript coding standard in WordPress

JavaScript has become a critical component in developing WordPress-based applications (themes and plugins) as well as WordPress core. Standards are needed for formatting and styling JavaScript code to maintain the same code consistency as the WordPress standards provide for core PHP, HTML, and CSS code.

The WordPress JavaScript Coding Standards are adapted from the jQuery JavaScript Style Guide. Our standard differs from the jQuery guidelines in the following ways:

WordPress uses single quotation marks for string declarations.
Case statements are indented within switch blocks.
Function contents are consistently indented, including full-file closure wrappers.
Some whitespace rules differ, for consistency with the WordPress PHP coding standards.
jQuery’s 100-character hard line limit is encouraged, but not strictly enforced.
Many of the examples below have been adapted directly from the jQuery style guide; these differences have all been integrated into the examples on this page. Any of the below standards and examples should be considered best practice for WordPress code, unless explicitly noted as anti-patterns.

 ##### Spacing
Use spaces liberally throughout your code. “When in doubt, space it out.”

These rules encourage liberal spacing for improved developer readability. The minification process creates a file that is optimized for browsers to read and process.

Indentation with tabs.
No whitespace at the end of line or on blank lines.
Lines should usually be no longer than 80 characters, and should not exceed 100 (counting tabs as 4 spaces). This is a “soft” rule, but long lines generally indicate unreadable or disorganized code.
if/else/for/while/try blocks should always use braces, and always go on multiple lines.
Unary special-character operators (e.g., ++, --) must not have space next to their operand.
Any , and ; must not have preceding space.
Any ; used as a statement terminator must be at the end of the line.
Any : after a property name in an object definition must not have preceding space.
The ? and : in a ternary conditional must have space on both sides.
No filler spaces in empty constructs (e.g., {}, [], fn()).
There should be a new line at the end of each file.
Any ! negation operator should have a following space.*
All function bodies are indented by one tab, even if the entire file is wrapped in a closure.*
Spaces may align code within documentation blocks or within a line, but only tabs should be used at the start of a line.*
*: The WordPress JavaScript standards prefer slightly broader whitespace rules than the jQuery style guide. These deviations are for consistency between the PHP and JavaScript files in the WordPress codebase.

Whitespace can easily accumulate at the end of a line – avoid this, as trailing whitespace is caught as an error in JSHint. One way to catch whitespace buildup is enabling visible whitespace characters within your text editor.

Objects 
Object declarations can be made on a single line if they are short (remember the line length guidelines). When an object declaration is too long to fit on one line, there must be one property per line. Property names only need to be quoted if they are reserved words or contain special characters:

Objects and arrays can be declared on a single line if they are short (remember the line length guidelines). When an object or array is too long to fit on one line, each member must be placed on its own line and each line ended by a comma.

<script\>

// Preferred
var obj = {
    ready: 9,
    when: 4,
    'you are': 15,
};
var arr = [
    9,
    4,
    15,
];

 </script\>

<script\>

// Acceptable for small objects and arrays
var obj = { ready: 9, when: 4, 'you are': 15 };
var arr = [ 9, 4, 15 ];
  
// Bad
var obj = { ready: 9,
    when: 4, 'you are': 15 };
var arr = [ 9,
    4, 15 ];

    </script\>

##### Arrays and Function Calls
Always include extra spaces around elements and arguments:

<script\>

array = [ a, b ];
  
foo( arg );
  
foo( 'string', object );
  
foo( options, object[ property ] );
  
foo( node, 'property', 2 );
  
prop = object[ 'default' ];
  
firstArrayElement = arr[ 0 ];

</script\>

#####Examples of Good Spacing #Examples of Good Spacing

<script\>

var i;
 
if ( condition ) {
    doSomething( 'with a string' );
} else if ( otherCondition ) {
    otherThing( {
        key: value,
        otherKey: otherValue
    } );
} else {
    somethingElse( true );
}
 
// Unlike jQuery, WordPress prefers a space after the ! negation operator.
// This is also done to conform to our PHP standards.
while ( ! condition ) {
    iterating++;
}
 
for ( i = 0; i < 100; i++ ) {
    object[ array[ i ] ] = someFn( i );
    $( '.container' ).val( array[ i ] );
}
 
try {
    // Expressions
} catch ( e ) {
    // Expressions
}

</script\>




#####Indentation and Line Breaks

Indentation and line breaks add readability to complex statements.

Tabs should be used for indentation. Even if the entire file is contained in a closure (i.e., an immediately invoked function), the contents of that function should be indented by one tab:

<script\>

( function( $ ) {
    // Expressions indented
 
    function doSomething() {
        // Expressions indented
    }
} )( jQuery );

</script\>

#####Blocks and Curly Braces

if, else, for, while, and try blocks should always use braces, and always go on multiple lines. The opening brace should be on the same line as the function definition, the conditional, or the loop. The closing brace should be on the line directly following the last statement of the block.

<script\>

var a, b, c;
 
if ( myFunction() ) {
    // Expressions
} else if ( ( a && b ) || c ) {
    // Expressions
} else {
    // Expressions
}

</script\>


#####Multi-line Statements
When a statement is too long to fit on one line, line breaks must occur after an operator.

<script\>

// Bad
var html = '<p&gt;The sum of ' + a + ' and ' + b + ' plus ' + c
    + ' is ' + ( a + b + c ) + '</p&gt;;
 
// Good
var html = '<p&gt;The sum of ' + a + ' and ' + b + ' plus ' + c +
    ' is ' + ( a + b + c ) + '</p&gt;;


    </script\>

Lines should be broken into logical groups if it improves readability, such as splitting each expression of a ternary operator onto its own line, even if both will fit on a single line.

<script\>

// Acceptable
var baz = ( true === conditionalStatement() ) ? 'thing 1' : 'thing 2';
 
// Better
var baz = firstCondition( foo ) && secondCondition( bar ) ?
    qux( foo, bar ) :
    foo;

</script\>

When a conditional is too long to fit on one line, each operand of a logical operator in the boolean expression must appear on its own line, indented one extra level from the opening and closing parentheses.

<script\>

if (
    firstCondition() &&
    secondCondition() &&
    thirdCondition()
) {
    doStuff();
}

</script\>

#####Chained Method Calls

When a chain of method calls is too long to fit on one line, there must be one call per line, with the first call on a separate line from the object the methods are called on. If the method changes the context, an extra level of indentation must be used.

<script\>

elements
    .addClass( 'foo' )
    .children()
        .html( 'hello' )
    .end()
    .appendTo( 'body' );

</script\>

#####Assignments and Globals


Declaring Variables with const and let #Declaring Variables with const and let
For code written using ES2015 or newer, const and let should always be used in place of var. A declaration should use const unless its value will be reassigned, in which case letis appropriate.

Unlike var, it is not necessary to declare all variables at the top of a function. Instead, they are to be declared at the point at which they are first used.

Declaring Variables With var #Declaring Variables With var
Each function should begin with a single comma-delimited var statement that declares any local variables necessary. If a function does not declare a variable using var, that variable can leak into an outer scope (which is frequently the global scope, a worst-case scenario), and can unwittingly refer to and modify that data.

Assignments within the var statement should be listed on individual lines, while declarations can be grouped on a single line. Any additional lines should be indented with an additional tab. Objects and functions that occupy more than a handful of lines should be assigned outside of the var statement, to avoid over-indentation.

<script\>

// Good
var k, m, length,
    // Indent subsequent lines by one tab
    value = 'WordPress';
 
// Bad
var foo = true;
var bar = false;
var a;
var b;
var c;


</script\>

#####Globals

In the past, WordPress core made heavier use of global variables. Since core JavaScript files are sometimes used within plugins, existing globals should not be removed.

All globals used within a file should be documented at the top of that file. Multiple globals can be comma-separated.

This example would make passwordStrength an allowed global variable within that file:

1
/* global passwordStrength:true */
The “true” after passwordStrength means that this global is being defined within this file. If you are accessing a global which is defined elsewhere, omit :true to designate the global as read-only.

Common Libraries

Backbone, jQuery, Underscore, and the global wp object are all registered as allowed globals in the root .jshintrc file.

Backbone and Underscore may be accessed directly at any time. jQuery should be accessed through $ by passing the jQuery object into an anonymous function:

<script\>

( function( $ ) {
    // Expressions
} )( jQuery );

</script\>


This will negate the need to call .noConflict(), or to set $ using another variable.

Files which add to, or modify, the wp object must safely access the global to avoid overwriting previously set properties:

<script\>


// At the top of the file, set "wp" to its existing value (if present)
window.wp = window.wp || {};

</script\>

#####Naming Conventions

Variable and function names should be full words, using camel case with a lowercase first letter. This is an area where this standard differs from the WordPress PHP coding standards.

Names should be descriptive, but not excessively so. Exceptions are allowed for iterators, such as the use of i to represent the index in a loop.

####Abbreviations and Acronyms

Acronyms must be written with each of its composing letters capitalized. This is intended to reflect that each letter of the acronym is a proper word in its expanded form.

All other abbreviations must be written as camel case, with an initial capitalized letter followed by lowercase letters.

If an abbreviation or an acronym occurs at the start of a variable name, it must be written to respect the camelcase naming rules covering the first letter of a variable or class definition. For variable assignment, this means writing the abbreviation entirely as lowercase. For class definitions, its initial letter should be capitalized.

<script\>


// "Id" is an abbreviation of "Identifier":
const userId = 1;
  
// "DOM" is an acronym of "Document Object Model":
const currentDOMDocument = window.document;
  
// Acronyms and abbreviations at the start of a variable name are consistent
// with camelcase rules covering the first letter of a variable or class.
const domDocument = window.document;
class DOMDocument {}
class IdCollection {}


</script\>

Class Definitions #Class Definitions
Constructors intended for use with new should have a capital first letter (UpperCamelCase).

A class definition must use the UpperCamelCase convention, regardless of whether it is intended to be used with new construction.

<script\>

class Earth {
    static addHuman( human ) {
        Earth.humans.push( human );
    }
 
    static getHumans() {
        return Earth.humans;
    }
}
  
Earth.humans = [];

</script\>

All @wordpress/element Components, including stateless function components, should be named using Class Definition naming rules, both for consistency and to reflect the fact that a component may need to be transitioned from a function to a class without breaking compatibility.



#####Constants

An exception to camel case is made for constant values which are never intended to be reassigned or mutated. Such variables must use the SCREAMING_SNAKE_CASE convention.

In almost all cases, a constant should be defined in the top-most scope of a file. It is important to note that JavaScript’s const assignment is conceptually more limited than what is implied here, where a value assigned by const in JavaScript can in-fact be mutated, and is only protected against reassignment. A constant as defined in these coding guidelines applies only to values which are expected to never change, and is a strategy for developers to communicate intent moreso than it is a technical restriction.


####Comments

Comments come before the code to which they refer, and should always be preceded by a blank line. Capitalize the first letter of the comment, and include a period at the end when writing full sentences. There must be a single space between the comment token (//) and the comment text.

<script\>

someStatement();
  


// Explanation of something complex on the next line
$( 'p' ).doSomething();

</script\>

// This is a comment that is long enough to warrant being stretched
// over the span of multiple lines.
JSDoc comments should use the /** multi-line comment opening. Refer to the JavaScript Documentation Standards for more information.

Inline comments are allowed as an exception when used to annotate special arguments in formal parameter lists:

<script\>

function foo( types, selector, data, fn, /* INTERNAL */ one ) {
    // Do stuff
}

</script\>

####Equality

Strict equality checks (===) must be used in favor of abstract equality checks (==).


#####Type Checks

These are the preferred ways of checking the type of an object:


String: typeof object === 'string'
Number: typeof object === 'number'
Boolean: typeof object === 'boolean'
Object: typeof object === 'object' or _.isObject( object )
Plain Object: jQuery.isPlainObject( object )
Function: _.isFunction( object ) or jQuery.isFunction( object )
Array: _.isArray( object ) or jQuery.isArray( object )
Element: object.nodeType or _.isElement( object )
null: object === null
null or undefined: object == null
undefined:
Global Variables: typeof variable === 'undefined'
Local Variables: variable === undefined
Properties: object.prop === undefined
Any of the above: _.isUndefined( object )
Anywhere Backbone or Underscore are already used, you are encouraged to use Underscore.js‘s type checking methods over jQuery’s.


#####Strings

Use single-quotes for string literals:

1
var myStr = 'strings should be contained in single quotes';
When a string contains single quotes, they need to be escaped with a backslash (\):

2
// Escape single quotes within strings:
'Note the backslash before the \'single quotes\'';

#####Switch Statements

The usage of switch statements is generally discouraged, but can be useful when there are a large number of cases – especially when multiple cases can be handled by the same block, or fall-through logic (the default case) can be leveraged.

When using switch statements:

Use a break for each case other than default. When allowing statements to “fall through,” note that explicitly.
Indent case statements one tab within the switch.

<script\>

switch ( event.keyCode ) {
    // ENTER and SPACE both trigger x()
    case $.ui.keyCode.ENTER:
    case $.ui.keyCode.SPACE:
        x();
        break;
    case $.ui.keyCode.ESCAPE:
        y();
        break;
    default:
        z();
}


</script\>

It is not recommended to return a value from within a switch statement: use the case blocks to set values, then return those values at the end.

<script\>

function getKeyCode( keyCode ) {
    var result;
 
    switch ( event.keyCode ) {
        case $.ui.keyCode.ENTER:
        case $.ui.keyCode.SPACE:
            result = 'commit';
            break;
        case $.ui.keyCode.ESCAPE:
            result = 'exit';
            break;
        default:
            result = 'default';
    }
 
    return result;
}


</script\>

#####Arrays

Creating arrays in JavaScript should be done using the shorthand [] constructor rather than the new Array() notation.

<script\>

var myArray = [];

</script\>

You can initialize an array during construction:

<script\>

var myArray = [ 1, 'WordPress', 2, 'Blog' ];

</script\>

In JavaScript, associative arrays are defined as objects.

#####Objects

There are many ways to create objects in JavaScript. Object literal notation, {}, is both the most performant, and also the easiest to read.

<script\>

var myObj = {};
Object literal notation should be used unless the object requires a specific prototype, in which case the object should be created by calling a constructor function with new.

</script\>

<script\>

var myObj = new ConstructorMethod();


</script\>


Object properties should be accessed via dot notation, unless the key is a variable or a string that would not be a valid identifier:

<script\>

prop = object.propertyName;
prop = object[ variableKey ];
prop = object['key-with-hyphens'];

</script\>


#####Iteration

When iterating over a large collection using a for loop, it is recommended to store the loop’s max value as a variable rather than re-computing the maximum every time:

<script\>

// Good &amp; Efficient
var i, max;
 
// getItemCount() gets called once
for ( i = 0, max = getItemCount(); i < max; i++ ) {
    // Do stuff
}
 
// Bad &amp; Potentially Inefficient:
// getItemCount() gets called every time
for ( i = 0; i < getItemCount(); i++ ) {
    // Do stuff
}


</script\>


#####Underscore.js Collection Functions

Learn and understand Underscore’s collection and array methods. These functions, including _.each, _.map, and _.reduce, allow for efficient, readable transformations of large data sets.

Underscore also permits jQuery-style chaining with regular JavaScript objects:

<script\>

var obj = {
    first: 'thing 1',
    second: 'thing 2',
    third: 'lox'
};
 
var arr = _.chain( obj )
    .keys()
    .map( function( key ) {
        return key + ' comes ' + obj[ key ];
    } )
    // Exit the chain
    .value();
 
// arr === [ 'first comes thing 1', 'second comes thing 2', 'third comes lox' ]


</script\>


Iterating Over jQuery Collections #Iterating Over jQuery Collections
The only time jQuery should be used for iteration is when iterating over a collection of jQuery objects:

<script\>

$tabs.each( function( index, element ) {
    var $element = $( element );
 
    // Do stuff to $element
} );


</script\>

Never use jQuery to iterate over raw data or vanilla JavaScript objects.

## PHP coding standard in Wordpress



### Single and Double Quotes

Use single and double quotes when appropriate. If you’re not evaluating anything in the string, use single quotes. You should almost never have to escape quotes in a string, because you can just alternate your quoting style, like so:

```php
    <?php

echo '<a href="/static/link" title="Yeah yeah!">Link name</a>';
echo "<a href='$link' title='$linktitle'>$linkname</a>";

 ?>

Text that goes into attributes should be run through esc_attr() so that single or double quotes do not end the attribute value and invalidate the HTML and cause a security issue.


#### Indentation

Your indentation should always reflect logical structure. Use real tabs and not spaces, as this allows the most flexibility across clients.

Exception: if you have a block of code that would be more readable if things are aligned, use spaces:

```php
    <?php


[tab]$foo   = 'somevalue';
[tab]$foo2  = 'somevalue2';
[tab]$foo34 = 'somevalue3';
[tab]$foo5  = 'somevalue4';

?>

For associative arrays, each item should start on a new line when the array contains more than one item:

```php
    <?php

$query = new WP_Query( array( 'ID' => 123 ) );

$args = array( 
[tab]'post_type'   => 'page',
[tab]'post_author' => 123,
[tab]'post_status' => 'publish',
);
 
$query = new WP_Query( $args );

?>

Note the comma after the last array item: this is recommended because it makes it easier to change the order of the array, and makes for cleaner diffs when new items are added.

```php
    <?php


$my_array = array(
[tab]'foo'   => 'somevalue',
[tab]'foo2'  => 'somevalue2',
[tab]'foo3'  => 'somevalue3',
[tab]'foo34' => 'somevalue3',
);

?>

For switch structures case should indent one tab from the switch statement and break one tab from the case statement.

```php
    <?php


switch ( $type ) {
[tab]case 'foo':
[tab][tab]some_function();
[tab][tab]break;
[tab]case 'bar':
[tab][tab]some_function();
[tab][tab]break;
}

?>

Rule of thumb: Tabs should be used at the beginning of the line for indentation, while spaces can be used mid-line for alignment.

#### Brace Style

Braces shall be used for all blocks in the style shown here:

```php
    <?php

if ( condition ) {
    action1();
    action2();
} elseif ( condition2 && condition3 ) {
    action3();
    action4();
} else {
    defaultaction();
}

?>

If you have a really long block, consider whether it can be broken into two or more shorter blocks, functions, or methods, to reduce complexity, improve ease of testing, and increase readability.

Braces should always be used, even when they are not required:

```php
    <?php

if ( condition ) {
    action0();
}
 
if ( condition ) {
    action1();
} elseif ( condition2 ) {
    action2a();
    action2b();
}
 
foreach ( $items as $item ) {
    process_item( $item );
}

?>

Note that requiring the use of braces just means that single-statement inline control structures are prohibited. You are free to use the alternative syntax for control structures (e.g. if/endif, while/endwhile)—especially in your templates where PHP code is embedded within HTML, for instance:

```php
  

<?php if ( have_posts() ) : ?>
    <div class="hfeed">
        <?php while ( have_posts() ) : the_post(); ?>
            <article id="post-<?php the_ID() ?>" class="<?php post_class() ?>">
                <!-- ... -->
            </article>
        <?php endwhile; ?>
    </div>
<?php endif; ?>


