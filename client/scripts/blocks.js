

    var cubes;
    var staticCubes;
    var step = 0;
    var startingHeight;
    var canvas;
    var bgColor;
    var modifiedHeight;

    function setup(){
        modifiedHeight = displayHeight-110;
        canvas = createCanvas(displayWidth, displayHeight-110);

        //canvas = createCanvas(window.innerWidth, window.innerHeight);
        canvas.position(0,0);
        canvas.class('blocks');
        canvas.parent('animation-container');



        colorMode(HSB, 100);
        bgColor = color(192,2,95, 30);
        initialize(Math.round(windowWidth *.8),100,25);
    }


    function draw(){
        background(bgColor);


        cubes.drawBottom();
        staticCubes.drawStatic();
        cubes.drawTop();
    }


    function windowResized() {
        resizeCanvas(displayWidth, displayHeight-110);
        initialize(Math.round(windowWidth *.8),100,25);

    }



    function mouseWheel(event) {
        console.log('scrollin');
        var scrollDist = event.deltaY;
        for(var i = 0; i<cubes.cubes.length; i++){
            cubes.cubes[i].position.y += scrollDist/20;
        }
        //cubes.draw();

    }

    function touchMoved() {
        console.log('scrollin');
        var scrollDist = touchY - ptouchY;
        for(var i = 0; i<cubes.cubes.length; i++){
            cubes.cubes[i].position.y += scrollDist;
        }
        //cubes.draw();

    }

    function initialize(x2, cubeWidth, depth){

        cubes = new Cubes(x2, cubeWidth, depth);
        var y = windowHeight;
        while((y+depth)>0){
            cubes.addCube(x2,y,cubeWidth,depth);
            y -= 4*depth;
        }

        staticCubes = new Cubes(x2, cubeWidth, depth);
        staticCubes.static = true;
        startingHeight = Math.round(windowHeight/2)+(3*depth);
        for(var i = 0; i<6; i++){
            staticCubes.addCube(x2,startingHeight,cubeWidth,depth);
            startingHeight -= depth;
        }

    }





    var Cube = function(startingX,y1,cubeWidth, depth){
        this.cubeWidth = cubeWidth;
        this.depth = depth;
        this.position = {};
        this.position.x = startingX;
        this.position.y = y1;
        this.fill = fill;
        // this.display();
        return this;
    };

    Cube.prototype.display = function(){
        // c = color(150, 100, 100);
        var cMin = 143;
        var cMax = 190;
        var cRange = cMax-cMin;

        // if(this.position.y>(windowHeight/2)){
        //   // console.log('true');
        var distanceRatio = this.position.y/(windowHeight);
        var distanceToEnd = ((windowHeight+110)-this.position.y)/(windowHeight+110);
        var c = cMin + Math.round(cRange*distanceRatio);
        var saturation = Math.round(53*distanceRatio*1.5);
        var opacity =  Math.min(distanceRatio*distanceRatio, distanceToEnd*distanceToEnd) * 100;
        //console.log(opacity);
        stroke(c, saturation, 24,opacity);
        fill(c, saturation, 74,opacity);
        quad(this.position.x,this.position.y,this.position.x+this.cubeWidth,this.position.y+this.depth,this.position.x+(this.cubeWidth*2),this.position.y,this.position.x+(this.cubeWidth),this.position.y-this.depth);
        fill(c,saturation,54,opacity);
        quad(this.position.x,this.position.y,this.position.x+this.cubeWidth,this.position.y+this.depth,this.position.x+this.cubeWidth,this.position.y+(this.depth*2),this.position.x,this.position.y+this.depth);
        fill(c, saturation, 44,opacity);
        quad(this.position.x+this.cubeWidth,this.position.y+(this.depth*2),this.position.x+this.cubeWidth,this.position.y+this.depth,this.position.x+(this.cubeWidth*2),this.position.y,this.position.x+(this.cubeWidth*2),this.position.y+this.depth);
        //tint(255, 255*distanceRatio);
    };


    var Cubes = function(startingX, width, depth){
        this.cubes = [];
        this.startingX = startingX;
        this.width = width;
        this.depth = depth;
    };

    Cubes.prototype.addCube = function(x,y,cubeWidth,depth){
        this.cubes.push(new Cube(x,y,cubeWidth,depth));
    };


    Cubes.prototype.getPerimiter = function(){
        this.topCube = this.cubes[this.cubes.length-1];
        this.bottomCube = this.cubes[0];
        // console.log(this.bottomCube.position.y-this.bottomCube.depth, windowHeight);
        if(this.bottomCube.position.y-this.depth > windowHeight){
            //console.log('its gone');
            this.cubes.shift();
            this.cubes.push(new Cube(this.startingX, 0-(this.depth*2), this.width, this.depth));
        }

        if(this.topCube.position.y+(this.depth*2) < 0){
            //console.log('its gone');
            this.cubes.pop();
            this.cubes.unshift(new Cube(this.startingX, windowHeight+this.depth, this.width, this.depth));
        }


    };

    Cubes.prototype.drawTop = function(){
        // step++;
        this.getPerimiter();

        for(var i = 0; i < this.cubes.length; i++){
            var cube = this.cubes[i];
            if(cube.position.y < startingHeight+this.depth){
                cube.display();
            }

        }

    };

    Cubes.prototype.drawStatic = function(){

        for(var i = 0; i < this.cubes.length; i++){
            var cube = this.cubes[i];

            cube.display();
        }
    };

    Cubes.prototype.drawBottom = function(){
        // step++;
        this.getPerimiter();

        for(var i = 0; i < this.cubes.length; i++){
            var cube = this.cubes[i];
            if(cube.position.y > (startingHeight + 6*this.depth)){
                cube.display();
            }
        }

    };

//});

