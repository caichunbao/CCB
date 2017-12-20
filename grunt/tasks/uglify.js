module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.config('uglify',{
    'dist':{
      'files':{
        "build/js/home.min.js":['public/js/*.js']
      }
    }
  })
}