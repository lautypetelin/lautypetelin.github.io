function validarFormulario() {
    // Limpiamos mensajes de error
    document.getElementById('error-messages').innerHTML = '';

    // Obtenenemos los valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    let valid = true;
    let messages = [];

    // Validamos que los campos no estén vacíos
    if (name === '') {
        valid = false;
        messages.push('El campo nombre no puede estar vacío.');
    }

    if (email === '') {
        valid = false;
        messages.push('El campo correo electrónico no puede estar vacío.');
    } else if (!email.includes('@') || !email.includes('.')) {
        valid = false;
        messages.push('El correo electrónico debe contener un arroba (@) y un punto (.).');
    }

    if (phone === '') {
        valid = false;
        messages.push('El campo teléfono no puede estar vacío.');
    } else if (!/^\d+$/.test(phone)) {
        valid = false;
        messages.push('El número de teléfono solo debe contener números.');
    }

    if (message === '') {
        valid = false;
        messages.push('El campo mensaje no puede estar vacío.');
    }

    // Mostramos mensajes de error si los hay
    if (!valid) {
        document.getElementById('error-messages').innerHTML = messages.join('<br>');
        return false;
    }

    // Si los datos son válidos, ocultamos el formulario y mostramos los datos ingresados
    document.getElementById('form').style.display = 'none';
    mostrarDatosIngresados(name, email, phone, message);
    
    return false; // Evitamos que el formulario se envíe de forma predeterminada
}

function mostrarDatosIngresados(name, email, phone, message) {
    const listaSaludos = document.getElementById('listaSaludos');
    listaSaludos.innerHTML = `
        <h2>Datos Ingresados:</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
    `;
}