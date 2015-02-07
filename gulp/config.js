var dest = "./dist";
var src = './src';

module.exports = {
  sass: {
    src: src + "/styles/**/*.{sass,scss,css}",
    dest: dest + "/styles",
    settings: {
      indentedSyntax: false, // Enable .sass syntax?
      imagePath: '/images' // Used by the image-url helper
    }
  },
  browserify: {
    settings: {
      transform: ['reactify', '6to5ify']
    },
    src: src + '/js/index.jsx',
    dest: dest + 'js',
    outputName: 'index.js',
  },
  through: {
    src: ['src/index.html', 'package.json'],
    dest: dest
  },
  watch: {
    src: 'src/**/*.*',
    tasks: ['build']
  }
};
