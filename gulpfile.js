const gulp = require('gulp');
const Nodemon = require('gulp-nodemon');
const GulpMocha = require('gulp-mocha');
const env = require('gulp-env');
const supertest = require('supertest');

gulp.task('default', function(){
    Nodemon({
       script: 'server.js',
       ext: 'js',
       env: {
           PORT: 8000
       },
       ignore: ['./node-modules/**']
   }) 
   .on('restart', function(){
      console.log('Restarting a server');
   });
});

gulp.task('test', function () {
   gulp.src('api/controller/*.spec.js', {read : false})
       .pipe(GulpMocha({ reporter : 'nyan'}))
});

gulp.task('funcTest', function () {
      env( {
            vars : { ENV : 'test'}
         });
    gulp.src('api/integration-spec/*.funcspec.js', {read : false})
        .pipe(GulpMocha({ reporter : 'nyan'}))
});