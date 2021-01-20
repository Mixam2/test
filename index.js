let atSroll = false
let parallaxTitle = document.querySelectorAll(".parallax");

const scrollProgress = () => {
    atSroll = true;
};

const raf = () => {
    if (atSroll) {
        parallaxTitle.forEach((element, index) => {
            element.style.transform = "translateY(-" + window.scrollY + "%)";
        });
        atSroll = false;

    }
    requestAnimationFrame(raf);

};
requestAnimationFrame(raf);
window.addEventListener("scroll", scrollProgress);

window.onmessage = function(event) {
    if (event.data.includes("[") == "") {
        lien = "PageEchange1/PageEchange1.php?paire=" + event.data
        window.location.href = lien;
    }
};