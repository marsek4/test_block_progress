// Функция для установки прогресса
function setProgress(value) {
    const circle = document.querySelector('.progress_ring_circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    const offset = circumference - (value / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}

document.querySelector('.value_input').addEventListener('input', function (e) {
    const value = +e.target.value;
    if (value >= 0 && value <= 100) {
        setProgress(value); 
    }
    if (value > 100) {
        setProgress(100);
    }
    if (value < 0) {
        setProgress(0);
    }
});

setProgress(50);


// Функция для управления видимостью файла
const checkbox = document.getElementById('switch_hide');
const circle_1 = document.getElementById('circle_1');
const circle_2 = document.getElementById('circle_2');
checkbox.addEventListener('change', function() {

    if (circle_1.classList.contains('hidden')) {
        circle_1.classList.remove('hidden');
        circle_2.classList.remove('hidden');
    } else {
        circle_1.classList.add('hidden');
        circle_2.classList.add('hidden');
    }

});

// Отслеживание ориентации экрана
window.matchMedia("(orientation: portrait)").addEventListener("change", e => {
    const portrait = e.matches;

    const html = document.getElementById("html");
    const body = document.getElementById("body");
    const first_half = document.querySelector(".first_half");
    const second_half = document.querySelector(".second_half");
    const panel = document.querySelector(".panel");
    const progress_ring = document.querySelector(".progress_ring");
    const phrases_animate = document.querySelector(".phrases_animate");
    const phrases_hide = document.querySelector(".phrases_hide");

    if (portrait) {
        // alert("portrait");
        html.style.flexDirection = "column";
        body.style.flexDirection = "column";
        panel.style.marginTop = "15%";
        second_half.style.alignItems = "";
        second_half.style.justifyContent = "center";
        second_half.style.paddingLeft = "0";
        progress_ring.style.paddingTop = "20%";
        phrases_animate.style.marginTop = "10px";
        phrases_hide.style.marginTop = "10px";

    } else {
        // alert("landscape");
        first_half.style.width = "100%";
        html.style.flexDirection = "row";
        body.style.flexDirection = "row";
        body.style.width = "-webkit-fill-available";
        second_half.style.alignItems = "center";
        panel.style.marginTop = "0";
        second_half.style.justifyContent = "start";
        second_half.style.paddingLeft = "3%";
        progress_ring.style.paddingTop = "0";
        phrases_animate.style.marginTop = "26px";
        phrases_hide.style.marginTop = "26px";
    }
});

// Анимция загрузки
document.getElementById('switch_animate').addEventListener('change', function() {
    const progress_circle = document.querySelector('.progress_ring_circle');
    
    if (this.checked) {
        progress_circle.classList.add('animated');
    } else {
        progress_circle.classList.remove('animated');
    }
});