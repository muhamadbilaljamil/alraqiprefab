window.addEventListener("load", function () {
    const canvas = document.getElementById("canvas1");
    const main_banner = document.querySelector(".main-banner");
    console.log(main_banner.clientWidth, main_banner.clientHeight);
    const ctx = canvas.getContext("2d");

    canvas.width = main_banner.clientWidth;
    canvas.height = main_banner.clientHeight;

    let particlesArray;
        //Get mouse position
    let mouse = {
        x: null,
        y: null,
        radius: (canvas.width / 100) * (canvas.height / 100)
    }

    window.addEventListener("mousemove",
        function (event) {
            mouse.x = event.x;
            mouse.y = event.y;
            console.log("mouse position: ", mouse);
        }
    );

    // Create particle
    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            ;
            this.size = size;
            this.color = color;
        }

        //Method to draw individual particle
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            // ctx.fillStyle = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + ", 1)";
            ctx.fillStyle = "rgba( 170, 127, 44, 0.2)";
            ctx.fill();
        }

        //Check particle position, check mouse position, move the particle, draw the particle
        update() {
            //Check if particle is still within canvas
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }

            //Check collision detection - mouse position / particle position
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius + this.size) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                    this.x += 10;
                }
                if (mouse.x > this.x && this.x > this.size * 10) {
                    this.x -= 10;
                }
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                    this.y += 10;
                }
                if (mouse.y > this.y && this.y > this.size * 10) {
                    this.y -= 10;
                }
            }

            //Move particle
            this.x += this.directionX;
            this.y += this.directionY;

            //Draw particle
            this.draw();
        }
    }

    //Create particle array
    function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.width * canvas.height) / 10000;
        for (let i = 0; i < numberOfParticles * 1.7 ; i++) {
            let size = (Math.random() * 2) + 1;
            let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * 5) - 2.5;
            let directionY = (Math.random() * 5) - 2.5;
            let color = {
                r: Math.floor((Math.random() * 255) + 1),
                g: Math.floor((Math.random() * 255) + 1),
                b: Math.floor((Math.random() * 255) + 1),
            };
            // console.log("Color of the particle  : ", color);
            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    //Check if particle are close enough to draw line between them
    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                    + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = "rgba( 170, 127, 44,"+ 0.2+")";
                    // ctx.strokeStyle = "rgba(" + particlesArray[a].color.r + "," + particlesArray[a].color.g + "," + particlesArray[a].color.b + ", " + opacityValue + ")";
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connect();
    }

    //Resize event
    window.addEventListener('resize', function () {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        mouse.radius = ((canvas.height / 80) * (canvas.height / 80));
        init();
    });

    //Mouse out event
    window.addEventListener('mouseout', function () {
        mouse.x = undefined;
        mouse.y = undefined;

    })
    init();
    animate();
})