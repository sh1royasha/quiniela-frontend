export function renderTabla(pronosticos) {
  console.log(pronosticos);

  const tbody = document.querySelector("#tbodyPronosticos");

  tbody.innerHTML = pronosticos
    .map(
      (p) => `
        <tr>
            <td>${p.usuario}</td>
            <td>${p.partido}</td>
            <td>${p.resultado}</td>
        </tr>
    `,
    )
    .join("");
}
