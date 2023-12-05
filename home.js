//home page href 
const healthSection = document.getElementById('home-section-two');
const educationSection = document.getElementById('home-section-three');
const financeSection = document.getElementById('home-section-four');
//healthSection.style.opacity = '0';
//educationSection.style.opacity = '0';
//financeSection.style.opacity = '0';
let pos = 0;


function setActive() {
  
  const unorderedList = document.getElementById('top');
  const lists = unorderedList.getElementsByTagName('li');
  const links = unorderedList.getElementsByTagName('a')
  for (i=0; i < links.length; i ++) {
      if (document.location.href.indexOf(links[i].href) >= 0) {
        const actives = document.querySelectorAll('.active');
        actives.forEach((active) =>{
        active.classList.remove('active');
  });
        lists[i].className = 'active';
    } 
  }
}

window.onload = setActive()
// hide nav bar
function hideNav () {
  const nav = document.getElementById('nav');
  nav.style.display = 'none';
}

//hideNav();

//hide unneeded sections
function hideHomeSection () {
 
}

function showHealthSection () {
  healthSection.style.opacity = "1";
  healthSection.style.animationName = 'homeSectionAppear';
  healthSection.style.animationDuration = '2s';
}

//setTimeout(showHealthSection, 6000);

function scrollScreen () {
  if (pos == 1000) {
    clearInterval(scrollScreen);
  }else {
    pos++;
    window.scrollBy(0,pos/700);
  }
}

function scrollToHealth () {
  setInterval(scrollScreen,1);
}

//setTimeout(scrollToHealth, 5000);

//color animation 



"use strict";
window.onload = function() {
    setTimeout(start, 200);
};

function start() {

    //Helpers
    function lineToAngle(x1, y1, length, radians) {
        var x2 = x1 + length * Math.cos(radians),
            y2 = y1 + length * Math.sin(radians);
        return { x: x2, y: y2 };
    }

    function randomRange(min, max) {
        return min + Math.random() * (max - min);
    }

    function degreesToRads(degrees) {
        return degrees / 180 * Math.PI;
    }

    //Particle
    var particle = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        radius: 0,

        create: function(x, y, speed, direction) {
            var obj = Object.create(this);
            obj.x = x;
            obj.y = y;
            obj.vx = Math.cos(direction) * speed;
            obj.vy = Math.sin(direction) * speed;
            return obj;
        },

        getSpeed: function() {
            return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        },

        setSpeed: function(speed) {
            var heading = this.getHeading();
            this.vx = Math.cos(heading) * speed;
            this.vy = Math.sin(heading) * speed;
        },

        getHeading: function() {
            return Math.atan2(this.vy, this.vx);
        },

        setHeading: function(heading) {
            var speed = this.getSpeed();
            this.vx = Math.cos(heading) * speed;
            this.vy = Math.sin(heading) * speed;
        },

        update: function() {
            this.x += this.vx;
            this.y += this.vy;
        }
    };

    //Canvas and settings
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        stars = [],
        shootingStars = [],
        layers = [
            { speed: 0.015, scale: 0.2, count: 320 },
            { speed: 0.03, scale: 0.5, count: 50 },
            { speed: 0.05, scale: 0.75, count: 30 }
        ],
        starsAngle = 145,
        shootingStarSpeed = {
            min: 15,
            max: 20
        },
        shootingStarOpacityDelta = 0.01,
        trailLengthDelta = 0.01,
        shootingStarEmittingInterval = 2000,
        shootingStarLifeTime = 500,
        maxTrailLength = 300,
        starBaseRadius = 2,
        shootingStarRadius = 3,
        paused = false;

    //Create all stars
    for (var j = 0; j < layers.length; j += 1) {
        var layer = layers[j];
        for (var i = 0; i < layer.count; i += 1) {
            var star = particle.create(randomRange(0, width), randomRange(0, height), 0, 0);
            star.radius = starBaseRadius * layer.scale;
            star.setSpeed(layer.speed);
            star.setHeading(degreesToRads(starsAngle));
            stars.push(star);
        }
    }

    function createShootingStar() {
        var shootingStar = particle.create(randomRange(width / 2, width), randomRange(0, height / 2), 0, 0);
        shootingStar.setSpeed(randomRange(shootingStarSpeed.min, shootingStarSpeed.max));
        shootingStar.setHeading(degreesToRads(starsAngle));
        shootingStar.radius = shootingStarRadius;
        shootingStar.opacity = 0;
        shootingStar.trailLengthDelta = 0;
        shootingStar.isSpawning = true;
        shootingStar.isDying = false;
        shootingStars.push(shootingStar);
    }

    function killShootingStar(shootingStar) {
        setTimeout(function() {
            shootingStar.isDying = true;
        }, shootingStarLifeTime);
    }

    function update() {
        if (!paused) {
            context.clearRect(0, 0, width, height);
            context.fillStyle = "black";
            context.fillRect(0, 0, width, height);
            context.fill();

            for (var i = 0; i < stars.length; i += 1) {
                var star = stars[i];
                star.update();
                drawStar(star);
                if (star.x > width) {
                    star.x = 0;
                }
                if (star.x < 0) {
                    star.x = width;
                }
                if (star.y > height) {
                    star.y = 0;
                }
                if (star.y < 0) {
                    star.y = height;
                }
            }

            for (i = 0; i < shootingStars.length; i += 1) {
                var shootingStar = shootingStars[i];
                if (shootingStar.isSpawning) {
                    shootingStar.opacity += shootingStarOpacityDelta;
                    if (shootingStar.opacity >= 1.0) {
                        shootingStar.isSpawning = false;
                        killShootingStar(shootingStar);
                    }
                }
                if (shootingStar.isDying) {
                    shootingStar.opacity -= shootingStarOpacityDelta;
                    if (shootingStar.opacity <= 0.0) {
                        shootingStar.isDying = false;
                        shootingStar.isDead = true;
                    }
                }
                shootingStar.trailLengthDelta += trailLengthDelta;

                shootingStar.update();
                if (shootingStar.opacity > 0.0) {
                    drawShootingStar(shootingStar);
                }
            }

            //Delete dead shooting shootingStars
            for (i = shootingStars.length -1; i >= 0 ; i--){
                if (shootingStars[i].isDead){
                    shootingStars.splice(i, 1);
                }
            }
        }
        requestAnimationFrame(update);
    }

    function drawStar(star) {
        context.fillStyle = "rgb(255, 221, 157)";
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        context.fill();
    }

    function drawShootingStar(p) {
        var x = p.x,
            y = p.y,
            currentTrailLength = (maxTrailLength * p.trailLengthDelta),
            pos = lineToAngle(x, y, -currentTrailLength, p.getHeading());

        context.fillStyle = "rgba(255, 255, 255, " + p.opacity + ")";
        // context.beginPath();
        // context.arc(x, y, p.radius, 0, Math.PI * 2, false);
        // context.fill();
        var starLength = 5;
        context.beginPath();
        context.moveTo(x - 1, y + 1);

        context.lineTo(x, y + starLength);
        context.lineTo(x + 1, y + 1);

        context.lineTo(x + starLength, y);
        context.lineTo(x + 1, y - 1);

        context.lineTo(x, y + 1);
        context.lineTo(x, y - starLength);

        context.lineTo(x - 1, y - 1);
        context.lineTo(x - starLength, y);

        context.lineTo(x - 1, y + 1);
        context.lineTo(x - starLength, y);

        context.closePath();
        context.fill();

        //trail
        context.fillStyle = "rgba(255, 221, 157, " + p.opacity + ")";
        context.beginPath();
        context.moveTo(x - 1, y - 1);
        context.lineTo(pos.x, pos.y);
        context.lineTo(x + 1, y + 1);
        context.closePath();
        context.fill();
    }

    //Run
    update();

    //Shooting stars
    setInterval(function() {
        if (paused) return;
        createShootingStar();
    }, shootingStarEmittingInterval);

    window.onfocus = function () {
      paused = false;
    };

    window.onblur = function () {
      paused = true;
    };

}

//hide left and right

function hideContainer () {
  const ctn2  = document.getElementById('container1');
  const ctn3  = document.getElementById('container3');
  ctn2.style.opacity = '0';
  ctn3.style.opacity = '0';
}

hideContainer();