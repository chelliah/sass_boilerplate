$(document).ready(function(){
    $()

    var step = 0;
    var countX = 200;
    var countY = 200;
    var riser = 0;

    var createArray = function(){
        var geometry = new THREE.SphereGeometry( 15, 32, 32 );
        var material = new THREE.MeshLambertMaterial({color: 0x111111});
        for (var i = 0; i<countX; i++){
            for(var m=0; m<countY; m++){
                var cube = new THREE.Mesh( geometry, material );
                cube.position.x = i*50;
                cube.position.y = 100;
                cube.position.z = m*50;
                scene.add(cube);
                cubeArray.push(cube);
            }
        }
    };
//A SPINNING CUBE
//sets a scence
    var scene = new THREE.Scene();
//sets a camera
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


// sets a renderer
    var renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0xaaaaaa, 0);
    document.body.appendChild( renderer.domElement );

    var cubeArray = [];
    createArray();

// scene.add( cube );

    camera.position.x = 1500;
    camera.position.y = 100;
    camera.position.z = 2000;


    var light = new THREE.HemisphereLight( 0xffffff, 0xaaaaaa, 1 );
    scene.add(light);


    var render = function() {
        requestAnimationFrame( render );
        step += 0.05;
        for (var i = 0; i<countX; i++){
            for(var m=0; m<countY; m++){
                var index = i*countX + m;
                cubeArray[index].position.y = ( Math.sin( ( i + step ) * 0.4 ) * 10 ) +
                    ( Math.sin( ( m + step ) * 0.5 ) * 10 );
                // var brightness = Math.sin(i * step) * 255;
                cubeArray[index].scale.x = cubeArray[index].scale.y = cubeArray[index].scale.z =
                    cubeArray[index].position.y/100+0.1;
                cubeArray[index].position.y += riser;
                // console.log(cubeArray[index].position.y/100);
                // cubeArray[index].material.color.setRGB(brightness,brightness,brightness);
            }
        }
        renderer.render( scene, camera );
    };



    $(document).on('click', function(event){
        var clickX = event.pageX + 750;

        render = function() {
            requestAnimationFrame( render );
            step += 0.05;
            riser += 20;
            for (var i = 0; i<countX; i++){
                for(var m=0; m<countY; m++){
                    var index = i*countX + m;
                    var sphere = cubeArray[index];
                    sphere.position.y = ( Math.sin( ( i + step ) * 0.4 ) * 10 ) +
                        ( Math.sin( ( m + step ) * 0.5 ) * 10 );
                    sphere.scale.x = sphere.scale.y = sphere.scale.z =
                        (sphere.position.y/(100)+0.1);

                    sphere.position.y += riser * riser/5 * (1/Math.abs(clickX-sphere.position.x+1));

                }
            }

            renderer.render( scene, camera );
        };

        $('.name').fadeOut(2000);

        setTimeout(function(){

            window.location = '/assets/views/index.html';
        },3000);
    });

    init();
    render();
});
