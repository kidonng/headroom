<h1 align="center">Head Room</h1>

<div align="center">

[![Latest version](https://img.shields.io/npm/v/headroom.svg?style=for-the-badge)](https://npm.im/headroom)
![npm downloads](https://img.shields.io/npm/dt/headroom.svg?style=for-the-badge)
[![License](https://img.shields.io/github/license/kidonng/headroom.svg?style=for-the-badge)](LICENSE)

</div>

The same old headroom simplified.

Looking for a complete solution? Try [the original one](https://github.com/WickyNilliams/headroom.js).

## Install

- npm: `npm i headroom`
- Yarn: `yarn add headroom`

## Usage

```js
import headroom from 'headroom'

// Selector
headroom('header')

// Default selector is `.headroom`
headroom()

// Element
headroom(document.querySelector('header'))

const stop = hearoom('header',
// Default options
{
  // Use default style (https://github.com/kidonng/headroom/blob/master/index.js#L11-L24)
  useStyle: true,
  // Debounce wait
  wait: 100
})
// Stop listening
stop()
```
