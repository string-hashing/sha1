:question: [@string-hashing/sha1](https://string-hashing.github.io/sha1)
==

SHA1 bytestring hashing for JavaScript.
See [docs](https://string-hashing.github.io/sha1/index.html).

```js
import {alloc} from '@array-like/alloc';
import * as ascii from '@codec-bytes/ascii';
import * as base16 from '@codec-bytes/base16';
import {sha1} from '@string-hashing/sha1';
const string = 'The quick brown fox jumps over the lazy dog';
const bytes = ascii.encode(string);
const digest = sha1(bytes, bytes.length * 8, alloc(20));
digest; // [0x2f, 0xd4, 0xe1, 0xc6, 0x7a, 0x2d, 0x28, 0xfc, 0xed, 0x84, ...]
base16.decode(digest); // '2FD4E1C67A2D28FCED849EE1BB76E7391B93EB12'
```

[![License](https://img.shields.io/github/license/string-hashing/sha1.svg)](https://raw.githubusercontent.com/string-hashing/sha1/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@string-hashing/sha1.svg)](https://www.npmjs.org/package/@string-hashing/sha1)
[![Tests](https://img.shields.io/github/workflow/status/string-hashing/sha1/ci?event=push&label=tests)](https://github.com/string-hashing/sha1/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/string-hashing/sha1.svg)](https://github.com/string-hashing/sha1/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/string-hashing/sha1.svg)](https://github.com/string-hashing/sha1/issues)
[![Downloads](https://img.shields.io/npm/dm/@string-hashing/sha1.svg)](https://www.npmjs.org/package/@string-hashing/sha1)

[![Code issues](https://img.shields.io/codeclimate/issues/string-hashing/sha1.svg)](https://codeclimate.com/github/string-hashing/sha1/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/string-hashing/sha1.svg)](https://codeclimate.com/github/string-hashing/sha1/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/string-hashing/sha1/main.svg)](https://codecov.io/gh/string-hashing/sha1)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/string-hashing/sha1.svg)](https://codeclimate.com/github/string-hashing/sha1/trends/technical_debt)
[![Documentation](https://string-hashing.github.io/sha1/badge.svg)](https://string-hashing.github.io/sha1/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@string-hashing/sha1)](https://bundlephobia.com/result?p=@string-hashing/sha1)
