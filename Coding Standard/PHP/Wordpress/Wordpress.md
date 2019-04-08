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

Objects #Objects
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

