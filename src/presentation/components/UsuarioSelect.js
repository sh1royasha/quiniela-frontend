export function renderUsuarios(usuarios) {
  const select = document.getElementById("usuarioSelect");

  select.innerHTML = `
        <option value="">
            Seleccione...
        </option>
    `;

  usuarios.forEach((usuario) => {
    const option = document.createElement("option");

    option.value = usuario.ID_USUARIO;

    option.textContent = usuario.NOMBRE;

    select.appendChild(option);
  });
}
