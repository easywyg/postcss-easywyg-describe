# postcss-easywyg-describe

A plugin for PostCSS.

Parse special Easywyg comments placed in CSS file and generate JSON output. Using this JSON Easywyg will generate dropdown style menu for you.

## Install
```
npm install postcss-easywyg-describe
```

## Usage

```js
postcss([
  easywygDescribe(json => {
    console.log(json);
  })
]).process(css)
```

## How Easywyg comments looks like?

See https://github.com/easywyg/content-styles for details.

```css
/*! Name: Paragraph
 * Group: Paragraphs
 */
p { color: inherit; }

/*! Name: Centered Paragraph
 * Group: Paragraphs
 */
p.center { text-align: center; }

/*! Name: Bigger Paragraph
 * Group: Paragraphs
 */
p.bigger { font-size: 120%; }

/*! Name: Right Aligned Paragraph
 * Group: Paragraphs
 */
p.right  { text-align: right; }

/*! Name: Heading H1
 * Group: Paragraphs
 */
h1 { color: inherit }

/*! Name: Heading H2
 * Group: Paragraphs
 */
h2 { color: inherit; }

/*! Name: Heading H3
 * Group: Paragraphs
 */
h3 { color: inherit; }

/*! Name: Heading H4
 * Group: Paragraphs
 */
h4 { color: inherit; }

/*! Name: Heading H5
 * Group: Paragraphs
 */
h5 { color: inherit; }

/*! Name: Heading H6
 * Group: Paragraphs
 */
h6 { color: inherit; }

/*! Name: Headline
 * Group: Paragraphs
 */
h3.headline {
  text-align: center;
  margin: 2em 0;
  color: #4b96e1;
  font-weight: normal;
}

/*! Name: Blockquote
 * Group: Paragraphs
 */
blockquote { color: inherit; }

/*! Name: Annotation
 * Group: Paragraphs
 */
blockquote.annotation {
  margin: 2em 5em;
  font-style: italic;
  padding: 0;
  padding: 15px;
  border-radius: 4px;
}

/*! Name: Preformatted Text
 * Group: Paragraphs
 */
pre { color: inherit; }

/*! Name: Bold
 * Group: Formatting
 */
strong { color: inherit; }

/*! Name: Italic
 * Group: Formatting
 */
em { color: inherit; }

/*! Name: Strike
 * Group: Formatting
 */
s { color: inherit; }

/*! Name: Underline
 * Group: Formatting
 */
u { color: inherit; }

/*! Name: Quote
 * Group: Formatting
 */
q { color: inherit; }

/*! Name: Code
 * Group: Formatting
 */
code { color: inherit; }

/*! Name: Address
 * Group: Formatting
 */
address { color: inherit; }

/*! Name: Subscript
 * Group: Formatting
 */
sub { color: inherit; }

/*! Name: Superscript
 * Group: Formatting
 */
sup { color: inherit; }

/*! Name: Smaller Text
 * Group: Formatting
 */
small { color: inherit; }

/*! Name: Variable or Formula
 * Group: Formatting
 */
var { color: inherit; }

/*! Name: Sample Text
 * Group: Formatting
 */
samp { color: inherit; }

```
