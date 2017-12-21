module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.config('watch',{
    css: {
      files: [ '../public/*/*.*'],
      tasks:['uglify'],
      options:{
        livereload:true
      }
    }
  })
}
