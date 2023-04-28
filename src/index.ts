const form = document.getElementById('form') as HTMLFormElement;
const btnGuardar = document.getElementById('btn-guardar') as HTMLButtonElement;

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhY2lvbiI6MTAzMzc0MjUyNywiY29ycmVvIjoiY3JlYWNpb24yMzE5QGdtYWlsLmNvbSIsImlhdCI6MTY4MTc4MDM4NCwiZXhwIjoxNjgyMzg1MTg0fQ.nORCgCiWAxHz1pBJAqv-T5oUEpjiB3Vfj9cEded8qQE");

let requestOptionsGet = {
    method: 'GET',
    headers: myHeaders,
}

fetch("https://apiestudiantes.maosystems.dev/estudiantes", requestOptionsGet)
    .then(response => response.json())
    .then(result => {
        const studentsDataDiv = document.getElementById("students-data") as HTMLDivElement;
        const estudiantes: any[] = result.data;

        const table = document.createElement("table");
        table.classList.add("table", "table-striped", "table-bordered");

        const header = document.createElement("tr");
        header.classList.add("thead-dark");

        header.innerHTML = `
            <th scope="col">Id</th>
            <th scope="col">Tipo de identificación</th>
            <th scope="col">Número de Documento</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Celular</th>
            <th scope="col">Email</th>
            <th scope="col">LinkedIn</th>
            <th scope="col">GitHub</th>
            <th scope="col">Opciones</th>`;

        table.appendChild(header);
        estudiantes.forEach(estudiante => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <tbody >
          <tr>
            <td scope="row">${estudiante.estudiante_id}</td>
            <td>${estudiante.estudiante_tipoIdentificacion}<td/>
            <td>${estudiante.estudiante_numeroIdentificacion}</td>
            <td>${estudiante.estudiante_nombres}</td>
            <td>${estudiante.estudiante_apellidos}</td>
            <td>${estudiante.estudiante_celular}</td>
            <td>${estudiante.estudiante_correo}</td>
            <td><a href="https://www.linkedin.com/">${estudiante.estudiante_linkedin}</a></td>
            <td><a href="https://github.com/">${estudiante.estudiante_github}</a></td>
            <td>
              <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
                <button type="button" class="btn btn-outline-primary">Actualizar</button>
                <button type="button" class="btn btn-outline-primary">Estado</button>
              </div>
            </td>
          </tr>
        </tbody>`;
            table.appendChild(row);
        });
        studentsDataDiv.appendChild(table);
    })
    .catch(error => console.log('error', error));



btnGuardar.addEventListener('click', (e) => {

    e.preventDefault();
    console.log('Ingreso a la validación del formulario');

    //Obtener los valores de los inputs
    const tipoIdentificacion = document.getElementById('tipoIdentificacion') as HTMLInputElement;
    const numeroIdentificacion = document.getElementById('numeroIdentificacion') as HTMLInputElement;
    const nombres = document.getElementById('nombres') as HTMLInputElement;
    const apellidos = document.getElementById('apellidos') as HTMLInputElement;
    const celular = document.getElementById('celular') as HTMLInputElement;
    const correo = document.getElementById('correo') as HTMLInputElement;
    const linkedin = document.getElementById('linkedin') as HTMLInputElement;
    const github = document.getElementById('github') as HTMLInputElement;

    const tipoIdentificacionNumber: number = Number(tipoIdentificacion.value);
    const numeroIdentificacionNumber: number = Number(numeroIdentificacion.value);
    const celularNumber: number = Number(celular.value);


    let raw = JSON.stringify({
        'tipoIdentificacion': tipoIdentificacionNumber,
        'numeroIdentificacion': numeroIdentificacionNumber,
        'nombres': nombres.value,
        'apellidos': apellidos.value,
        'celular': celularNumber,
        'correo': correo.value,
        'linkedin': linkedin.value,
        'github': github.value,
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    }

    fetch("https://apiestudiantes.maosystems.dev/estudiantes", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

});
