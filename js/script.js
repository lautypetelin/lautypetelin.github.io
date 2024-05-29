const btnLeft=document.querySelector(".btn-left"),
    btnRight=document.querySelector(".btn-right"),
    slider=document.querySelector("#slider"),
    sliderSection=document.querySelector(".slider-section");
btnLeft.addEventListener("click", e=>moveToLeft() )
btnRight.addEventListener("click", e=>moveToRight() )
function moveToRight() {
    slider.style.transform="translate(-50%)"
}
function moveToLeft() {
    
}