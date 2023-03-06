"use strict";

const { src, dest, watch, series, } = require( "gulp" );
const sass = require( "gulp-sass" )( require( "sass" ) );
const cssmin = require( "gulp-cssmin" );
const rename = require( "gulp-rename" );
const concatCss = require( "gulp-concat-css" );
const less = require( "gulp-less" );


function defaultTask() {
    return src( "./src/styles/*.less" )
        .pipe( less() )
        .pipe( concatCss( "style.css" ) )
        .pipe( cssmin() )
        .pipe( rename( { suffix: ".min" } ) )
        .pipe( dest( "./dist" ) );
}

exports.less = defaultTask;

exports.watch = function () {
    watch( "./src/styles/*.less", series( "less" ) );
};