import test from 'ava';
import 'babel-core/register';
import postcss from 'postcss';
import easywygDescribe from '../lib/index';

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

test('does something', t => {
    let resultJson;

    return postcss([
      easywygDescribe(json => {
        resultJson = json;
      })
    ]).process(input)
      .then( result => {
          t.same(resultJson, output);
          t.same(result.warnings().length, 0);
      });
});

