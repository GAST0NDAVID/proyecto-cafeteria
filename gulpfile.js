//crear una primera tarea con gulp. las tareas son funciones

//function tarea(done){
//    console.log("mi primer tarea");
//    done();  //finaliza la tarea
//}
//llamar a la tarea exports.tarea = tarea;


//importar los modulos
const { src, dest, watch, series, parallel}= require('gulp');

const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

//compilar SASS con gulp
function css(done) {

    //identificar el archivo
    src('src/scss/app.scss')

    //compilar el archivo
    .pipe(sass({outputStyle: 'compressed'})) //outputstyle: 'compressed'

    .pipe(postcss([autoprefixer() ])) //crear versiones compatibles con navegadores que no soportan la nueva sistaxis

    //guardar el archivo
    .pipe(dest('build/css'))

    done();

}

//esuchar por los cambios
function dev () {
    watch('src/scss/**/*.scss', css); //**selec todas las carpetas 
    //*selec todas las ext .scss
}

exports.css = css;
exports.dev = dev;