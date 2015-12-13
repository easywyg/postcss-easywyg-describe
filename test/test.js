import postcss from 'postcss';
import easywygDescribe from '../src/plugin';
import assert from 'assert';

let input = `
/*! Name: Paragraph
 * Group: Paragraphs
 */
p { color: inherit; }

/*! Name: Centered Paragraph
 * Group: Paragraphs
 */
p.center { text-align: center; }
`;

let output = '{\"styles\":{\"Paragraphs\":[{\"title\":\"Paragraph\",\"command\":\"p:wrap\",\"command_type\":\"wrap\",\"option_tag\":\"p\",\"option_classes\":[]},{\"title\":\"Centered Paragraph\",\"command\":\"p_center:wrap\",\"command_type\":\"wrap\",\"option_tag\":\"p\",\"option_classes\":[\"center\"]}]},\"allowClasses\":{\"p\":[\"center\"]}}';

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

