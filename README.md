# open-files.js

This is a small JS library that will list the files a process has opened.

## Usage

```js
const openFiles = require('open-files');
openFiles(18523, (err, files) => console.log(files));
/* example output:
  [ '/usr/local/Cellar/node/9.7.1/bin/node',
    '/usr/local/Cellar/icu4c/60.2/lib/libicui18n.60.2.dylib',
    '/usr/local/Cellar/icu4c/60.2/lib/libicuuc.60.2.dylib',
    '/usr/local/Cellar/icu4c/60.2/lib/libicudata.60.2.dylib',
    '/usr/lib/dyld',
    '/private/var/db/dyld/dyld_shared_cache_x86_64',
    '/dev/ttys001',
    '/dev/ttys001',
    '/dev/ttys001',
    '/dev/ttys001',
    '/dev/null',
    '/dev/ttys001',
    '/dev/ttys001' ]
*/
```

## Credits

The Windows implementation has been lifted from the excellent [Anisthesia](https://github.com/erengy/anisthesia) project by @erengy.

## License

`open-files.js` is released under the [MIT](https://spdx.org/licenses/MIT.html) license:

```
Copyright (c) 2018 Shiz
Copyright (c) 2017-2018 Eren Okka

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
