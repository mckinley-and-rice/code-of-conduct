# Markdown style guide

Much of what makes Markdown great is the ability to write plain text, and get
great formatted output as a result. To keep the slate clean for the next author,
your Markdown should be simple and consistent with the whole corpus wherever
possible.

We seek to balance three goals:

1. *Source text is readable and portable.*
2. *Markdown files are maintainable over time and across teams.*
3. *The syntax is simple and easy to remember.*

Contents:

1.  [Document layout](#document-layout)
1.  [Character line limit](#character-line-limit)
1.  [Trailing whitespace](#trailing-whitespace)
1.  [Headings](#headings)
    1.  [ATX-style headings](#atx-style-headings)
    1.  [Add spacing to headings](#add-spacing-to-headings)
1.  [Lists](#lists)
    1.  [Use lazy numbering for long lists](#use-lazy-numbering-for-long-lists)
    1.  [Nested list spacing](#nested-list-spacing)
1.  [Code](#code)
    1.  [Inline](#inline)
    1.  [Codeblocks](#codeblocks)
    1.  [Declare the language](#declare-the-language)
    1.  [Escape newlines](#escape-newlines)
    1.  [Nest codeblocks within lists](#nest-codeblocks-within-lists)
1.  [Links](#links)
    1.  [Use informative Markdown link titles](#use-informative-markdown-link-titles)
1.  [Images](#images)
1.  [Prefer lists to tables](#prefer-lists-to-tables)
1.  [Strongly prefer Markdown to HTML](#strongly-prefer-markdown-to-html)

## Document layout

In general, most documents benefit from some variation of the following layout:

```markdown
# Document Title

Short introduction.

[TOC]

## Topic

Content.

## See also

* https://link-to-more-info
```

1.  `# Document Title`: The first heading should be a level one heading, and
    should ideally be the same or nearly the same as the filename. The first
    level one heading is used as the page `<title>`.

1.  `author`: *Optional*. If you'd like to claim ownership of the document or
    if you are very proud of it, add yourself under the title. However,
    revision history generally suffices.

1.  `Short introduction.` 1-3 sentences providing a high-level overview of the
    topic. Imagine yourself as a complete newbie, who landed on your "Extending
    Foo" doc and needs to know the most basic assumptions you take for granted.
    "What is Foo? Why would I extend it?"

1.  `[TOC]`: if you use hosting that supports table of contents, such as Gitiles,
    put `[TOC]` after the short introduction. See
    [`[TOC]` documentation](https://gerrit.googlesource.com/gitiles/+/master/Documentation/markdown.md#Table-of-contents).

1.  `## Topic`: The rest of your headings should start from level 2.

1.  `## See also`: Put miscellaneous links at the bottom for the user who wants
    to know more or didn't find what she needed.

## Character line limit

Obey projects' character line limit wherever possible. Long URLs and tables are
the usual suspects when breaking the rule. (Headings also can't be wrapped, but
we encourage keeping them short). Otherwise, wrap your text:

```markdown
Lorem ipsum dolor sit amet, nec eius volumus patrioque cu, nec et commodo
hendrerit, id nobis saperet fuisset ius.

*   Malorum moderatius vim eu. In vix dico persecuti. Te nam saperet percipitur
    interesset. See the [foo docs](https://gerrit.googlesource.com/gitiles/+/master/Documentation/markdown.md).
```

Often, inserting a newline before a long link preserves readability while
minimizing the overflow:

```markdown
Lorem ipsum dolor sit amet. See the
[foo docs](https://gerrit.googlesource.com/gitiles/+/master/Documentation/markdown.md)
for details.
```

## Trailing whitespace

Don't use trailing whitespace, use a trailing backslash.

The [CommonMark spec](http://spec.commonmark.org/0.20/#hard-line-breaks) decrees
that two spaces at the end of a line should insert a `<br />` tag. However, many
directories have a trailing whitespace presubmit check in place, and many IDEs
will clean it up anyway.

Best practice is to avoid the need for a `<br />` altogether. Markdown creates
paragraph tags for you simply with newlines: get used to that.

## Headings

### ATX-style headings

```markdown
## Heading 2
```

Headings with `=` or `-` underlines can be annoying to maintain and don't fit
with the rest of the heading syntax. The user has to ask: Does `---` mean H1 or
H2?

```markdown
Heading - do you remember what level? DO NOT DO THIS.
---------
```

### Add spacing to headings

Prefer spacing after `#` and newlines before and after:

```markdown
...text before.

# Heading 1

Text after...
```

Lack of spacing makes it a little harder to read in source:

```markdown
...text before.

#Heading 1
Text after... DO NOT DO THIS.
```

## Lists

### Use lazy numbering for long lists

Markdown is smart enough to let the resulting HTML render your numbered lists
correctly. For longer lists that may change, especially long nested lists, use
"lazy" numbering:

```markdown
1.  Foo.
1.  Bar.
    1.  Foofoo.
    1.  Barbar.
1.  Baz.
```

However, if the list is small and you don't anticipate changing it, prefer fully
numbered lists, because it's nicer to read in source:

```markdown
1.  Foo.
2.  Bar.
3.  Baz.
```

### Nested list spacing

When nesting lists, use a 4 space indent for both numbered and bulleted lists:

```markdown
1.  2 spaces after a numbered list.
    4 space indent for wrapped text.
2.  2 spaces again.

*   3 spaces after a bullet.
    4 space indent for wrapped text.
    1.  2 spaces after a numbered list.
        8 space indent for the wrapped text of a nested list.
    2.  Looks nice, don't it?
*   3 spaces after a bullet.
```

The following works, but it's very messy:

```markdown
* One space,
with no indent for wrapped text.
     1. Irregular nesting... DO NOT DO THIS.
```

Even when there's no nesting, using the 4 space indent makes layout consistent
for wrapped text:

```markdown
*   Foo,
    wrapped.

1.  2 spaces
    and 4 space indenting.
2.  2 spaces again.
```

However, when lists are small, not nested, and a single line, one space can
suffice for both kinds of lists:

```markdown
* Foo
* Bar
* Baz.

1. Foo.
2. Bar.
```

## Code

### Inline

&#96;Backticks&#96; designate `inline code`, and will render all wrapped content
literally. Use them for short code quotations and field names:

```markdown
You'll want to run `really_cool_script.sh arg`.

Pay attention to the `foo_bar_whammy` field in that table.
```

Use inline code when referring to file types in an abstract sense, rather than a
specific file:

```markdown
Be sure to update your `README.md`!
```

Backticks are the most common approach for "escaping" Markdown metacharacters;
in most situations where escaping would be needed, code font just makes sense
anyway.

### Codeblocks

For code quotations longer than a single line, use a codeblock:

<pre>
```python
def Foo(self, bar):
  self.bar = bar
```
</pre>

#### Declare the language

It is best practice to explicitly declare the language, so that neither the
syntax highlighter nor the next editor must guess.

#### Indented codeblocks are sometimes cleaner

Four-space indenting is also interpreted as a codeblock. These can look
cleaner and be easier to read in source, but there is no way to specify the
language. We encourage their use when writing many short snippets:

```markdown
You'll need to run:

    bazel run :thing -- --foo

And then:

    bazel run :another_thing -- --bar

And again:

    bazel run :yet_again -- --baz
```

#### Escape newlines

Because most commandline snippets are intended to be copied and pasted directly
into a terminal, it's best practice to escape any newlines. Use a single
backslash at the end of the line:

<pre>
```shell
bazel run :target -- --flag --foo=longlonglonglonglongvalue \
--bar=anotherlonglonglonglonglonglonglonglonglonglongvalue
```
</pre>

#### Nest codeblocks within lists

If you need a codeblock within a list, make sure to indent it so as to not break
the list:

```markdown
*   Bullet.

    ```c++
    int foo;
    ```

*   Next bullet.
```

You can also create a nested code block with 4 spaces. Simply indent 4
additional spaces from the list indentation:

```markdown
*   Bullet.

        int foo;

*   Next bullet.
```

## Links

Long links make source Markdown difficult to read and break the 80 character
wrapping. **Wherever possible, shorten your links**.

### Use informative Markdown link titles

Markdown link syntax allows you to set a link title, just as HTML does. Use it
wisely.

Titling your links as "link" or "here" tells the reader precisely nothing when
quickly scanning your doc and is a waste of space:

```markdown
See the syntax guide for more info: [link](syntax_guide.md).
Or, check out the style guide [here](style_guide.md).
DO NOT DO THIS.
```

Instead, write the sentence naturally, then go back and wrap the most
appropriate phrase with the link:

```markdown
See the [syntax guide](syntax_guide.md) for more info.
Or, check out the [style guide](style_guide.md).
```

## Images

Use images sparingly, and prefer simple screenshots. This guide is designed
around the idea that plain text gets users down to the business of communication
faster with less reader distraction and author procrastination. However, it's
sometimes very helpful to show what you mean.

See [image syntax](https://gerrit.googlesource.com/gitiles/+/master/Documentation/markdown.md#Images).

## Prefer lists to tables

Any tables in your Markdown should be small. Complex, large tables are difficult
to read in source and most importantly, **a pain to modify later**.

```markdown
Fruit | Attribute | Notes
--- | --- | --- | ---
Apple | [Juicy](https://example.com/SomeReallyReallyReallyReallyReallyReallyReallyReallyLongQuery), Firm, Sweet | Apples keep doctors away.
Banana | [Convenient](https://example.com/SomeDifferentReallyReallyReallyReallyReallyReallyReallyReallyLongQuery), Soft, Sweet | Contrary to popular belief, most apes prefer mangoes.

DO NOT DO THIS
```

[Lists](#lists) and subheadings usually suffice to present the same information
in a slightly less compact, though much more edit-friendly way:

```markdown
## Fruits

### Apple

* [Juicy](https://SomeReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyLongURL)
* Firm
* Sweet

Apples keep doctors away.

### Banana

* [Convenient](https://example.com/SomeDifferentReallyReallyReallyReallyReallyReallyReallyReallyLongQuery)
* Soft
* Sweet

Contrary to popular belief, most apes prefer mangoes.
```

However, there are times when a small table is called for:

```markdown
Transport | Favored by | Advantages
--- | --- | ---
Swallow | Coconuts | Otherwise unladen
Bicycle | Miss Gulch | Weatherproof
X-34 landspeeder | Whiny farmboys | Cheap since the X-38 came out
```

## Strongly prefer Markdown to HTML

Please prefer standard Markdown syntax wherever possible and avoid HTML hacks.
If you can't seem to accomplish what you want, reconsider whether you really
need it. Except for [big tables](#prefer-lists-to-tables), Markdown meets almost
all needs already.


## Rules

### MD001 - Header levels should only increment by one level at a time

Headers should not be skipped, instead incremented one by one

**Wrong**:

```markdown
# Header 1

### Header 3

We skipped out a 2nd level header in this document
```

**Correct**:

```markdown
# Header 1

## Header 2

### Header 3

#### Header 4

## Another Header 2

### Another Header 3
```

### MD002 - First header should be a top level header

The first header of the document should be a top level header (H1).

**Wrong**:

```markdown
## This isn't a H1 header

### Another header
```

**Correct**:

```markdown
# Start with a H1 header

## Then use a H2 for subsections
```

### MD003 - Header style

The header style used on documents should be `atx`.

**Wrong**:

```markdown
Setext style H1
===============

Setext style H2
---------------
```

### ATX style H3

**Correct**:

```markdown
# ATX style H1

## ATX style H2
```

### MD004 - Unordered list style

Lists should be created using dashes.

**Wrong**:

```markdown
* Item 1
+ Item 2
- Item 3
```

**Correct**:

```markdown
- Item 1
- Item 2
- Item 3
```

### MD005 - No inconsistent indentation for list items at the same level

Lists should have consistent indentation, usually this rule will be triggered because of a typo.

**Wrong**:

```markdown
- Item 1
    - Nested Item 1
    - Nested Item 2
    - A misaligned item
```

**Correct**:

```markdown
- Item 1
    - Nested Item 1
    - Nested Item 2
    - Nested Item 3
```

### MD006 - Consider starting bulleted lists at the beginning of the line

Bulleted lists should start on the beginning of the line.

**Wrong**:

```markdown
Some text

    * List item
    * List item
```

**Correct**:

```markdown
Some test

* List item
* List item
```

### MD007 - Unordered list indentation

List items should be indented using 4 spaces.

**Wrong**:

```markdown
* List item
    * Nested list item indented by 3 spaces
```

**Correct**:

```markdown
* List item
    * Nested list item indented by 4 spaces
```

### MD009 - No trailing spaces

There shouldn't have any trailing spaces after the end of the lines.

To fix this, find the line that is triggered and remove any trailing spaces from the end.

### MD010 - No hard tabs

Spaces should be used for indentation instead of hard tabs.

To fix this, replace any hard tab characters with spaces instead.

### MD011 - No reversed link syntax

When creating links you should use the `[]` surrounding the text and `()` surrounding the link.

**Wrong**:

```markdown
(Incorrect link syntax)[http://www.example.com/]
```

**Correct**:

```markdown
    [Correct link syntax](http://www.example.com/)
```

### MD012 - No multiple consecutive blank lines

There should not have more than one consecutive blank line on the document.

**Wrong**:

```markdown
Some text here


Some more text here
```

**Correct**:

```markdown
Some text here

Some more text here
```

### MD018 - Use space after hash on atx style header

There should be a space after the hashes on atx style headers.

**Wrong**:

```markdown
#Header 1

##Header 2
```

**Correct**:

```markdown
# Header 1

## Header 2
```

### MD019 - No multiple spaces after hash on atx style header

There shouldn't have more than 1 space after the hash on atx style headers.

**Wrong**:

```markdown
#  Header 1

##  Header 2
```

**Correct**:

```markdown
# Header 1

## Header 2
```

### MD022 - Headers should be surrounded by blank lines

All headers should have a blank line both before and after (except where the header is at the beginning or end of the document)

**Wrong**:

```markdown
# Header 1
Some text

Some more text
## Header 2
```

**Correct**:

```markdown
# Header 1

Some text

Some more text

## Header 2
```

### MD023 - Headers must start at the beginning of the line

**Wrong**:

```markdown
Some text

    # Indented header
```

**Correct**:

```markdown
Some text

# Header
```

### MD025 - No multiple top level headers in the same document

There should only have one top level header (`h1`) on a document.

**Wrong**:

```markdown
# Top level header

# Another top level header
```

**Correct**:

```markdown
# Title

## Header

## Another header
```

### MD027 - No multiple spaces after blockquote symbol

Blockquote should not have more than one space after the blockquote symbol ( `>` ).

**Wrong**:

```markdown
>  This is a block quote with bad indentation
>  there should only be one.
```

**Correct**:

```markdown
> This is a block quote with bad indentation
> there should only be one.
```

### MD028 - No blank line inside blockquote

There shouldn't have a blank line inside the same blockquote.

**Wrong**:

```markdown
> This is a blockquote
> which is immediately followed by

> this blockquote. Unfortunately
> In some parsers, these are treated as the same blockquote.
```

**Correct**:

```markdown
> This is a blockquote.

And Jimmy also said:

> This too is a blockquote.
```

Alternatively, if they are supposed to be the same quote, then add the blockquote symbol at the beginning of the blank line

```markdown
> This is a blockquote.
>
> This is the same blockquote.
```

### MD029 - Ordered list item prefix

Ordered lists should be ordered by a prefix that increases in numerical order.

**Wrong**:

```markdown
1. Do this.
1. Do that.
1. Done.
```

**Correct**:

```markdown
1. Do this.
2. Do that.
3. Done.
```

### MD030 - Space after list markers

There should be only one space after a list marker.

**Wrong**:

```markdown
*Foo
*Bar
*Baz

1.  Foo
1.  Bar
1.  Baz
```

**Correct**:

```markdown
* Foo
* Bar
* Baz

1. Foo
1. Bar
1. Baz

1. Foo
* Bar
1. Baz
```

### MD031 - Fenced code blocks should be surrounded by blank lines

Fenced code blocks should be surrounded by blank lines.

**Wrong**:

```markdown
Some text
`` `
Code block
`` `

`` `
Another code block
`` `
Some more text
```

**Correct**:

```markdown
Some text

`` `
Code block
`` `

`` `
Another code block
`` `

Some more text
```

### MD032 - Lists should be surrounded by blank lines

Lists should be surrounded by blank lines.

**Wrong**:

```markdown
Some text
* Some
* List

1. Some
2. List
Some text
```

**Correct**:

```markdown
Some text

* Some
* List

1. Some
2. List

Some text
```

### MD034 - No bare URLs

There should no bare urls on the document, surround the links with angle brackets (`< >`).

**Wrong**:

```markdown
For more information, see http://www.example.com/.
```

**Correct**:

```markdown
For more information, see <http://www.example.com/>.
```

### MD035 - Horizontal rule style

Horizontal rules should be created using three slashes (`---`).

**Wrong**:

```markdown
***

* * *

****
```

**Correct**:

```markdown
---
```

### MD037 - No spaces inside emphasis markers

There shouldn't have spaces inside emphasis markers (bold, italic).

**Wrong**:

```markdown
Here is some ** bold ** text.

Here is some _ italic _ text.
```

**Correct**:

```markdown
Here is some **bold** text.

Here is some _italic_ text.
```

### MD038 - No spaces inside code span elements

There shouldn't have spaces inside code span elements.

**Wrong**:

```markdown
` some text `

`some text `

` some text`
```

**Correct**:

```markdown
`some text`
```

### MD039 - No spaces inside link text

There shouldn't have spaces inside link texts.

**Wrong**:

```markdown
[ a link ](http://www.example.com/)
```

**Correct**:

```markdown
[a link](http://www.example.com/)
```

### MD046 - Code block style

Code blocks should be fenced.

**Wrong**:

```markdown

    codeblock using indentation.

```

**Correct**:

```markdown

` ` `
codeblock using fences.
` ` `

```
