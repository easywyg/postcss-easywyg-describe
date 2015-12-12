# postcss-easywyg-describe

A plugin for [PostCSS].

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
