$(document).ready(function(){
    var step = 0;
    var countX = 100;
    var countY = 50;
    var riser = 0;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 2500 );
    var renderer = new THREE.WebGLRenderer({alpha: true});
    var sphereArray = [];
    var light = new THREE.HemisphereLight( 0xffffff, 0xaaaaaa, 1 );

    var transition = function(){
        var clickX =  (event.pageX) + 1750;
        console.log(clickX);
        render = function() {
            requestAnimationFrame( render );
            step += 0.05;
            riser += 20;
            for (var i = 0; i<countX; i++){
                for(var m=0; m<countY; m++){
                    var index = i*countY + m;
                    var sphere = sphereArray[index];
                    sphere.position.y = ( Math.sin( ( i + step ) * 0.4 ) * 10 ) +
                        ( Math.sin( ( m + step ) * 0.5 ) * 10 );
                    sphere.scale.x = sphere.scale.y = sphere.scale.z /= 1.02;
                    sphere.position.y += riser * riser/5 * (1/Math.abs(clickX-sphere.position.x+1));

                }
            }

            renderer.render( scene, camera );
        };

        $('.name').fadeOut(1000);

        setTimeout(function(){

            window.location = '/main';
        },2500);
    };

    var createArray = function(){
        var geometry = new THREE.SphereGeometry( 15, 8, 8 );
        var material = new THREE.MeshLambertMaterial({color: 0x111111});
        for (var i = 0; i<countX; i++){
            for(var m=0; m<countY; m++){
                var sphere = new THREE.Mesh( geometry, material );
                sphere.position.x = i*50;
                sphere.position.y = 100;
                sphere.position.z = m*50;
                scene.add(sphere);
                sphereArray.push(sphere);
            }
        }
    };

    var render = function() {
        requestAnimationFrame( render );
        step += 0.05;
        for (var i = 0; i<countX; i++){
            for(var m=0; m<countY; m++){
                var index = i*countY + m;
                sphereArray[index].position.y = ( Math.sin( ( i + step ) * 0.4 ) * 10 ) +
                    ( Math.sin( ( m + step ) * 0.5 ) * 10 );
                sphereArray[index].scale.x = sphereArray[index].scale.y = sphereArray[index].scale.z =
                    sphereArray[index].position.y/100+.15;
                sphereArray[index].position.y += riser;
            }
        }
        renderer.render( scene, camera );
    };

    var init = function(){
        //create objects
        createArray();

        //create renderer
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setClearColor( 0xaaaaaa, 0);
        document.body.appendChild( renderer.domElement );

        //set camera
        camera.position.x = 2500;
        camera.position.y = 100;
        camera.position.z = 2500;

        //add light
        scene.add(light);
    };

    init();
    render();

    $(document).on('click', transition);
    $(document).swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            transition();
        }
    });
});
