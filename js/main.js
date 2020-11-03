const img_src =["./img/img1.jpg", "./img/img2.webp", "./img/img3.webp"];
let num = -1;

const slider_time = () => {
    
    num = Math.floor(Math.random()*img_src.length);

    document.querySelector("#pic").src = img_src[num];
};

setInterval(slider_time,1000);

//Math.random関数　→　ランダムな値を得たい場合。0以上1未満の浮動小数点の値を返す。
//Math.floor関数　→　小数点以下の値を切り捨てた物を返す。

//例えば、Math.floorが小数点を切り捨てMath.randomが今回は0.5を返した場合0.5*3(配列の要素数)=1.5 →　1.5より小さい最大の整数は2番目の画像が選択される。