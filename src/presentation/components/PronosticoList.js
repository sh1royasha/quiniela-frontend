export function renderPronosticos(pronosticos) {
  const container = document.getElementById("pronosticos");

  const grupos = {};

  pronosticos.forEach((item) => {
    if (!grupos[item.GRUPO]) {
      grupos[item.GRUPO] = [];
    }

    grupos[item.GRUPO].push(item);
  });

  container.innerHTML = "";

  Object.keys(grupos).forEach((grupo) => {
    const details = document.createElement("details");

    details.className = "grupo-card";

    details.innerHTML = `
                <summary>
                    Grupo ${grupo}
                </summary>

                <div class="grupo-contenido">
                    ${grupos[grupo]
                      .map(
                        (partido) => `
                            <div class="partido-item">
                                <span>
                                    ${partido.PARTIDO}
                                </span>

                                <span class="resultado">
                                    ${partido.PRONOSTICO}
                                </span>
                            </div>
                        `,
                      )
                      .join("")}
                </div>
            `;

    container.appendChild(details);
  });
}
