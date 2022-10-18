import test from 'ava';
import {alloc} from '@array-like/alloc';
import {product} from '@set-theory/cartesian-product';
import * as ascii from '@codec-bytes/ascii';

import * as hash from '#module';

function macro(t, [[sha1name, sha1], [string, expected]]) {
	const digest = sha1(ascii.encode(string), string.length * 8, alloc(20));

	t.deepEqual(digest, expected, `${sha1name} ${string}`);
}

macro.title = (title, [[f], [x, y]]) =>
	title ?? `${f}(${JSON.stringify(x)}) == ${JSON.stringify(y)}`;

const inputs = product(
	[
		[['sha1', hash.sha1]],

		[
			[
				'The quick brown fox jumps over the lazy dog',
				[
					0x2f, 0xd4, 0xe1, 0xc6, 0x7a, 0x2d, 0x28, 0xfc, 0xed, 0x84, 0x9e,
					0xe1, 0xbb, 0x76, 0xe7, 0x39, 0x1b, 0x93, 0xeb, 0x12,
				],
			],
			[
				'The quick brown fox jumps over the lazy cog',
				[
					0xde, 0x9f, 0x2c, 0x7f, 0xd2, 0x5e, 0x1b, 0x3a, 0xfa, 0xd3, 0xe8,
					0x5a, 0x0b, 0xd1, 0x7d, 0x9b, 0x10, 0x0d, 0xb4, 0xb3,
				],
			],
			[
				'',
				[
					0xda, 0x39, 0xa3, 0xee, 0x5e, 0x6b, 0x4b, 0x0d, 0x32, 0x55, 0xbf,
					0xef, 0x95, 0x60, 0x18, 0x90, 0xaf, 0xd8, 0x07, 0x09,
				],
			],
			[
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				[
					0xcd, 0x36, 0xb3, 0x70, 0x75, 0x8a, 0x25, 0x9b, 0x34, 0x84, 0x50,
					0x84, 0xa6, 0xcc, 0x38, 0x47, 0x3c, 0xb9, 0x5e, 0x27,
				],
			],
			[
				'apple',
				[
					0xd0, 0xbe, 0x2d, 0xc4, 0x21, 0xbe, 0x4f, 0xcd, 0x01, 0x72, 0xe5,
					0xaf, 0xce, 0xea, 0x39, 0x70, 0xe2, 0xf3, 0xd9, 0x40,
				],
			],
			[
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
				[
					0x69, 0x45, 0xdf, 0xee, 0x74, 0x11, 0xa3, 0x7b, 0x37, 0xcd, 0x6b,
					0x0f, 0x47, 0xb0, 0xb2, 0x82, 0x64, 0x0d, 0xf1, 0x96,
				],
			],
			[
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
				[
					0x15, 0xf5, 0xc9, 0x56, 0xef, 0x13, 0xd8, 0x6f, 0xaa, 0xf4, 0xd7,
					0x44, 0xae, 0xd4, 0xb0, 0x6b, 0x11, 0x5f, 0x5b, 0x06,
				],
			],
			[
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e',
				[
					0xe8, 0x79, 0x1d, 0xfb, 0x0c, 0xa2, 0x63, 0x71, 0x21, 0x4f, 0x62,
					0x92, 0x01, 0x16, 0x43, 0x07, 0xd3, 0x13, 0x29, 0xe0,
				],
			],
		],
	],
	1,
);

for (const x of inputs) test(macro, x);
