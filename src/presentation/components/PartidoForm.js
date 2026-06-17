export function renderPartidos(partidos) {
  const container = document.getElementById("partidosContainer");

  const grupos = {};

  partidos.forEach((partido) => {
    if (!grupos[partido.GRUPO]) {
      grupos[partido.GRUPO] = [];
    }

    grupos[partido.GRUPO].push(partido);
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
                                <div class="partido">

                                    <div class="equipos">
                                        <span>
                                            ${partido.LOCAL}
                                        </span>

                                        <span class="vs">
                                            VS
                                        </span>

                                        <span>
                                            ${partido.VISITA}
                                        </span>
                                    </div>

                                    <div class="marcador">

                                        <input
                                            type="number"
                                            min="0"
                                            class="goles-local"
                                            data-id="${partido.ID_PARTIDO}"
                                        >

                                        <span>-</span>

                                        <input
                                            type="number"
                                            min="0"
                                            class="goles-visita"
                                            data-id="${partido.ID_PARTIDO}"
                                        >

                                    </div>

                                </div>
                            `,
                      )
                      .join("")}

                </div>
            `;

    container.appendChild(details);
  });
}
