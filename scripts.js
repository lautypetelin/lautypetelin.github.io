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

/*Validar datos */
function validarFormulario() {
    // Limpiar mensajes de error
    document.getElementById('error-messages').innerHTML = '';

    // Obtener los valores de los campos
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    let valid = true;
    let messages = [];

    // email con @
    if (!email.includes('@')) {
        valid = false;
        messages.push('El correo electrónico debe contener un arroba (@).');
    }

    // num de tel (solo num)
    if (!/^\d+$/.test(phone)) {
        valid = false;
        messages.push('El número de teléfono solo debe contener números.');
    }

    // mensajes de error si los hay
    if (!valid) {
        document.getElementById('error-messages').innerHTML = messages.join('<br>');
    }

    return valid;
}