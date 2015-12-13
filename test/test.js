import postcss from 'postcss';
import easywygDescribe from '../src/plugin';
import assert from 'assert';

let input = `
/* Easywyg default content-styles
 *
 * NOTE: Comments in this file MUST BE KEPT after compilation.
 * TLYK: This file will be prosessed with Autoprefixer automatically.
 */

/* This needs to support grids, embeds and all other easywyg stuff */
@import "content_styles/grids";
@import "content_styles/tables";
@import "content_styles/embeds";
@import "content_styles/figures";
@import "content_styles/headings";

/* Assume that is your website styles below */

body {
  font-family: Arial, sans-serif;
}

/* Styles below will be added into 'styles' dropdown in easywyg editor
 * NOTE: Empty selectors will be removed after compilation. Add ! at the
 * beginning of comment to preserve comment after compilation. That matters.
 */

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

`;

let output = '{"styles":{"Paragraphs":[{"title":"Paragraph","command":"p:wrap","command_type":"wrap","option_tag":"p","option_classes":[]},{"title":"Centered Paragraph","command":"p_center:wrap","command_type":"wrap","option_tag":"p","option_classes":["center"]},{"title":"Bigger Paragraph","command":"p_bigger:wrap","command_type":"wrap","option_tag":"p","option_classes":["bigger"]},{"title":"Right Aligned Paragraph","command":"p_right:wrap","command_type":"wrap","option_tag":"p","option_classes":["right"]},{"title":"Heading H1","command":"h1:wrap","command_type":"wrap","option_tag":"h1","option_classes":[]},{"title":"Heading H2","command":"h2:wrap","command_type":"wrap","option_tag":"h2","option_classes":[]},{"title":"Heading H3","command":"h3:wrap","command_type":"wrap","option_tag":"h3","option_classes":[]},{"title":"Heading H4","command":"h4:wrap","command_type":"wrap","option_tag":"h4","option_classes":[]},{"title":"Heading H5","command":"h5:wrap","command_type":"wrap","option_tag":"h5","option_classes":[]},{"title":"Heading H6","command":"h6:wrap","command_type":"wrap","option_tag":"h6","option_classes":[]},{"title":"Headline","command":"h3_headline:wrap","command_type":"wrap","option_tag":"h3","option_classes":["headline"]},{"title":"Blockquote","command":"blockquote:wrap","command_type":"wrap","option_tag":"blockquote","option_classes":[]},{"title":"Annotation","command":"blockquote_annotation:wrap","command_type":"wrap","option_tag":"blockquote","option_classes":["annotation"]},{"title":"Preformatted Text","command":"pre:wrap","command_type":"wrap","option_tag":"pre","option_classes":[]}],"Formatting":[{"title":"Bold","command":"strong:wrap","command_type":"wrap","option_tag":"strong","option_classes":[]},{"title":"Italic","command":"em:wrap","command_type":"wrap","option_tag":"em","option_classes":[]},{"title":"Strike","command":"s:wrap","command_type":"wrap","option_tag":"s","option_classes":[]},{"title":"Underline","command":"u:wrap","command_type":"wrap","option_tag":"u","option_classes":[]},{"title":"Quote","command":"q:wrap","command_type":"wrap","option_tag":"q","option_classes":[]},{"title":"Code","command":"code:wrap","command_type":"wrap","option_tag":"code","option_classes":[]},{"title":"Address","command":"address:wrap","command_type":"wrap","option_tag":"address","option_classes":[]},{"title":"Subscript","command":"sub:wrap","command_type":"wrap","option_tag":"sub","option_classes":[]},{"title":"Superscript","command":"sup:wrap","command_type":"wrap","option_tag":"sup","option_classes":[]},{"title":"Smaller Text","command":"small:wrap","command_type":"wrap","option_tag":"small","option_classes":[]},{"title":"Variable or Formula","command":"var:wrap","command_type":"wrap","option_tag":"var","option_classes":[]},{"title":"Sample Text","command":"samp:wrap","command_type":"wrap","option_tag":"samp","option_classes":[]}]},"allowClasses":{"p":["center","bigger","right"],"h3":["headline"],"blockquote":["annotation"]}}';

it('gives proper json', () => {
  let resultJson;

  return postcss([
    easywygDescribe(json => {
      resultJson = json;
    })
  ]).process(input)
    .then( result => {
      assert.equal(resultJson, output);
    });
});

