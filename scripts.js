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

/*Validar datos | Captura de dato del formulario */
function mostrarDatos() {
    let elementName = document.getElementById("name");
    let elementEmail = document.getElementById("email");
    let elementPhone = document.getElementById("phone");
    let elementMessage = document.getElementById("message");

    document.getElementById("form").style.display="none";

    let namePerson = elementName.value.trim();
    let emailPerson = elementEmail.value.trim();
    let phonePerson = elementPhone.value.trim();
    let messagePerson = elementMessage.value.trim();

    let item = document.createElement("p");

    item.innerHTML = `Nombre completo: ${namePerson}`;
    item.innerHTML = `Email: ${emailPerson}`;
    item.innerHTML = `Teléfono: ${phonePerson}`;
    item.innerHTML = `Message: ${messagePerson}`;

    let elementList = document.getElementById("listaSaludos");
    elementList.appendChild(item);
}