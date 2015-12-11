/**
 * Created by aronthomas on 12/10/15.
 */
module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            client: {
                src: 'client/scripts/*.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            jQuery: {
                expand: true,
                cwd: 'node_modules/jquery/dist/',
                src: [
                    "jquery.min.js",
                    "jquery.min.map"
                ],
                "dest": "server/public/vendors/"
            },
            fontAwesome: {
                expand: true,
                cwd: 'node_modules/font-awesome/',
                src: [
                    "css/font-awesome.min.css",
                    "css/font-awesome.css.map",
                    "fonts/*"
                ],
                "dest": "server/public/vendors/font-awesome/"
            },
            normalize: {
                expand: true,
                cwd: 'node_modules/normalize.css/',
                src: [
                    "normalize.css"
                ],
                "dest": "server/public/vendors/"
            },
            html: {
                expand: true,
                cwd: "client/views",
                src: [
                    "*.html"
                ],
                dest: "server/public/assets/views/"
            },
            style: {
                expand: true,
                cwd: "client/styles",
                src: '*.css',
                dest: 'server/public/assets/styles'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};