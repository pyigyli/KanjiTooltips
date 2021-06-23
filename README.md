# Kanji Tooltips - browser addon

As I'm learning and consuming Japanese, I wanted to build a handy little tool for myself to help translate kanji characters.

This browser extension shows a little popup whenever you select a one character long piece of text that is a kanji character.
![/images/example-use.png](./images/example-use.png?raw=true "Example use of the addon")

This extension uses [kanji.js](https://kanji.js.org/) library for all kanji data.
Source files are compiled into a single file with [rollup.js](https://rollupjs.org) to make it work within browser addon setting.

### Get started

First clone the repository and move to the root folder.
Install all the dependencies with `yarn install`.
Compile the source files with `yarn build`.
Go to the browser's extensions settings and load the repository's root folder, which contains the `manifest.json`.

Note that all browsers do not support installing extensions straight from your own filesystem or you might need to enable developer mode to do that.
