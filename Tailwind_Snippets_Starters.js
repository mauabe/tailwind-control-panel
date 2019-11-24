Tailwind wiht Post CSS

module.exports = {
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...
  ]
}

tailwind with Webpack

module.exports = {
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...
  ]
}

// or inlcude in webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        // ...
        use: [
          // ...
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        ],
      }
    ],
  }
}

//Gulp
gulp.task('css', function () {
  const postcss = require('gulp-postcss')

  return gulp.src('src/styles.css')
    // ...
    .pipe(postcss([
      // ...
      require('tailwindcss'),
      require('autoprefixer'),
      // ...
    ]))
    // ...
    .pipe(gulp.dest('build/'))
})


Tailwind via CDN:
// You can't customize Tailwind's default theme
// You can't use any directives like @apply, @variants, etc.
// You can't enable features like group-hover
// You can't install third-party plugins

<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>