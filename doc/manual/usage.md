# Usage

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

First, require the polyfill at the entry point of your application
```js
await import('regenerator-runtime/runtime.js');
// or
import 'regenerator-runtime/runtime.js';
```

Then, import the library where needed
```js
const sha1 = await import('@string-hashing/sha1');
// or
import * as sha1 from '@string-hashing/sha1';
```
