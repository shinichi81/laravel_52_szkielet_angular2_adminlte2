var elixir = require('laravel-elixir');
var elixirTypscript = require('elixir-typescript');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
$paths = {
    'adminLte': {
        'files': 'bower_components/AdminLTE/dist',
        'filesTo': 'public/assets/vendor/adminlte',
        'bootstrap': 'bower_components/AdminLTE/bootstrap',
        'bootstrapTo': 'public/assets/vendor/adminlte/bootstrap',
        'plugins': 'bower_components/AdminLTE/plugins',
        'pluginsTo': 'public/assets/vendor/adminlte/plugins'
    },
    'font_awesome': {
        'css': 'bower_components/components-font-awesome/css',
        'cssTo': 'public/assets/vendor/font-awesome/css',
        'fonts': 'bower_components/components-font-awesome/fonts',
        'fontsTo': 'public/assets/vendor/font-awesome/fonts'
    },
    'ionicons': {
        'css': 'bower_components/Ionicons/css',
        'cssTo': 'public/assets/vendor/ionicons/css',
        'fonts': 'bower_components/Ionicons/fonts',
        'fontsTo': 'public/assets/vendor/ionicons/fonts',
        'png': 'bower_components/Ionicons/png',
        'pngTo': 'public/assets/vendor/ionicons/png',
        'svg': 'bower_components/Ionicons/src',
        'svgTo': 'public/assets/vendor/ionicons/svg'
    },
    'html5shiv': {
        'files': 'bower_components/html5shiv/dist',
        'filesTo': 'public/assets/vendor/html5shiv'
    },
    'respond': {
        'files': 'bower_components/Respond/dest',
        'filesTo': 'public/assets/vendor/respond'
    },
    'custom_css': {
        'files': 'app.scss',
        'filesTo': 'public/assets/css'
    },
    'angular': {
        'angular2': 'node_modules/angular2',
        'angular2To': 'public/assets/vendor/angular/angular2',
        'rxjs': 'node_modules/rxjs',
        'rxjsTo': 'public/assets/vendor/angular/rxjs',
        'systemjs': 'node_modules/systemjs',
        'systemjsTo': 'public/assets/vendor/angular/systemjs',
        'es6_promise': 'node_modules/es6-promise',
        'es6_promiseTo': 'public/assets/vendor/angular/es6-promise',
        'es6_shim': 'node_modules/es6-shim',
        'es6_shimTo': 'public/assets/vendor/angular/es6-shim',
        'zone': 'node_modules/zone',
        'zoneTo': 'public/assets/vendor/angular/zone'
    }
};

elixir(function(mix) {
    //custom styles
    mix.sass($paths.custom_css.files, $paths.custom_css.filesTo);
    //copy files vendor to public folder
    copyFiles(mix);
    //typescript for angular 2
    typeScript(mix);
    //run preview in browser
    mix.browserSync({ proxy: 'agrosza.dev' });
});

/**
 * 
 * Copy files vendor to public folder
 * @param {object} mix
 * @returns {undefined}
 */
function copyFiles(mix){
    //load adminLte
    mix.copy($paths.adminLte.files, $paths.adminLte.filesTo);
    mix.copy($paths.adminLte.bootstrap, $paths.adminLte.bootstrapTo);
    mix.copy($paths.adminLte.plugins, $paths.adminLte.pluginsTo);
    mix.copy($paths.font_awesome.css, $paths.font_awesome.cssTo);
    mix.copy($paths.font_awesome.fonts, $paths.font_awesome.fontsTo);
    mix.copy($paths.ionicons.css, $paths.ionicons.cssTo);
    mix.copy($paths.ionicons.fonts, $paths.ionicons.fontsTo);
    mix.copy($paths.ionicons.png, $paths.ionicons.pngTo);
    mix.copy($paths.ionicons.svg, $paths.ionicons.svgTo);
    mix.copy($paths.html5shiv.files, $paths.html5shiv.filesTo);
    mix.copy($paths.respond.files, $paths.respond.filesTo);
    //copy files angular 2
    mix.copy($paths.angular.angular2, $paths.angular.angular2To);
    mix.copy($paths.angular.rxjs, $paths.angular.rxjsTo);
    mix.copy($paths.angular.systemjs, $paths.angular.systemjsTo);
    mix.copy($paths.angular.es6_promise, $paths.angular.es6_promiseTo);
    mix.copy($paths.angular.es6_shim, $paths.angular.es6_shimTo);
    mix.copy($paths.angular.zone, $paths.angular.zoneTo);
}

/**
 * 
 * Run compilator TypeScript
 * @param {object} mix
 * @returns {undefined}
 */
function typeScript(mix) {
    mix.typescript(null ,'public/assets/js','/**/*.ts',{
                  "target": "ES5",
                  "module": "system",
                  "moduleResolution": "node",
                  "sourceMap": true,
                  "emitDecoratorMetadata": true,
                  "experimentalDecorators": true,
                  "removeComments": false,
                  "noImplicitAny": false
    });
}
