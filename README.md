# gulp-[xat][] v1.0.0

> gulp plugin for [xat][] template

# :cd: Install

Via npm:

    npm i --save-dev gulp-xat

# Usage

```js
const xat = reuqire('gulp-xat')

gulp.src('src/**/*.xat')
  .pipe(xat())
  .pipe(gulp.dest('build'))
```

# License

MIT

[xat]: https://github.com/kt3k/xat
