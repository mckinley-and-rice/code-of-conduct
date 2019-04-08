What are WordPress coding standards?

WordPress coding standards refer to a set of rules for WordPress developers.
According to WordPress core development Blog, following four (mentioned below) WordPress coding standards ensures seamless development, avoids errors, and makes it easy to manage, contribute, and develop the WordPress platform.

Why have coding standards?

Coding standards help avoid common coding errors, improve the readability of code, and simplify modification. They ensure that files within the project appear as if they were created by a single person.

Following the standards means anyone will be able to understand a section of code and modify it, if needed, without regard to when it was written or by whom.
If you are planning to contribute to WordPress core, you need to familiarize yourself with these standards, as any code you submit will need to comply with them. 

Coding standards for languages used in WordPress :- 

    1. WordPress HTML Coding Standards.
    2. WordPress PHP Coding Standards
    3. WordPress CSS Coding Standards.
    4. WordPress JavaScript Coding Standards.

1. WordPress HTML Coding Standards.

(A) Indentation: Your HTML code should contain a proper indentation. For example, using Tabs instead of Spaces helps you structure your HTML code. It also improves code readability.
Proper indentation
<div class="entry-content">
       <p>Name, Father name</p>
</div>
Improper indentation
<div class="entry-content">
<p>Name, Father name</p>
</div>
(B) Single or Double quotes: HTML code snippets should have proper quotes for attributes. When using attributes with values, you must enclose values within single or double quotes.
Correct
type="text"
type='text'
Incorrect
type=text
(C) Attributes and Tags: Always write HTML attributes and tags in lowercase. It makes a difference for machine interpretation. You can also take care of the human readability.
Machine interpretation
<meta http-equiv="content-type" content="text/html;" charset=utf-8” />
Human readability
<a href="http://example.com/" title="Description Here">Example.com</a>
(D) Close elements properly: Close all HTML tags properly. Also, take care of the spaces in self-closing tags.
Use
<br />
Instead of using
<br/>
(E) Write well-markup HTML pages: To ensure your page validation, use W3C Validator for the purpose.


Reference:- 
1. https://wpcrib.com/wordpress-coding-standards/
2. https://make.wordpress.org/core/handbook/best-practices/coding-standards/html/
3. https://www.hongkiat.com/blog/wordpress-coding-standard/
