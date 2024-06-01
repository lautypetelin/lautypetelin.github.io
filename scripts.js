/*Carousel*/
const btnLeft=document.querySelector(".btn-left"),
    btnRight=document.querySelector(".btn-right"),
    slider=document.querySelector("#slider"),
    sliderSection=document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", moveToLeft )
btnRight.addEventListener("click", moveToRight );

let operacion=0,
    contador=0,
    widthImg=100/sliderSection.length;

function moveToRight() {
    if (contador>=sliderSection.length-1){
        operacion=0;
        contador=0;
        slider.style.transform=`translate(-${operacion}%)`;
    }else{
        contador++;
        operacion=operacion+ widthImg
        slider.style.transform=`translate(-${operacion}%)`;
        slider.style.transition="all ease .6s";
    }
}

function moveToLeft() {
    contador--;
    if (contador<0){
        contador=sliderSection.length-1;
        operacion=widthImg*(sliderSection.length-1);
        slider.style.transform=`translate(-${operacion}%)`;
    }else{
        operacion=operacion- widthImg;
        slider.style.transform=`translate(-${operacion}%)`;
        slider.style.transition="all ease .6s";
    }
}

//-----------------------------------------------------------------------------------------------------------