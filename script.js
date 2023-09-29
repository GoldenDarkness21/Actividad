const render =() => {
    const formulario = document.querySelector("#formulario");
    const resultado = document.querySelector("#resultado");

    formulario.addEventListener("submit", (event) => {
        alert ("Formulario Enviado");
        event.preventDefault();

        const name = event.target.name.value;
        const surname = event.target.surname.value;
        const age = event.target.age.value;

        const mensaje = `El nombre de la persona es "${name}", su apellido es "${surname}" y su edad es "${age}" años.`;
        resultado.textContent = mensaje;

        event.target.name.value = "";
        event.target.surname.value = "";
        event.target.age.value = "";

        resultado.style.display = "block";
    });
    const inputName = document.querySelector("#name");
    inputName.addEventListener("input",(event) => {
        console.log(event.target.value);
    });
    
    const inputSurname = document.querySelector("#surname");
    inputSurname.addEventListener("input",(event) => {
        console.log(event.target.value);
    });
    
    const inputAge = document.querySelector("#age");
    inputAge.addEventListener("input",(event) => {
        console.log(event.target.value);
    });
    }

window.onload = render;
