const img_src =["./img/img1.jpg", "./img/img2.webp", "./img/img3.webp"];
let num = -1;

const slider = () => {
    if (num === 2) {
        num = 0;
    } else {
        num ++;
    }
    document.querySelector("#pic").src = img_src[num];
}

setInterval(slider, 1000);
