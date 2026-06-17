export function renderUsuarios(usuarios, onSelect) {
  const container = document.getElementById("usuarios");

  container.innerHTML = "";

  usuarios.forEach((usuario) => {
    const card = document.createElement("div");

    card.className = "usuario-card";

    card.textContent = `👤 ${usuario.NOMBRE}`;

    card.addEventListener("click", () =>
      onSelect(usuario.ID_USUARIO, usuario.NOMBRE),
    );

    container.appendChild(card);
  });
}
