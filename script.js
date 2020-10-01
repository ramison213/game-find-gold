const random = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));
const randomX = random(0, 660);
const randomY = random(0, 400);
const $res = document.querySelector('.result');
const $treasure = document.querySelector('.treasure');

const calcResult = function (e) {
    const x = randomX - e.offsetX; // e.offsetX показывает отступ курсора мыши по оси X от края целевого DOM узла
    const y = randomY - e.offsetY;
    let distance = Math.round(Math.sqrt(x * x + y * y));

    if (distance < 50) {
        $res.className = 'result hot';
        $res.textContent = 'Вы нашли клад!!!!';
        $treasure.hidden = false;
        $treasure.style.top = e.offsetY + 'px';
        $treasure.style.left = e.offsetX + 'px';
        this.removeEventListener('click', calcResult);
    }

    if (distance >= 50 && distance < 150) {
        $res.className = 'result hot';
        $res.textContent = 'Горячо';
    }

    if (distance >= 150 && distance < 300) {
        $res.className = 'result warm';
        $res.textContent = 'Тепло';
    }

    if (distance >= 300) {
        $res.className = 'result cold';
        $res.textContent = 'Холодно';
    }
}

document.querySelector('.map').addEventListener('click', calcResult);
