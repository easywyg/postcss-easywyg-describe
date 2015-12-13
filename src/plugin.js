'use strict';

import postcss from 'postcss';

class Describer {
  constructor() {
    this.result = {
      styles: {},
      allowClasses: {}
    };
  }

  set(selector, comment) {
    comment = this.parseComment(comment);

    let parts   = selector.split('.');
    let tag     = parts[0];
    let classes = parts.slice(1, parts.length);
    let command = '';

    if (classes.length) {
      command = `${tag}_${classes.join('_').replace('-', '_')}:wrap`;
    } else {
      command = `${tag}:wrap`;
    }

    let item = {
      title          : comment.name,
      command        : command,
      command_type   : 'wrap',
      option_tag     : tag,
      option_classes : classes
    };

    if (classes.length) {
      if (!this.result.allowClasses[tag]) {
        this.result.allowClasses[tag] = [];
      }

      this.result.allowClasses[tag] = this.result.allowClasses[tag].concat(classes);
    }

    if (comment.group) {
      if (!this.result.styles[comment.group]) {
        this.result.styles[comment.group] = [];
      }

      this.result.styles[comment.group].push(item);
    }
  }

  getJSON() {
    return JSON.stringify(this.result);
  }

  parseComment(comment) {
    return {
      name: comment.match(/Name *: *([^\n]+)/i)[1],
      group: comment.match(/Group *: *([^\n]+)/i)[1]
    }
  }
}

let describer = new Describer;

export default postcss.plugin('postcss-easywyg-describe', (callback) => {
  return (css, result) => {
    css.walk((decl) => {
      let annotation = decl.prev();
      let comment;

      // Does we have coment before current decl? Save it.
      if (annotation && 'comment' == annotation.type) {
        comment = annotation.text;
      }

      // If comment were found, set current rule and that comment
      if (comment && 'rule' == decl.type) {
        describer.set(decl.selector, comment);
      }
    });

    callback(describer.getJSON());
  };
});
