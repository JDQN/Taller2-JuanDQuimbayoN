const form = document.getElementById('form') as HTMLFormElement;
const btnGuardar = document.getElementById('btn-guardar') as HTMLButtonElement;

btnGuardar.addEventListener('click', (e) => {
    //e.preventDefault();
    console.log("Ingreso a la validación del formulario");   

    //Obtener los valores de los inputs
    const tipoDocumento = document.getElementById('tipoDocumento') as HTMLInputElement;
    const numeroDocumento = document.getElementById('numeroDocumento') as HTMLInputElement;
    const nombre = document.getElementById('nombre') as HTMLInputElement;
    const apellido = document.getElementById('apellido') as HTMLInputElement;
    const celular = document.getElementById('celular') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const linkedin = document.getElementById('linkedin') as HTMLInputElement;
    const github = document.getElementById('github') as HTMLInputElement;


    //La validación del formulario
    console.log(tipoDocumento.value);

});
