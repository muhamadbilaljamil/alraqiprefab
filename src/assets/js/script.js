window.addEventListener('scroll', reveal)

function reveal() {
    // console.log("Position of Scroll : ", window.pageYOffset);
    var reveals = document.querySelectorAll(".reveal");
    // console.log("Animation Class :", reveals)

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        // console.log(`This is your window height : `, windowHeight);
        var elementTop = reveals[i].getBoundingClientRect().top;
        // console.log("Element top Position: ", elementTop);
        var elementVisible = 200;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

